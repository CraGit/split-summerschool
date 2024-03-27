import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import Link from "next/link";
export default function CardList({ cards }) {
  const cardColors = [
    "bg-yellow-200",
    "bg-purple-50",
    "bg-rose-50",
    "bg-teal-50",
  ];
  return (
    <section className="relative w-full px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Container */}
      <div className="mx-auto max-w-2xl lg:max-w-screen-xl">
        {/* Events */}
        <div className="mt-12 sm:mt-16 lg:grid lg:grid-cols-2 lg:gap-6 xl:gap-8">
          {cards.map((card, index) => (
            <Link
              href={card.url}
              key={`card-${card.data.course_name}`}
              className={clsx(
                "grid w-full rounded-2xl sm:grid-cols-12",
                index > 0 && "mt-8 lg:mt-0",
                // cardColors[index % 4]
                "bg-tertiary/40"
              )}
            >
              {/* card image */}
              <div
                className={clsx(
                  "relative h-48 rounded-t-2xl sm:col-span-4 sm:h-full",
                  index % 2 == 0
                    ? "sm:rounded-l-2xl sm:rounded-tr-none"
                    : "sm:order-2 sm:rounded-r-2xl sm:rounded-tl-none"
                )}
              >
                <PrismicNextImage
                  field={card.data.cover_image}
                  className={clsx(
                    "absolute inset-0 h-full w-full rounded-t-2xl object-cover object-center",
                    index % 2 == 0
                      ? "sm:rounded-l-2xl sm:rounded-tr-none"
                      : "sm:rounded-r-2xl sm:rounded-tl-none"
                  )}
                  fill
                  sizes="(min-width: 1280px) 13rem, (min-width: 1024px) 16.67rem, (min-width: 640px) 14rem, calc(100vw - 2rem)"
                />
              </div>
              {/* card info */}
              <div
                className={clsx(
                  "flex h-full flex-col justify-center px-6 py-8 sm:col-span-8 sm:px-8 sm:py-10 lg:px-6 xl:px-8",
                  index % 2 == 1 && "order-2 sm:order-1"
                )}
              >
                <div>
                  <div className="inline-flex -rotate-1 items-center justify-center rounded-xl bg-tertiary px-3.5 py-0.5 align-top text-sm font-medium leading-6 text-dark">
                    Course
                  </div>
                </div>
                <h4 className="mt-4 text-2xl font-bold text-dark sm:text-3xl lg:text-2xl lg:leading-tight xl:text-3xl xl:leading-tight">
                  {card.data.course_name}
                </h4>
                {/* <p className="mt-1 text-purple-800 lg:mt-2">
                  {card.data.description}
                </p> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
