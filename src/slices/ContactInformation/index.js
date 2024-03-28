/**
 * @typedef {import("@prismicio/client").Content.ContactInformationSlice} ContactInformationSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactInformationSlice>} ContactInformationProps
 * @param {ContactInformationProps}
 */

import { Icon } from "@/components/Icon";

const ContactInformation = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative -mb-52 w-full -translate-y-52 bg-white px-4 py-16 sm:px-6 sm:pt-64 lg:px-8 lg:pt-72"
    >
      <div className="mx-auto max-w-xl lg:max-w-screen-xl">
        {/* Section header */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-32">
          <div className="flex items-center">
            <h2 className="h2 max-w-4xl text-dark">
              <>{slice.primary.heading}</>
            </h2>
          </div>
          <div className="mt-3 flex items-center sm:mt-4 lg:mt-0">
            <p className="text-lg text-dark/90 text-opacity-90 sm:text-xl">
              <>{slice.primary.content}</>
            </p>
          </div>
        </div>
        {/* Contact information cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-4 sm:gap-6 lg:mt-20 lg:grid-cols-3 xl:gap-12">
          {/* Address card */}
          <div className="rounded-3xl bg-yellow-200 px-4 py-8 sm:col-span-2 sm:p-8 lg:col-span-1">
            <div className="flex sm:flex-col lg:flex-row">
              <div>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                  <Icon icon="mapPin" className="h-8 w-8 text-dark/80" />
                </span>
              </div>
              <div className="ml-6 flex-1 sm:ml-0 sm:mt-3 lg:ml-6 lg:mt-0">
                <h5 className="flex items-center text-xl font-semibold text-dark">
                  Address
                </h5>
                <p className="mt-1.5 text-base leading-relaxed text-dark/90">
                  <>{slice.primary.address}</>
                </p>
              </div>
            </div>
          </div>
          {/* Email card */}
          <div className="rounded-3xl bg-purple-50 px-4 py-8 sm:col-span-2 sm:p-8 sm:py-10 lg:col-span-1">
            <div className="flex sm:flex-col lg:flex-row">
              <div>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-200">
                  <Icon icon="mail" className="h-8 w-8 text-dark/80" />
                </span>
              </div>
              <div className="ml-6 flex-1 sm:ml-0 sm:mt-3 lg:ml-6 lg:mt-0">
                <h5 className="flex items-center text-xl font-semibold text-dark">
                  Email us
                </h5>
                <p className="mt-1.5 text-base leading-relaxed text-dark/90">
                  <>{slice.primary.email}</>
                </p>
              </div>
            </div>
          </div>
          {/* Phone number card */}
          <div className="rounded-3xl bg-rose-50 px-4 py-8 sm:col-span-2 sm:col-start-2 sm:p-8 sm:py-10 lg:col-span-1 lg:col-start-3">
            <div className="flex sm:flex-col lg:flex-row">
              <div>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-200">
                  <Icon icon="phone" className="h-8 w-8 text-dark/80" />
                </span>
              </div>
              <div className="ml-6 flex-1 sm:ml-0 sm:mt-3 lg:ml-6 lg:mt-0">
                <h5 className="flex items-center text-xl font-semibold text-dark">
                  Call us
                </h5>
                <p className="mt-1.5 text-base leading-relaxed text-dark/90">
                  <>{slice.primary.phone}</>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Google map widget */}
      <div className="mt-16 rounded-3xl lg:mx-auto lg:mt-24 lg:max-w-screen-xl">
        <iframe
          className="w-full rounded-3xl"
          src={slice.primary.location_embed}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          height={450}
        />
      </div>
    </section>
  );
};

export default ContactInformation;
