import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { createClient } from "@/prismicio";
import clsx from "clsx";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Split Summer School",
  description: "Split Summer School",
};

export default async function RootLayout({ children }) {
  const client = await createClient();
  const navigation = await client.getSingle("navigation");
  console.log(navigation.data.slices);

  const programs = [
    { slug: "courses", title: "Courses" },
    { slug: "how_to_apply", title: "How to Apply" },
    { slug: "contact_us", title: "Contact Us" },
  ];
  const contact = {
    address: "Matice hrvatske 15, 21 000 Split",
    email: "summerschool@gradst.hr",
    phone: "+385 21 303 366",
  };
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header navigation={navigation} contact={contact} programs={programs} />
        {children}
      </body>
    </html>
  );
}
