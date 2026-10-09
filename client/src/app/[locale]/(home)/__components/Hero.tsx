"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useI18n } from "@/locales/client";
import Link from "next/link";
export default function HeroSection() {
  const t = useI18n();
  return (
    <section
      className="relative flex flex-col justify-center items-center text-center pt-32 pb-12 px-4 text-white min-h-svh overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Optimized background image */}
      {/* <picture>
        <source
          media="(max-width: 768px)"
          srcSet="/assets/home2.jpg"
        /> */}
      <Image
        src="/assets/hero.png"
        alt="Visuel illustrant la transformation digitale"
        fill
        priority
        quality={90}
        className="object-cover z-0"
      />
      {/* </picture> */}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-3xl px-4">
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-4xl md:text-5xl font-natom-bold font-semibold mb-4"
        >
          {t("hero.title")}
        </motion.h1>

        <p className="text-lg md:text-xl mb-6 font-mons-medium">
          {t("hero.subtitle")}
        </p>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-4 "
        >
          <Button className="relative  overflow-hidden group md:px-6 px-15 py-2 text-white rounded-md">
            <Link
              href={`https://wa.me/237651118070?text=${encodeURIComponent(
                t("hero.quote")
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <span className="relative z-10 font-semibold font-mons-semibold text-sm">
                {t("hero.button.quote")}
              </span>
              <span
                className="absolute inset-0 bg-blue block h-full scale-x-0 group-hover:scale-x-150 origin-center transition-transform duration-1000 ease-in-out"
                aria-hidden="true"
              />
            </Link>
          </Button>

          <Button
            variant="outline"
            className="relative  overflow-hidden group md:px-6 px-15 py-2 text-white rounded-md"
          >
            <span className="relative z-10 font-mons-semibold text-sm">
              {t("hero.button.services")}
            </span>
            <span
              className="absolute inset-0 bg-orange scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-700 ease-in-out"
              aria-hidden="true"
            />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
