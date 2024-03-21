"use client";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { PrismicNextLink } from "@prismicio/next";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import MobileMenuButton from "./MobileMenuButton";
import clsx from "clsx";

export default function HeaderK({ navigation }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <header className="h-24 border-b border-slate-200/80 bg-white">
      <Container className="flex h-full w-full items-center">
        <nav className="relative z-50 flex w-full items-center justify-between">
          <div className="flex shrink-0 items-center">
            <Link
              href="/"
              aria-label="Home"
              className="flex flex-shrink-0 items-center"
            >
              <Image
                src="/images/logo.png"
                alt="Split Summer School Logo"
                width={200}
                height={45}
              />
            </Link>
          </div>
          <div className="hidden items-center md:flex md:space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <div
                className={clsx(
                  "relative",
                  item.items.child_label !== null && "group"
                )}
                key={item.primary.label}
              >
                {/* {console.log("item link ", item.primary.link)} */}
                <PrismicNextLink
                  field={item.primary.link}
                  className={clsx(
                    'relative duration-200 after:absolute after:-bottom-2.5 after:left-1/2 after:h-0.5 after:w-4 after:-translate-x-1/2 after:rounded-full after:bg-slate-900 after:opacity-0 after:content-[""]',
                    pathname === item.primary.link.url
                      ? "font-semibold text-slate-900 after:opacity-100"
                      : "font-medium text-slate-700 hover:text-slate-900 hover:after:opacity-25"
                  )}
                >
                  {item.primary.label}
                </PrismicNextLink>
                {item.items[0]?.child_label != null && (
                  <div className="hidden group-hover:block  absolute left-0 z-20 w-52 space-y-1 rounded-lg bg-white p-2.5 outline-none drop-shadow filter focus:outline-none">
                    {item.items.map((subitem) => (
                      <div key={subitem.child_label}>
                        <PrismicNextLink
                          field={subitem.child_link}
                          className={clsx(
                            "text-sm font-medium leading-5 text-slate-900 hover:text-narancasta  transition-colors duration-200",
                            pathname === subitem.child_link && "text-slate-700"
                          )}
                        >
                          {subitem.child_label}
                        </PrismicNextLink>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="md:hidden ml-auto">
            <MobileMenuButton toggleMenu={toggleMenu} open={open} />
          </div>
          <MobileMenu
            navigation={navigation}
            pathname={pathname}
            open={open}
            setOpen={setOpen}
          />

          {/* <div className="flex items-center">
                <Button variant="secondary" href="#">
                  Book a call
                </Button>
                <div className="ml-4 md:hidden"></div>
              </div> */}
        </nav>
      </Container>
    </header>
  );
}
