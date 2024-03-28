"use client";
/**
 * @typedef {import("@prismicio/client").Content.FaqSlice} FaqSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FaqSlice>} FaqProps
 * @param {FaqProps}
 */
import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Icon } from "@/components/Icon";
import questionMark from "/public/images/illustrations/question-mark.svg";
import bulb from "/public/images/illustrations/bulb.svg";

const Faq = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 sm:px-6 lg:px-8 py-16 bg-tertiary/40"
    >
      {/* Container */}
      <div className="mx-auto px-4 sm:px-6 lg:max-w-screen-lg lg:px-8">
        {/* Section header title and subtext  */}
        <div className="max-w-2xl">
          <h2 className="h2 text-dark">
            <>{slice.primary.heading}</>
          </h2>
          <p className="mt-4 max-w-2xl text-xl leading-relaxed text-dark lg:text-left">
            <>{slice.primary.content}</>
          </p>
        </div>
        {/* FAQ */}
        <ul className="relative mt-12 space-y-6">
          {/* Decorator images*/}
          <div>
            <Image
              className="absolute -left-60 top-10 hidden h-auto w-28 2xl:block"
              src={questionMark}
              alt="question mark icon"
            />
            <Image
              className="absolute -right-60 bottom-10 hidden h-auto w-28 2xl:block"
              src={bulb}
              alt="bulb icon"
            />
          </div>
          {slice.items.map((faq, index) => (
            <Disclosure
              key={faq.question}
              as="li"
              className="w-full rounded-3xl bg-white px-5 py-6 sm:px-12 sm:py-8"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className="group flex w-full items-center justify-between text-lg sm:text-xl">
                    <span className="text-left font-medium text-dark duration-300 ease-in-out group-hover:text-dark/80">
                      {faq.question}
                    </span>
                    <Icon
                      icon="chevronDown"
                      className={clsx(
                        open && "rotate-180",
                        "ml-3 h-6 w-6 flex-shrink-0 text-dark duration-300 ease-in-out group-hover:text-dark/80 sm:ml-6"
                      )}
                      stroke={2}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="mt-3 text-base leading-relaxed text-dark/90 sm:text-lg">
                      {faq.answer}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
