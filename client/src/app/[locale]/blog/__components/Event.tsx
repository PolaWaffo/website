"use client";

import { useState } from "react";
import { type SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaShareAlt } from "react-icons/fa";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useI18n } from "@/locales/client";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface BlogListProps {
  blogs: SanityDocument[];
}

export default function BlogList({ blogs }: BlogListProps) {
  const t = useI18n();

  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<
    "all" | "innovation" | "business" | "development"
  >("all");
  const blogsPerPage = 6;

  const params = useParams();
  const locale = Array.isArray(params?.locale)
    ? params.locale[0]
    : params?.locale || "fr"; // fallback to 'fr' if missing

  // Filter blogs by status
  const filteredBlogs = blogs.filter((blog) =>
    filter === "all" ? true : blog.status?.toLowerCase() === filter
  );

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  // Translate status
  function translateStatus(status: string | undefined) {
    if (!status) return "";
    switch (status.toLowerCase()) {
      case "innovation":
        return t("post.innovation");
      case "business":
        return t("post.growth");
      case "development":
        return t("post.development");
      default:
        return status;
    }
  }

  // Get title
  function getTitle(blog: SanityDocument) {
    return blog.title?.[locale] ?? blog.title?.en ?? "No title";
  }

  // Get excerpt
  function getExcerpt(blog: SanityDocument, maxLength = 120) {
    const desc = blog.description?.[locale];
    if (!desc || !Array.isArray(desc)) return "";

    let text = "";
    for (const block of desc) {
      if (block._type === "block" && Array.isArray(block.children)) {
        text += block.children
          .map((child: { text?: string }) => ("text" in child ? child.text : ""))
          .join(" ");
      }
      if (text.length > maxLength) break;
    }

    if (text.length > maxLength) return text.slice(0, maxLength) + "...";
    return text;
  }

  // Share handler accepts the blog to share
  const handleShare = async (blog: SanityDocument) => {
    if (typeof window === "undefined") return;

    const title = getTitle(blog);
    const shareUrl = `${window.location.origin}/${locale}/blog/${blog._id}`;

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
        alert("Sharing not supported on this device/browser. Link copied to clipboard.");
      } catch {
        alert("Sharing and clipboard copy both failed.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto min-h-screen max-w-7xl p-6">
        <h1 className="md:text-4xl text-2xl font-bold mb-8 text-center">
          {t("post.title")}
        </h1>

        {/* Filter Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-4 mb-6 font-natom-bold">
          {[
            { key: "all", label: t("post.all") },
            { key: "innovation", label: t("post.innovation") },
            { key: "business", label: t("post.growth") },
            { key: "development", label: t("post.development") },
          ].map(({ key, label }) => (
            <Button
              key={key}
              className="flex flex-wrap justify-center gap-3 mb-6 px-4 font-natom-bold"
              variant={filter === key ? "default" : "outline"}
              onClick={() => {
                setFilter(key as typeof filter);
                setCurrentPage(1);
              }}
            >
              {label}
            </Button>
          ))}
        </div>

        {/* No posts available */}
        {currentBlogs.length === 0 ? (
          <p className="text-center font-mons-medium text-lg font-medium">
            {locale === "fr"
              ? "Aucun article disponible."
              : "No posts available."}
          </p>
        ) : (
          <>
            {/* Blogs Grid */}
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
              {currentBlogs.map((blog) => (
                <Card
                  key={blog._id}
                  className="overflow-hidden h-full border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  {blog.imageUrl && (
                    <div className="relative w-full h-48">
                      <Image
                        src={blog.imageUrl}
                        alt={getTitle(blog)}
                        fill
                        quality={90}
                        priority
                        className="object-cover"
                      />
                    </div>
                  )}

                  <CardHeader className="px-4">
                    <CardTitle className="font-natom-bold text-lg text-blue line-clamp-2">
                      {getTitle(blog)}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-2 -translate-y-3">
                    <p className="text-black-pale text-sm font-mons-medium line-clamp-3 leading-relaxed">
                      {getExcerpt(blog)}
                    </p>
                    <p className=" text-xs uppercase tracking-wide  font-mons-medium text-orange">
                      <span className="font-mons-medium">
                        {translateStatus(blog.status)}
                      </span>
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Link
                        href={`/${locale}/blog/${blog._id}`}
                        className="text-blue hover:underline font-mons-medium"
                      >
                        {t("post.readMore")}
                      </Link>

                      {/* Share icon as button */}
                      <button
                        onClick={() => handleShare(blog)}
                        aria-label="Share this blog"
                        className="text-blue hover:text-orange cursor-pointer"
                        type="button"
                      >
                        <FaShareAlt size={18} />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() =>
                          setCurrentPage((p) => Math.max(1, p - 1))
                        }
                        aria-disabled={currentPage === 1}
                      />
                    </PaginationItem>
                    {Array.from({ length: totalPages }, (_, i) => (
                      <PaginationItem key={i}>
                        <PaginationLink
                          isActive={currentPage === i + 1}
                          onClick={() => setCurrentPage(i + 1)}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationNext
                        onClick={() =>
                          setCurrentPage((p) => Math.min(totalPages, p + 1))
                        }
                        aria-disabled={currentPage === totalPages}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
