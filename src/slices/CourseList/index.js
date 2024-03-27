/**
 * @typedef {import("@prismicio/client").Content.CourseListSlice} CourseListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CourseListSlice>} CourseListProps
 * @param {CourseListProps}
 */
const CourseList = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for course_list (variation: {slice.variation})
      Slices
    </section>
  );
};

export default CourseList;
