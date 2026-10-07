import { client } from "@/lib/sanity";
import EventDetailClient from "../__components/EventDetail";
import { notFound } from "next/navigation";
import { type SanityDocument } from "next-sanity";

const EVENT_QUERY = `*[_type == "blog" && _id == $id][0]{
  _id,
  title,
  description,
  location,
  date,
  time,
  status,
  "imageUrl": image.asset->url
}`;

export default async function EventPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const {locale, id } = await params;

  if (!id) notFound();

  const event: SanityDocument | null = await client.fetch(EVENT_QUERY, { id }, { next: { revalidate: 30 } });

  if (!event) notFound();

  return <EventDetailClient event={event} locale={locale} />;
}
