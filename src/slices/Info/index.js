/**
 * @typedef {import("@prismicio/client").Content.InfoSlice} InfoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<InfoSlice>} InfoProps
 * @param {InfoProps}
 */
import clsx from "clsx";

import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { PrismicNextLink } from "@prismicio/next";
const Info = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full px-4 sm:px-6  xl:px-8 py-16 "
    >
      {/* Container */}
      <div className="mx-auto max-w-xl lg:max-w-screen-xl">
        <div className="md:gap-16 lg:grid lg:grid-cols-2 lg:gap-0">
          {/* Section content */}
          <div className="flex flex-col justify-center pr-10 xl:pr-0">
            <div>
              <span className="inline-block -rotate-1 rounded-full bg-tertiary/70 px-4 py-2 font-medium text-dark shadow-md">
                {slice.primary.overtitle}
              </span>
            </div>
            <h2 className="h2 mt-3.5 max-w-xl text-dark sm:mt-4">
              {slice.primary.heading}
            </h2>
            <p className="mt-3 max-w-lg text-lg leading-relaxed text-dark">
              {slice.primary.content}
            </p>
            {/* Contact link */}
            <div className="mt-8 font-medium lg:mt-10">
              <PrismicNextLink
                field={slice.primary.link}
                className="group mt-1.5 flex w-[126px] max-w-full cursor-pointer items-center border-b-2 border-solid border-tertiary bg-transparent px-0 py-0.5 text-left leading-6 text-dark no-underline transition duration-300 ease-in-out hover:border-tertiary/70 hover:text-tertiary/80"
              >
                <span className="text-left text-base font-bold">
                  {slice.primary.link_text}
                </span>
                <Icon
                  icon="arrowNarrowRight"
                  className="ml-3 h-6 w-6 group-hover:animate-horizontal-bounce"
                  stroke={2}
                />
              </PrismicNextLink>
            </div>
          </div>
          {/* Pricing cards */}
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:mt-20 lg:gap-4 xl:gap-8">
            <div
              className={clsx(
                "bg-tertiary/40 w-full rounded-xl px-6 py-10 lg:px-5 xl:px-10",
                ""
              )}
            >
              <div className="relative">
                <div className="relative inline-block w-full text-left">
                  <h4 className="relative text-lg font-bold tracking-normal text-dark">
                    {slice.primary.box1_overtitle}
                  </h4>
                  <div className="mt-2">
                    <h3 className="h3 text-dark">
                      {slice.primary.box1_heading}
                    </h3>
                    <div className="mt-3">
                      <div className="inline-block h-6 -rotate-1 rounded-xl bg-tertiary/70 px-3 align-top text-sm font-medium leading-6 text-dark">
                        {slice.primary.box1_subtitle}
                      </div>
                    </div>
                    <p className="mt-6 block w-full font-medium text-dark">
                      {slice.primary.box1_content}
                    </p>
                  </div>
                  {/* Features */}

                  {/* CTA button */}
                  <Button
                    href={slice.primary.box1_button_link}
                    className="mt-6"
                    variant="primary"
                    size="sm"
                  >
                    {slice.primary.box1_button_text}

                    <Icon
                      icon="arrowNarrowRight"
                      className="ml-3 h-5 w-5 group-hover:animate-horizontal-bounce"
                      stroke={2}
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div
              className={clsx(
                "bg-primary/40 lg:-translate-y-20 w-full rounded-xl px-6 py-10 lg:px-5 xl:px-10"
              )}
            >
              <div className="relative">
                <div className="relative inline-block w-full text-left">
                  <h4 className="relative text-lg font-bold tracking-normal text-dark">
                    {slice.primary.box2_overtitle}
                  </h4>
                  <div className="mt-2">
                    <h3 className="h3 text-dark">
                      {slice.primary.box2_heading}
                    </h3>
                    <div className="mt-3">
                      <div className="inline-block h-6 -rotate-1 rounded-xl bg-primary/50 px-3 align-top text-sm font-medium leading-6 text-dark">
                        {slice.primary.box2_subtitle}
                      </div>
                    </div>
                    <p className="mt-6 block w-full font-medium text-dark">
                      {slice.primary.box2_content}
                    </p>
                  </div>
                  {/* CTA button */}
                  <Button
                    href={slice.primary.box2_button_link}
                    className="mt-6"
                    variant="primary"
                    size="sm"
                  >
                    {slice.primary.box2_button_text}

                    <Icon
                      icon="arrowNarrowRight"
                      className="ml-3 h-5 w-5 group-hover:animate-horizontal-bounce"
                      stroke={2}
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
