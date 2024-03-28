/**
 * @typedef {import("@prismicio/client").Content.CourseContactPersonSlice} CourseContactPersonSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CourseContactPersonSlice>} CourseContactPersonProps
 * @param {CourseContactPersonProps}
 */
import { Icon } from "@/components/Icon";

const CourseContactPerson = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 sm:px-6 lg:px-8 py-8 md:py-16"
    >
      <div className="mx-auto max-w-xl lg:max-w-screen-xl">
        {/* Section header */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-32">
          <div className="flex items-center">
            <h2 className="h2 max-w-4xl text-dark">Contact Person</h2>
          </div>
        </div>
        {/* Contact information cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-4 sm:gap-6 lg:mt-20 lg:grid-cols-3 xl:gap-12">
          {/* Address card */}
          <div className="rounded-3xl bg-primary/40 px-4 py-8 sm:col-span-2 sm:p-8 lg:col-span-1">
            <div className="flex sm:flex-col lg:flex-row">
              <div>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary">
                  <Icon icon="user" className="h-8 w-8 text-dark" />
                </span>
              </div>
              <div className="ml-6 flex-1 sm:ml-0 sm:mt-3 lg:ml-6 lg:mt-0">
                <h5 className="flex items-center text-xl font-semibold text-dark">
                  Name
                </h5>
                <p className="mt-1.5 text-base leading-relaxed text-dark/90">
                  <>{slice.primary.name}</>
                </p>
              </div>
            </div>
          </div>
          {/* Email card */}
          <div className="rounded-3xl bg-tertiary/30 px-4 py-8 sm:col-span-2 sm:p-8 sm:py-10 lg:col-span-1">
            <div className="flex sm:flex-col lg:flex-row">
              <div>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-tertiary/60">
                  <Icon icon="mail" className="h-8 w-8 text-dark" />
                </span>
              </div>
              <div className="ml-6 flex-1 sm:ml-0 sm:mt-3 lg:ml-6 lg:mt-0">
                <h5 className="flex items-center text-xl font-semibold text-dark">
                  Email
                </h5>
                <a
                  href={`mailto:${slice.primary.email}`}
                  className="mt-1.5 text-base leading-relaxed text-dark/90"
                >
                  <>{slice.primary.email}</>
                </a>
              </div>
            </div>
          </div>
          {/* Phone number card */}
          <div className="rounded-3xl bg-secondary/20 px-4 py-8 sm:col-span-2 sm:col-start-2 sm:p-8 sm:py-10 lg:col-span-1 lg:col-start-3">
            <div className="flex sm:flex-col lg:flex-row">
              <div>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/40">
                  <Icon icon="phone" className="h-8 w-8 text-dark" />
                </span>
              </div>
              <div className="ml-6 flex-1 sm:ml-0 sm:mt-3 lg:ml-6 lg:mt-0">
                <h5 className="flex items-center text-xl font-semibold text-dark">
                  Phone
                </h5>
                <a
                  href={`tel:${slice.primary.phone}`}
                  className="mt-1.5 text-base leading-relaxed text-dark/90"
                >
                  <>{slice.primary.phone}</>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseContactPerson;
