"use client";

import { PrismicNextImage } from "@prismicio/next";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */

const Hero = ({ slice }) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 sm:px-6 lg:px-8 pb-8 md:py-16 bg-tertiary/50"
    >
      {/* Hero container */}
      <div className="max-w-screen-xl mx-auto" x-data="{ modalOpen: false }">
        {/* Hero text content */}
        <div className="flex flex-col items-center justify-center lg:col-span-6 lg:items-start px-6 py-8 rounded-2xl">
          <div>
            <span className="inline-block px-4 py-2 font-medium text-dark bg-tertiary/80 rounded-full shadow-md -rotate-1">
              <>{slice.primary.overtitle}</>
            </span>
          </div>

          <h1
            className="
          max-w-xl mt-4 text-center text-dark sm:mt-5 lg:max-w-none lg:text-left h1"
          >
            {slice.primary.heading}
          </h1>
          <div className="flex flex-col justify-center w-full max-w-3xl mx-auto my-2 md:my-6 lg:col-span-6 lg:mt-0 lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden ">
              <PrismicNextImage
                field={slice.primary.image}
                priority
                className="w-full h-auto"
                sizes="(min-width: 1280px) 39rem, (min-width: 1024px) 50vw, (min-width: 768px) 48rem, 100vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="absolute inline-flex w-20 h-20 bg-tertiary rounded-full animate-ping opacity-60" />
                {/* Video modal button */}
                <button
                  className="relative z-10 flex items-center justify-center w-20 h-20 duration-300 ease-in-out rounded-full outline-none group bg-tertiary/90 hover:bg-tertiary/95"
                  onClick={() => openModal()}
                >
                  <Icon
                    icon="playFilled"
                    className="w-12 h-12 duration-300 ease-in-out text-white/90 group-hover:text-white/95"
                  />
                </button>
              </div>
            </div>
          </div>
          <p className="max-w-2xl mt-3 text-xl leading-loose text-center text-dark lg:text-left">
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
            {/* <Button
              variant="tertiary"
              className="mt-6 sm:ml-6 sm:mt-0"
              onClick={() => openModal()}
            >
              <Icon
                icon="playFilled"
                className="mr-3 text-tertiary duration-300 ease-in-out h-7 w-7 group-hover:text-purple-50"
              />
              Watch video
            </Button> */}
          </div>
        </div>

        {/* Video modal*/}
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 w-full h-full px-4 overflow-hidden transition duration-150 ease-linear"
            aria-modal="true"
            onClose={closeModal}
          >
            {/* Modal overlay */}
            <Transition.Child
              as={Fragment}
              enter="transition ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-50"
              leave="transition ease-in duration-200"
              leaveFrom="opacity-50"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 w-screen h-screen transition-opacity duration-300 ease-linear bg-black opacity-50" />
            </Transition.Child>
            <div className="flex items-center justify-center w-auto min-h-screen mx-auto">
              {/* Modal Content */}
              <Transition.Child
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 scale-95 translate-y-24"
                enterTo="opacity-100 scale-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveFrom="opacity-100 scale-100 translate-y-0"
                leaveTo="opacity-0 scale-95 translate-y-24"
              >
                <Dialog.Panel className="w-full max-w-6xl max-h-full overflow-auto bg-white rounded-2xl">
                  <div className="relative aspect-h-9 aspect-w-16">
                    <iframe
                      className="absolute w-full h-full"
                      src={slice.primary.video_embed_link}
                      title="Video"
                      allowFullScreen
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </section>
  );
};

export default Hero;
