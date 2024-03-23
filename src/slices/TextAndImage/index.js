/**
 * @typedef {import("@prismicio/client").Content.TextAndImageSlice} TextAndImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextAndImageSlice>} TextAndImageProps
 * @param {TextAndImageProps}
 */
import Image from "next/image";
import clsx from "clsx";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import highlight from "/public/images/illustrations/underline-simple-light-purple.svg";
import lightYellowBlob from "/public/images/illustrations/blob-light-yellow.svg";
import lightPurpleBlob from "/public/images/illustrations/blob-light-purple.svg";
import lightRoseBlob from "/public/images/illustrations/blob-light-rose.svg";
import dotsStrip from "/public/images/illustrations/dots-large-strip.svg";
import dots from "/public/images/illustrations/dots.svg";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const bgBlobs = [lightYellowBlob, lightPurpleBlob, lightRoseBlob];
const components = {
  paragraph: ({ children }) => (
    <p className="mt-3 max-w-xl text-lg text-purple-800 sm:text-xl sm:leading-relaxed">
      {children}
    </p>
  ),
};

const TextAndImage = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="overflow-hidden px-4 pb-28 sm:px-6 sm:pb-36 lg:px-8"
    >
      <div className="mx-auto max-w-screen-xl">
        {/* Block 1 */}

        <div className="mx-auto mt-20 grid max-w-xl gap-14 sm:mt-24 sm:gap-16 lg:mt-44 lg:max-w-none lg:grid-cols-12 lg:gap-8">
          {/* Block text content */}
          <div
            className={clsx(
              "relative z-10 order-2 flex flex-col justify-center lg:col-span-6 lg:text-left"
            )}
          >
            <div>
              <span className="inline-block -rotate-1 rounded-full bg-purple-200 px-4 py-2 font-medium text-purple-700 shadow-md">
                <>{slice.primary.overtitle}</>
              </span>
            </div>
            <div>
              <h2 className="h3 mt-3.5 font-bold text-purple-900">
                <>{slice.primary.heading}</>
              </h2>

              <PrismicRichText
                field={slice.primary.content}
                components={components}
              />
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
          </div>
          {/* Block graphics */}
          <div
            className={clsx(
              "relative order-1 mx-auto w-full max-w-xl lg:col-span-6 lg:mx-0 lg:flex lg:max-w-none lg:items-center"
            )}
          >
            {/* Blob background decoration on large screens */}
            <div className="hidden lg:block">
              <Image
                src={bgBlobs[0]}
                className="absolute inset-0 h-full w-full transform lg:scale-135"
                alt=""
              />
            </div>

            <div
              className={clsx(
                "relative mx-auto w-full rounded-3xl shadow-lg lg:max-w-lg lg:ml-auto lg:mr-0"
              )}
            >
              <div className="relative block w-full">
                {/* Block image */}
                <figure className="relative aspect-[12/10] md:order-1">
                  <PrismicNextImage
                    field={slice.primary.image}
                    className="absolute inset-0 h-full w-full rounded-3xl
                  object-cover object-center shadow-xl"
                    fill
                    sizes="(min-width:
                  1024px) 32rem, (min-width: 576px) 36rem, 100vw"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextAndImage;
