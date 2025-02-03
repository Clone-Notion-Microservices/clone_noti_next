import { useSession } from "next-auth/react";

export function usePermissions(requiredPermissions: string[]) {
  const { data: session } = useSession();
  console.log(session);
  const userPermissions = session?.user?.permissions || [];

  return requiredPermissions.some((perm) => userPermissions.includes(perm));
}
