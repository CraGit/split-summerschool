import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import CardList from "@/components/CardList";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("courses");
  const courses = await client.getAllByType("course");
  console.log(courses);

  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />
      <CardList cards={courses} />
    </>
  );
}

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("courses");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
