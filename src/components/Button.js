import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";

const variantStyles = {
  primaryClassName: "text-black bg-primary hover:bg-yellow-600",
  secondaryClassName:
    "text-black bg-purple-200 hover:text-white hover:bg-purple-600",
  accentClassName: "text-white bg-purple-600 hover:bg-purple-500",
};

const sizeStyles = {
  smClassName: "px-5 py-2.5 text-base",
  lgClassName: "px-8 py-3.5 text-lg",
};

export function Button({
  variant = "primary",
  size = "lg",
  className,
  href,
  children,
  ...props
}) {
  className = clsx(
    "font-medium relative leading-normal inline-flex items-center justify-center duration-300 ease-in-out rounded-full outline-none group",
    variantStyles[`${variant}ClassName`],
    sizeStyles[`${size}ClassName`],
    className
  );

  return href ? (
    <PrismicNextLink field={href} className={className} {...props}>
      {children}
    </PrismicNextLink>
  ) : (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
