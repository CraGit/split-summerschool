"use client";

import { PrismicNextImage } from "@prismicio/next";

import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */

const components = {
  h1: ({ children }) => (
    <h1 className="max-w-xl mt-4 text-center text-purple-900 sm:mt-5 lg:max-w-none lg:text-left text-5xl">
      {children}
    </h1>
  ),
  p: ({ children }) => (
    <p className="max-w-2xl mt-3 text-xl leading-loose text-center text-purple-800 lg:text-left">
      {children}
    </p>
  ),
};

const ratings = [
  { label: "Great Schools", stars: 5 },
  { label: "Private School Review", stars: 5 },
  { label: "Google Reviews", stars: 5 },
];
const Hero = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 pt-16 bg-gradient-to-b from-purple-25 to-purple-50 sm:px-6 lg:px-8"
    >
      {/* Hero container */}
      <div
        className="max-w-screen-xl mx-auto lg:grid lg:grid-cols-12 lg:gap-8"
        x-data="{ modalOpen: false }"
      >
        {/* Hero text content */}
        <div className="flex flex-col items-center justify-center lg:col-span-6 lg:items-start">
          <div>
            <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
              <>{slice.primary.overtitle}</>
            </span>
          </div>
          {/* <PrismicRichText
            field={slice.primary.heading}
            components={components}
          /> */}
          <h1
            className="
          max-w-xl mt-4 text-center text-purple-900 sm:mt-5 lg:max-w-none lg:text-left text-5xl font-extrabold lg:text-6xl"
          >
            {slice.primary.heading}
          </h1>
          <p className="max-w-2xl mt-3 text-xl leading-loose text-center text-purple-800 lg:text-left">
            {slice.primary.subheading}
          </p>
          {/* Hero buttons */}
          <div className="flex flex-col items-center mt-8 overflow-hidden sm:flex-row">
            <Button href={slice.primary.button_link}>
              {slice.primary.button_text}
              <Icon
                icon="arrowNarrowRight"
                className="w-6 h-6 ml-3 group-hover:animate-horizontal-bounce"
                stroke={2}
              />
            </Button>
          </div>
        </div>
        {/* Hero image & video */}
        <div className="flex flex-col justify-center w-full max-w-3xl mx-auto mt-16 lg:col-span-6 lg:mt-0 lg:max-w-none">
          <div className="relative">
            <PrismicNextImage
              field={slice.primary.image}
              priority
              className="w-full h-auto"
              alt="Bright Photo Collage"
              sizes="(min-width: 1280px) 39rem, (min-width: 1024px) 50vw, (min-width: 768px) 48rem, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
