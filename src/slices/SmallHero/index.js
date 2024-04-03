/**
 * @typedef {import("@prismicio/client").Content.SmallHeroSlice} SmallHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SmallHeroSlice>} SmallHeroProps
 * @param {SmallHeroProps}
 */
const SmallHero = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 sm:px-6 lg:px-8 pb-8 md:py-16 bg-gradient-to-b from-tertiary/30 to-tertiary/40"
    >
      <div className="flex flex-col items-center justify-center  px-6 py-8 maxw-2xl mx-auto">
        {slice.primary.overtitle && (
          <div>
            <span className="inline-block px-4 py-2 font-medium text-dark bg-tertiary/80 rounded-full shadow-md -rotate-1">
              <>{slice.primary.overtitle}</>
            </span>
          </div>
        )}

        <h1
          className="
          max-w-2xl mt-4 text-center text-dark sm:mt-5 lg:max-w-none lg:text-left h1 uppercase"
        >
          {slice.primary.heading}
        </h1>
        <p className="max-w-2xl mt-3 text-xl leading-7 text-center text-dark lg:text-left">
          {slice.primary.content}
        </p>
      </div>
    </section>
  );
};

export default SmallHero;
