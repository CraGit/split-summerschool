/**
 * @typedef {import("@prismicio/client").Content.ImportantDatesSlice} ImportantDatesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImportantDatesSlice>} ImportantDatesProps
 * @param {ImportantDatesProps}
 */

import clsx from "clsx";
import { Icon } from "@/components/Icon";

const InfoCard = ({ icon, title, gradientColors, text }) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center rounded-2xl px-4 py-6 sm:p-8 sm:py-10",
        gradientColors.bgColor
      )}
    >
      <span
        className={clsx(
          "flex h-14 w-14 items-center justify-center rounded-2xl shadow-md",
          gradientColors.iconBgColor
        )}
      >
        <Icon icon={icon} className="h-8 w-8 text-dark" />
      </span>
      <h4 className="mt-4 text-center text-xl font-semibold text-dark">
        {title}
      </h4>
      <div
        className={clsx(
          "my-2 h-1.5 w-8 rounded-2xl bg-gradient-to-r",
          gradientColors.startColor,
          gradientColors.endColor
        )}
      />
      <p className="text-center text-lg text-dark">{text}</p>
    </div>
  );
};
const ImportantDates = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="mx-auto max-w-xl lg:max-w-screen-xl">
        {/* Section header text */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-32">
          <div className="flex items-center">
            <h2 className="h2 max-w-4xl text-dark">
              <>{slice.primary.heading}</>
            </h2>
          </div>
          <div className="mt-6 flex items-center lg:mt-0">
            <p className="text-xl leading-relaxed text-dark"></p>
          </div>
        </div>
        {/* Class info */}
        <div className="mt-12 grid gap-8 sm:mt-14 sm:max-w-none sm:grid-cols-2 sm:gap-6 lg:mt-24 lg:grid-cols-4 xl:gap-12">
          <InfoCard
            icon="moodKid"
            title="Course Dates"
            gradientColors={{
              bgColor: "bg-yellow-200",
              iconBgColor: "bg-yellow-400",
              startColor: "from-yellow-400",
              endColor: "to-yellow-500",
            }}
            text={slice.primary.course_dates}
          />

          <InfoCard
            icon="calendar"
            title="Deadline for Application"
            gradientColors={{
              bgColor: "bg-purple-50",
              iconBgColor: "bg-purple-200",
              startColor: "from-purple-200",
              endColor: "to-purple-300",
            }}
            text={slice.primary.deadline_for_application}
          />

          <InfoCard
            icon="clock"
            title="Confirmation of the course

            "
            gradientColors={{
              bgColor: "bg-rose-50",
              iconBgColor: "bg-rose-200",
              startColor: "from-rose-100",
              endColor: "to-rose-300",
            }}
            text={slice.primary.confirmation_of_the_course}
          />

          <InfoCard
            icon="users"
            title="Payment due by"
            gradientColors={{
              bgColor: "bg-blue-50",
              iconBgColor: "bg-blue-200",
              startColor: "from-blue-100",
              endColor: "to-blue-300",
            }}
            text={slice.primary.payment_due_by}
          />
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
