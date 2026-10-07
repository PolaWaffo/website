
import { client } from "@/lib/sanity";
import BlogList from "./__components/Event";
import { type SanityDocument } from "next-sanity";
import { notFound } from "next/navigation";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Notre Blog - TechSprint",
  description: "Explorez nos analyses, conseils, et tendances en technologie.",
};
const BLOGS_QUERY = `*[_type == "blog"]{
  _id,
  title,
  description,
  status,
  "imageUrl": image.asset->url
}`;

const options = { next: { revalidate: 30 } };

export default async function BlogPage() {
  const blogs: SanityDocument[] = await client.fetch(BLOGS_QUERY, {}, options);

  if (!blogs || blogs.length === 0) {
    notFound();
  }

  return <BlogList blogs={blogs} />;
}
