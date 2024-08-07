import type { GetServerSideProps, Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloWrapper } from "./lib/ApolloProvider";
import { usePathname } from "next/navigation";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

export const metadata: Metadata = {
  title: "Peter and Penny wedding",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <main style={{}}>
          <Theme>
            <ApolloWrapper>{children}</ApolloWrapper>
          </Theme>
        </main>
      </body>
    </html>
  );
}
