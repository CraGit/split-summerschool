/**
 * @typedef {import("@prismicio/client").Content.FeaturesSlice} FeaturesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturesSlice>} FeaturesProps
 * @param {FeaturesProps}
 */
import Image from "next/image";
import checkmark from "/public/images/illustrations/checkmark.svg";

const Features = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="overflow-hidden px-4 sm:px-6  lg:px-8 py-16 bg-tertiary/80 "
    >
      <div className="mx-auto max-w-screen-xl p-8 md:p-16 rounded-3xl">
        {/* Centered content with feature list */}
        <div className="relative">
          {/* Block title and subtext */}
          <h2 className="h2 mx-auto max-w-4xl text-center text-dark">
            <>{slice.primary.heading}</>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl leading-relaxed text-dark">
            <>{slice.primary.content}</>
          </p>
          {/* Feature list */}
          <div className="mx-auto mt-12 max-w-3xl">
            <ul className="-mx-3 -my-2 flex flex-wrap items-center md:justify-center text-lg text-dark">
              {slice.items.map((item, index) => (
                <li
                  key={`home-feature-${index}`}
                  className="mx-3 my-2 flex items-center"
                >
                  <Image
                    className="mr-3 h-7 w-7 flex-shrink-0"
                    src={checkmark}
                    alt="checkmark icon"
                  />
                  <span>{item.feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
