"use client";

import { ContactHeader } from "@/components/ContactHeader";
import { Navbar } from "@/components/Navbar";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function Header({ programs, contact, navigation }) {
  const pathname = usePathname();
  return (
    <header>
      <ContactHeader contact={contact} />
      <Navbar navigation={navigation} />
    </header>
  );
}
