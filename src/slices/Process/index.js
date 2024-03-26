/**
 * @typedef {import("@prismicio/client").Content.ProcessSlice} ProcessSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProcessSlice>} ProcessProps
 * @param {ProcessProps}
 */

const Process = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 sm:px-6 lg:px-8 py-16 md:py-1"
    >
      <div className="mx-auto max-w-screen-xl">
        {/* Hero header text */}
        <div className="relative pb-8">
          <h2 className="h2 mx-auto mt-4 max-w-3xl text-center text-dark">
            <>{slice.primary.heading}</>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-xl leading-relaxed text-dark sm:mt-5">
            <>{slice.primary.content}</>
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2">
          {slice.items.map((item, index, array) => {
            const isLast = index === array.length - 1;
            return (
              <div
                key={item.heading}
                className={`${!isLast ? "bg-primary/70" : "bg-tertiary/70"} p-6 rounded-2xl relative`}
              >
                <div className="absolute bottom-28 font-bold right-16 w-0 h-0 text-8xl text-dark/5">
                  {index + 1}
                </div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-xl font-bold">{item.heading}</p>
                </div>
                <p className="text-gray-600">{item.heading}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
