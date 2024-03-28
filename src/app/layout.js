import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { createClient } from "@/prismicio";
import clsx from "clsx";
import { Footer } from "@/components/Footer";

const roboto = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Split Summer School",
  description: "Split Summer School",
};

export default async function RootLayout({ children }) {
  const client = await createClient();
  const navigation = await client.getSingle("navigation");

  const contact = {
    address: "Matice hrvatske 15, 21 000 Split",
    email: "summerschool@gradst.hr",
    phone: "+385 21 303 366",
  };
  return (
    <html lang="en" className="bg-gradient-to-b  text-dark">
      <body className={clsx("font-sans", roboto.variable)}>
        <Header navigation={navigation} contact={contact} />
        {children}
        <Footer navigation={navigation} />
      </body>
    </html>
  );
}
