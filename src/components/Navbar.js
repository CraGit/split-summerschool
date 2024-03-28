"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { Menu, Transition, Popover } from "@headlessui/react";
import clsx from "clsx";
import { PrismicNextLink } from "@prismicio/next";
import { useState } from "react";
import logo from "/public/images/logo.png";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";

export function Navbar({ navigation }) {
  const pathname = usePathname();

  function MenuIcon({ open }) {
    return (
      <>
        <span
          className={clsx(
            "absolute block h-1 rotate-0 transform rounded-full opacity-100 transition-all duration-300 ease-in-out",
            open
              ? "left-1/2 top-2 w-0 bg-white group-hover:bg-white"
              : "left-0 top-0 w-full bg-dark group-hover:bg-dark/80"
          )}
        />
        <span
          className={clsx(
            "absolute left-0 top-2 block h-1 w-full transform rounded-full opacity-100 transition-all duration-300 ease-in-out group-hover:bg-dark/80",
            open
              ? "rotate-45 bg-purple-50 group-hover:bg-white"
              : "rotate-0 bg-dark group-hover:bg-dark/80"
          )}
        />
        <span
          className={clsx(
            "absolute left-0 top-2 block h-1 w-full transform rounded-full opacity-100 transition-all duration-300 ease-in-out group-hover:bg-dark/80",
            open
              ? "-rotate-45 bg-purple-50 group-hover:bg-white"
              : "rotate-0 bg-dark group-hover:bg-dark/80"
          )}
        />
        <span
          className={clsx(
            "absolute block h-1 rotate-0 transform rounded-full opacity-100 transition-all duration-300 ease-in-out group-hover:bg-dark/80",
            open
              ? "left-1/2 top-2 w-0 bg-purple-50 group-hover:bg-white"
              : "left-0 top-4 w-full bg-dark group-hover:bg-dark/80"
          )}
        />
      </>
    );
  }

  function MobileNav() {
    return (
      <div className="block lg:hidden">
        <Popover>
          <Popover.Button
            className="group relative z-50 h-5 w-6 rotate-0 transform cursor-pointer transition duration-500 ease-in-out focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {({ open }) => <MenuIcon open={open} />}
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="duration-300 ease-out"
            enterFrom="opacity-0 -translate-y-full"
            enterTo="opacity-100 translate-y-0"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-full"
          >
            <Popover.Panel
              as="div"
              className="absolute inset-x-0 top-0 z-40 w-screen overflow-y-scroll bg-gradient-to-tr from-tertiary/90 to-tertiary px-4 py-16 sm:px-8"
            >
              <div className="flex h-full w-full flex-col items-center justify-center">
                <div className="mx-auto flex w-full flex-col items-center justify-evenly space-y-6">
                  {navigation.data.slices.map((item) => (
                    <Fragment key={`mobile-link-${item.primary.label}`}>
                      <PrismicNextLink field={item.primary.link}>
                        <div className="group relative p-0.5">
                          <span className="relative z-10 text-2xl font-medium text-dark duration-300 ease-in-out group-hover:text-white">
                            {item.primary.label}
                          </span>
                          <span className="absolute -left-1 -right-1 bottom-0 h-1.5 origin-bottom scale-x-0 transform rounded-lg bg-yellow-400 duration-300 ease-in-out group-hover:scale-x-100" />
                        </div>
                      </PrismicNextLink>
                    </Fragment>
                  ))}

                  <Button href={navigation.data.button_link}>
                    {navigation.data.button_text}
                  </Button>
                </div>

                {/* <hr className="my-8 w-full border-purple-200 border-opacity-30 sm:my-10" />

                <div className="mx-auto w-full max-w-md">
                  <p className="text-center text-lg font-semibold uppercase tracking-wider text-purple-200 sm:text-left">
                    Courses
                  </p>
                  <div className="mt-4 grid justify-items-center gap-4 sm:grid-cols-2 sm:justify-items-start sm:gap-x-8">
                    {navigation.map((subitem, index) => (
                      <PrismicNextLink
                        field={subitem.child_link}
                        key={subitem.child_label}
                        className={clsx(
                          index % 2 == 1 && "sm:justify-self-end"
                        )}
                      >
                        <div className="group relative p-0.5">
                          <span className="relative z-10 text-xl font-medium text-purple-50 duration-300 ease-in-out group-hover:text-white">
                            {subitem.child_label}
                          </span>
                          <span className="absolute -left-1 -right-1 bottom-0 h-1.5 origin-bottom scale-x-0 transform rounded-lg bg-yellow-400 duration-300 ease-in-out group-hover:scale-x-100" />
                        </div>
                      </PrismicNextLink>
                    ))}
                  </div>
                </div> */}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    );
  }
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div className="px-4 sm:px-6">
      <nav className="mx-auto flex max-w-screen-xl items-center pt-5">
        <div className="flex w-full items-center justify-between">
          {/* Main navigation menu for large screens */}
          <div className="hidden items-center justify-between md:space-x-6 lg:flex lg:space-x-10">
            {navigation.data.slices.map((link) => (
              <Fragment key={`desktop-link-${link.primary.label}`}>
                {link.items.length > 0 ? (
                  <Menu as="div" className="relative">
                    {({ open }) => (
                      <>
                        <Menu.Button
                          className="outline-none focus:outline-none"
                          onMouseEnter={() => setIsShowing(true)}
                          onMouseLeave={() => setIsShowing(false)}
                        >
                          <div className="group relative p-0.5">
                            <PrismicNextLink
                              field={link.primary.link}
                              className={clsx(
                                "relative z-10 flex items-center text-lg font-medium duration-300 ease-in-out group-hover:text-dark/80",
                                open ? "text-purple-600" : "text-dark"
                              )}
                            >
                              {link.primary.label}
                              {/* Heroicon name: solid/chevron-down */}
                              {/* Toggle class 'rotate-180' on dropdown open and close */}
                              <Icon
                                icon="chevronDown"
                                className={clsx(
                                  "h-4.5 ml-1.5 w-4.5 transform duration-300 ease-in-out",
                                  open && "rotate-180"
                                )}
                                stroke={2}
                              />
                            </PrismicNextLink>
                            <span className="absolute -left-1 -right-1 bottom-0 h-1.5 origin-bottom scale-x-0 transform rounded-lg bg-yellow-400 duration-300 ease-in-out group-hover:scale-x-100" />
                          </div>
                        </Menu.Button>

                        <Transition
                          as={Fragment}
                          show={isShowing}
                          onMouseEnter={() => setIsShowing(true)}
                          onMouseLeave={() => setIsShowing(false)}
                          enter="transition ease-out duration-300"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-200"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute left-1/2 z-20 mt-3 w-screen max-w-xs -translate-x-1/2 rounded-2xl border border-gray-50 bg-white p-4 shadow-lg outline-none focus:outline-none">
                            {link.items.map((item, index) => (
                              <Menu.Item
                                key={`desktop-dropdown-link-${item.child_label}`}
                                as="div"
                              >
                                {({ close }) => (
                                  <>
                                    <PrismicNextLink
                                      field={item.child_link}
                                      className={clsx(
                                        "group block w-full rounded-xl py-4 s</h5>m:p-5",
                                        pathname.includes(item.child_link)
                                          ? "bg-purple-25"
                                          : "transition duration-200 ease-in-out hover:bg-purple-25/60"
                                      )}
                                      onClick={close}
                                    >
                                      <h5 className="text-lg font-semibold text-dark">
                                        {item.child_label}
                                      </h5>
                                      {/* <p className="mt-1 text-sm text-purple-800 opacity-90">
                                        {program.data.dropdownDescription}
                                      </p> */}
                                    </PrismicNextLink>
                                    {index != link.items.length - 1 && (
                                      <>
                                        <hr className="my-1 border-purple-200/30 sm:my-2" />
                                      </>
                                    )}
                                  </>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                ) : (
                  <PrismicNextLink field={link.primary.link}>
                    <div className="group relative p-0.5">
                      <span
                        className={clsx(
                          "relative z-10 text-lg font-medium",
                          pathname === link.primary.link
                            ? "text-dark"
                            : "text-dark duration-300 ease-in-out group-hover:text-dark/80"
                        )}
                      >
                        {link.primary.label}
                      </span>
                      <span
                        className={clsx(
                          "absolute -left-1 -right-1 bottom-0 h-1.5 origin-bottom scale-x-0 transform rounded-lg bg-yellow-400",
                          pathname == link.primary.link
                            ? "scale-x-100"
                            : "duration-300 ease-in-out group-hover:scale-x-100"
                        )}
                      />
                    </div>
                  </PrismicNextLink>
                )}
              </Fragment>
            ))}
          </div>

          {/* Call to action button */}
          <div className="hidden lg:block py-4">
            <Button href={navigation.data.button_link}>
              {navigation.data.button_text}
            </Button>
          </div>
          {/* Logo on smaller screens: < lg */}
          <div className="block w-48 flex-shrink-0 flex-grow-0 sm:w-52 lg:hidden">
            <Link href="/">
              <Image
                src={logo}
                alt="Split Summer School Logo"
                className="h-auto"
              />
            </Link>
          </div>

          <MobileNav />
        </div>
      </nav>
    </div>
  );
}
