"use client";

import Image from "next/image";
import { useI18n } from "@/locales/client";
import { SanityDocument } from "next-sanity";
import { PortableText } from "@portabletext/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaShareAlt } from "react-icons/fa";

interface Props {
  event: SanityDocument;
  locale: string;
}

export default function EventDetailClient({ event, locale }: Props) {
  const t = useI18n();
  const router = useRouter();
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  // Handle multilingual titles & descriptions
  const title = event.title?.[locale] || event.title?.en || "";
  const description = event.description?.[locale] || event.description?.en || "";

  // Construct the share URL safely
  const shareUrl =
    typeof window !== "undefined"
      ? window.location.origin + `/${locale}/blog/${event._id}`
      : "";

  // Share handler
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url: shareUrl,
        });
      } catch (error) {
        console.error("Share failed:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopySuccess("Link copied to clipboard!");
        setTimeout(() => setCopySuccess(null), 3000);
      } catch {
        alert("Sharing not supported and failed to copy link.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto max-w-3xl px-6 py-10 min-h-screen">
        {/* Event Image */}
        {event.imageUrl && (
          <div className="relative w-full h-72 mb-6 rounded-lg overflow-hidden">
            <Image
              src={event.imageUrl}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Title */}
        {title && (
          <div className="uppercase font-natom-bold text-xl text-black-pale mb-6">
            {title}
          </div>
        )}

        {/* Description */}
        <div className="prose max-w-none mb-10 text-black tracking-wider font-mons-medium">
          {Array.isArray(description) ? (
            <PortableText value={description} />
          ) : (
            <p>{description}</p>
          )}
        </div>

        {/* Buttons: Back & Share */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push(`/${locale}/blog`)}
            className="px-5 py-2 bg-blue text-white rounded-lg font-semibold hover:bg-green transition"
          >
            ← {t("post.back")}
          </button>

          <button
            onClick={handleShare}
            aria-label="Share this blog"
            className="flex items-center gap-2 px-4 py-2 bg-orange rounded-lg hover:bg-gray-300 transition text-white font-semibold"
          >
            <FaShareAlt size={18} />
            <span>Share</span>
          </button>

          {copySuccess && (
            <span className="text-green-600 font-medium">{copySuccess}</span>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
