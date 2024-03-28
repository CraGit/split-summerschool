"use client";

import { PrismicNextImage } from "@prismicio/next";
import LightGallery from "lightgallery/react";
/**
 * @typedef {import("@prismicio/client").Content.SmallGallerySlice} SmallGallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SmallGallerySlice>} SmallGalleryProps
 * @param {SmallGalleryProps}
 */
import "lightgallery/css/lightgallery.css";
const SmallGallery = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative bg-purple-25 px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="mx-auto max-w-screen-xl">
        {/* Hero header text */}
        <div className="relative">
          <div className="flex justify-center">
            <span className="inline-block -rotate-1 rounded-full bg-secondary/20 px-4 py-2 font-medium text-secondary shadow-md">
              {slice.primary.overtitle}
            </span>
          </div>
          <h2 className="h1 mx-auto mt-4 max-w-3xl text-center text-secondary">
            {slice.primary.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-xl leading-relaxed text-dark sm:mt-5">
            {slice.primary.content}
          </p>
        </div>

        {/* Hero images */}
        <LightGallery speed={500} selector="figure">
          <div
            id="hero-gallery"
            className="relative z-10 mt-14 grid grid-cols-12 gap-4 sm:mt-16 sm:gap-6 md:mt-20 lg:mt-24 lg:gap-10 lg:px-4 xl:gap-12 2xl:px-16"
          >
            <div className="col-span-4 flex flex-col md:col-span-2 md:justify-end">
              {/* Image 1 */}
              <figure
                className="group aspect-h-1 aspect-w-1 relative w-full cursor-pointer hover:z-50"
                data-src={slice.primary.image_1.url}
              >
                <PrismicNextImage
                  field={slice.primary.image_1}
                  className="absolute inset-0 h-full w-full rotate-3 rounded-2xl object-cover object-center shadow-2xl duration-300 ease-in-out group-hover:rotate-0 group-hover:scale-110 md:-translate-y-12 md:translate-x-3 md:-rotate-8"
                  sizes="(min-width: 1280px) 11.875rem, (min-width: 768px) 16.67vw, 33vw"
                />
              </figure>
            </div>
            <div className="col-span-8 flex md:col-span-3 md:flex-col">
              {/* Image 2 */}
              <div className="mr-2 w-1/2 sm:mr-3 md:mr-0 md:w-full">
                <figure
                  className="group aspect-h-1 aspect-w-1 relative z-10 cursor-pointer hover:z-50"
                  data-src={slice.primary.image_2.url}
                >
                  <PrismicNextImage
                    field={slice.primary.image_2}
                    className="absolute inset-0 h-full w-full -rotate-3 rounded-2xl object-cover object-center shadow-2xl duration-300 ease-in-out group-hover:rotate-0 group-hover:scale-110 md:-rotate-8"
                    sizes="(min-width: 1280px) 17.875rem, (min-width: 768px) 25vw, 33vw"
                  />
                </figure>
              </div>

              {/* Image 3 */}
              <div className="relative ml-2 w-1/2 sm:ml-3 md:ml-6">
                <figure
                  className="group aspect-h-1 aspect-w-1 cursor-pointer hover:z-50"
                  data-src={slice.primary.image_3.url}
                >
                  <PrismicNextImage
                    field={slice.primary.image_3}
                    className="absolute inset-0 h-full w-full rotate-3 rounded-2xl object-cover object-center shadow-2xl duration-300 ease-in-out group-hover:rotate-0 group-hover:scale-110 md:rotate-8"
                    sizes="(min-width: 1280px) 9rem, (min-width: 768px) 12.5vw, 33vw"
                  />
                </figure>
              </div>
            </div>
            <div className="col-span-4 md:col-span-4 md:pr-4">
              {/* Image 4 */}
              <figure
                className="group aspect-h-1 aspect-w-1 relative w-full cursor-pointer hover:z-50"
                data-src={slice.primary.image_4.url}
              >
                <PrismicNextImage
                  field={slice.primary.image_4}
                  className="absolute inset-0 h-full w-full -rotate-3 rounded-2xl object-cover object-center shadow-2xl duration-300 ease-in-out group-hover:rotate-0 group-hover:scale-110 md:rotate-4"
                  sizes="(min-width: 1280px) 22.5rem, 33vw"
                />
              </figure>
            </div>
            <div className="col-span-8 flex md:col-span-3 md:translate-y-12 md:flex-col md:pr-3">
              {/* Image 5 */}
              <div className="mr-2 w-1/2 sm:mr-3 md:mr-0 md:w-full">
                <figure
                  className="group aspect-h-1 aspect-w-1 relative z-10 cursor-pointer hover:z-50"
                  data-src={slice.primary.image_5.url}
                >
                  <PrismicNextImage
                    field={slice.primary.image_5}
                    className="absolute inset-0 h-full w-full rotate-3 rounded-2xl object-cover object-center shadow-2xl duration-300 ease-in-out group-hover:rotate-0 group-hover:scale-110 md:rotate-12"
                    sizes="(min-width: 1280px) 17.875rem, (min-width: 768px) 25vw, 33vw"
                  />
                </figure>
              </div>

              {/* Image 6 */}
              <div className="relative ml-2 w-1/2 sm:ml-3 md:-ml-3 md:w-2/3 lg:-ml-6">
                <figure
                  className="group aspect-h-1 aspect-w-1 relative cursor-pointer hover:z-50 md:-translate-y-6"
                  data-src={slice.primary.image_6.url}
                >
                  <PrismicNextImage
                    field={slice.primary.image_6}
                    className="absolute inset-0 h-full w-full -rotate-3 rounded-2xl object-cover object-center shadow-2xl duration-300 ease-in-out group-hover:rotate-0 group-hover:scale-110 md:-rotate-8"
                    sizes="(min-width: 1280px) 11.375rem, (min-width: 768px) 16.67vw, 33vw"
                  />
                </figure>
              </div>
            </div>
          </div>
        </LightGallery>
      </div>
    </section>
  );
};

export default SmallGallery;
