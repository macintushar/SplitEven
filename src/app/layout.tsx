import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "@/trpc/react";

import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "SplitEven",
  description: "An app to split expenses with a group.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <main>{children}</main>
          <Toaster />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
