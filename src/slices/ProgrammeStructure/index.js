/**
 * @typedef {import("@prismicio/client").Content.ProgrammeStructureSlice} ProgrammeStructureSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProgrammeStructureSlice>} ProgrammeStructureProps
 * @param {ProgrammeStructureProps}
 */
import Image from "next/image";
import { Icon } from "@/components/Icon";

import checkmark from "/public/images/illustrations/checkmark.svg";
const ProgrammeStructure = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="px-4 sm:px-6 lg:px-8 pb-4 md:pb-14 bg-gradient-to-br from-tertiary/60 to-tertiary/50 pt-1"
      >
        <div className="relative rounded-xl bg-white  sm:mt-14 max-w-screen-xl mx-auto ">
          <span className="absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-tertiary/80 to-tertiary/60 shadow-md sm:left-10">
            <Icon icon="certificate" className="h-8 w-8 text-dark" />
          </span>
          <div className="mt-2 px-4 py-10 sm:px-10 sm:py-12">
            <p className="text-lg font-semibold text-dark sm:text-xl">
              <>{slice.primary.heading}</>
            </p>
            {/* Teacher qualifications list */}
            <ul className="mt-5 space-y-5 text-lg text-dark">
              {slice.items.map((item, index) => (
                <li key={item.list_item} className="flex items-center">
                  <Image
                    className="mr-3 h-7 w-7 flex-shrink-0"
                    src={checkmark}
                    alt="Checkmark"
                  />
                  <span>{item.list_item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProgrammeStructure;
