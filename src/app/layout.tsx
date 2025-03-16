import NavBar from "@/componentts/organisms/NavBar";
import "./globals.css";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>Daily Gist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <html lang="en">
        <body>
          
          <NavBar />
          {children}
        </body>
      </html>
    </>
  );
}