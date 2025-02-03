import '@/app/ui/global.css'
import {montserrat} from "@/app/ui/fonts";
import {SessionProvider} from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
      <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
