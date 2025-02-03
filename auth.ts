import NextAuth from 'next-auth';
import {authConfig} from './auth.config';
import Credentials from "@auth/core/providers/credentials";
import {z} from 'zod';
import type {User} from '@/app/lib/definitions';
import {loginUser} from "@/app/lib/actions";

async function getUser(email: string, password: string): Promise<User | undefined> {
  try {
    return await loginUser(email, password);
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const {auth, handlers, signIn, signOut} = NextAuth({
  ...authConfig,
  providers: [Credentials({
    async authorize(credentials) {
      const parsedCredentials = z
        .object({email: z.string().email(), password: z.string().min(6)})
        .safeParse(credentials);
      if (parsedCredentials.success) {
        const {email, password} = parsedCredentials.data;
        const user = await getUser(email, password);
        if (!user?.email) return null;
        return {...user, token: user.token};
      }
      return null;
    },
  })],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.accessToken) {
        session.accessToken = token.accessToken;
        session.user = {
          email: token.email,
          name: token.name,
        };
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});
