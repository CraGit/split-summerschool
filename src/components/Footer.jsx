import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { PrismicNextLink } from "@prismicio/next";
import logo from "/public/images/logo.png";
import { Icon } from "@/components/Icon";

function SocialLink({ className, href, icon }) {
  return (
    <Link
      className={clsx(
        "flex h-10 w-10 items-center justify-center rounded-full bg-dark duration-300 ease-in-out hover:bg-purple-600",
        className
      )}
      href={href}
    >
      <Icon icon={icon} className="h-5 w-5 text-white" />
    </Link>
  );
}

export const Footer = ({ navigation }) => {
  return (
    <footer className="space-y-8 divide-y divide-purple-400/20 bg-tertiary/50 px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      {/* Top section: blocks */}
      <div className="mx-auto grid max-w-md gap-y-8 sm:max-w-none sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 md:gap-x-12 lg:max-w-screen-2xl lg:grid-cols-11 lg:gap-8 xl:gap-12">
        {/* Block 1 */}
        <div className="flex flex-col lg:col-span-4 lg:mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-60 flex-shrink-0 flex-grow-0">
              <Link href="/">
                <Image src={logo} alt="logo" className="h-auto" />
              </Link>
            </div>
          </div>
          {/* Mission statement */}
          <div className="mt-6 text-lg text-dark">
            <strong> Split Summer School</strong>
            <br />
            University of Split <br /> Faculty of Civil Engineering,
            Architecture and Geodesy
          </div>

          {/* Social links */}
          <div className="mt-5 w-full lg:mt-6">
            <div className="flex justify-start space-x-4">
              <SocialLink
                href="https://facebook.com/split.summerschool"
                icon="facebook"
              />
            </div>
          </div>
        </div>
        {/* Block 2 */}

        {/* Block 3 */}
        <div className="flex-shrink sm:order-4 lg:order-none lg:col-span-2">
          <h6 className="relative text-xl font-bold tracking-wide text-dark">
            <span className="relative z-20">Links</span>
            <span className="absolute -bottom-1 left-0 z-10 h-1 w-12 rounded-lg bg-gradient-to-r from-primary/60 to-primary/80" />
          </h6>
          {/* Site links */}
          <ul className="mt-6 divide-y divide-purple-400/20 text-lg">
            {navigation.data.slices.map((item, index) => (
              <li
                key={`footer-site-link-${item.primary.label}`}
                className={clsx(
                  "font-medium text-dark duration-300 ease-in-out hover:text-dark/70",
                  index == 0 && "pb-2",
                  index == navigation.data.slices.length && "pt-2",
                  index > 0 && index < navigation.data.slices.length && "py-2"
                )}
              >
                <PrismicNextLink field={item.primary.link}>
                  {item.primary.label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </div>
        {/* Block 4 */}
        <div className="sm:order-2 lg:order-none lg:col-span-3 lg:mx-auto ">
          <h6 className="relative text-xl font-bold tracking-wide text-dark">
            <span className="relative z-20">Contact us</span>
            <span className="absolute -bottom-1 left-0 z-10 h-1 w-12 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500" />
          </h6>
          {/* Contact information */}
          <ul className="mt-6 flex flex-col space-y-5">
            {/* Address */}
            <li className="flex max-w-xs flex-shrink">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary">
                  <Icon icon="mapPin" className="h-6 w-6 text-dark" />
                </span>
              </div>
              <div className="ml-3 mt-0 flex-1 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-dark">
                  Address
                </h5>
                <p className="mt-0.5 text-sm leading-relaxed text-dark/90 text-opacity-90">
                  Matice hrvatske 15, 21 000 Split
                </p>
              </div>
            </li>
            {/* Email */}
            <li className="flex flex-shrink-0">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-tertiary/60">
                  <Icon icon="mail" className="h-6 w-6 text-dark/80" />
                </span>
              </div>
              <div className="ml-3 flex-1 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-dark">
                  Email
                </h5>
                <p className="mt-0.5 text-sm leading-relaxed text-dark/90 text-opacity-90">
                  summerschool@gradst.hr
                </p>
              </div>
            </li>
            {/* Phone number */}
            <li className="flex flex-shrink-0">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/40">
                  <Icon icon="phone" className="h-6 w-6 text-dark/80" />
                </span>
              </div>
              <div className="ml-3 flex-1 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-dark">
                  Phone
                </h5>
                <p className="mt-0.5 text-sm leading-relaxed text-dark/90 text-opacity-90">
                  +385 21 303 366
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom section */}
      <div className="mx-auto flex max-w-md flex-col justify-between py-8 sm:max-w-none sm:flex-row lg:max-w-screen-2xl">
        {/* Copyright note */}
        <span className="text-base text-dark">
          © {new Date().getFullYear()} Split Summer School. All rights
          reserved.
        </span>
      </div>
    </footer>
  );
};
