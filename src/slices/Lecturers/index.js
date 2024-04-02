/**
 * @typedef {import("@prismicio/client").Content.LecturersSlice} LecturersSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LecturersSlice>} LecturersProps
 * @param {LecturersProps}
 */
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PrismicNextImage } from "@prismicio/next";
const Lecturers = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="bg-dark/80 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Section header text */}
        <div className="mx-auto max-w-2xl lg:max-w-screen-xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="flex items-center">
              <h3 className="h2 max-w-4xl text-white sm:text-center lg:text-left">
                <>{slice.primary.heading}</>
              </h3>
            </div>
            <div className="flex items-center">
              <p className="mt-5 text-xl leading-relaxed text-purple-50 sm:text-center lg:mt-0 lg:text-left">
                <>{slice.primary.content}</>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* background to create overlay effect */}
      <div className="h-32 w-full bg-dark/80" />
      {/* Team section */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl -translate-y-32 lg:max-w-screen-xl">
          <div className="grid gap-y-16 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
            {slice.items.map((member, i) => (
              <div key={`member-${i}`}>
                {/* Staff member image */}
                <div className="aspect-h-2 aspect-w-3">
                  <PrismicNextImage
                    field={member.image}
                    className="rounded-2xl object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                {/* Staff member info */}
                <div className="flex items-center justify-between">
                  <div className="mt-3 text-xl font-medium">
                    <p className="font-semibold tracking-wide text-dark">
                      {member.name}
                    </p>
                    <p className="text-lg text-dark/80">{member.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lecturers;
