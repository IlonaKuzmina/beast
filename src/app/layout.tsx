import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import 'tailwindcss/tailwind.css';
import { Providers } from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: "CryptoBeast",
  description: "CryproBeast description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
