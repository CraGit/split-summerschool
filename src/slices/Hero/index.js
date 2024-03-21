/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
const Hero = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="hero-banner-one p-[30px] 2xl:p-[20px] lg:p-0 md:p-0 sm:p-0 xsm:p-0 relative"
    >
      Placeholder component for hero (variation: {slice.variation}) Slices
    </section>
  );
};

export default Hero;
