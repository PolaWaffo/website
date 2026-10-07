"use client";

import { Quote, User } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useI18n } from "@/locales/client";

export default function Testimonies() {
  const t = useI18n();

  const clients = [
    {
      image: User,
      testimony: t("testimonies.client1"),
      name: `${t("testimonies.namef")} Simo`,
      position: t("testimonies.p1"),
    },
    {
      image: User,
      testimony: t("testimonies.client2"),
      name: `${t("testimonies.namem")} Koum Samuel`,
      position: t("testimonies.p2"),
    },
    {
      image: User,
      testimony: t("testimonies.client3"),
      name: `${t("testimonies.namef")} Siewe Katia`,
      position: t("testimonies.p3"),
    },
    {
      image: User,
      testimony: t("testimonies.client4"),
      name: `${t("testimonies.namem")} Nzebaze`,
      position: t("testimonies.p4"),
    },
    {
      image: User,
      testimony: t("testimonies.client5"),
      name: `${t("testimonies.namem")} Bell Lontsi`,
      position: t("testimonies.p5"),
    },
  ];

  return (
    <section className="flex flex-col my-10 md:mx-20">
      {/* Section heading */}
      <h2 className="text-center font-natom-bold text-4xl md:text-5xl font-semibold">
        {t("testimonies.title")}
      </h2>

      <p className="text-center font-mons-medium tracking-wider py-5 px-4">
        {t("testimonies.description")}
      </p>

      {/* Carousel */}
      <motion.div
        className="mx-4"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2,
        }}
        viewport={{
          once: false,
          amount: 0.1,
        }}
      >
        <Carousel
          opts={{
            align: "start",
            containScroll: "trimSnaps",
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {clients.map((client, index) => {
              

              return (
                <CarouselItem
                  key={index}
                  className="basis-[88%] sm:basis-1/2 lg:basis-1/3"
                >
                 <Card
  className="
    h-[300px]
    w-full
    p-5
    rounded-xl
    shadow-md
    bg-blue
    text-white
    flex
    flex-col
    transition-colors
    duration-500
    hover:bg-white
    hover:text-black
  "
>
  {/* Quote */}
  <div className="flex justify-start">
    <Quote className="w-4 h-4 mb-2" />
  </div>

  {/* Testimony */}
  <CardContent
    className="
      p-0
      flex-1
      flex
      items-center
      justify-center
      text-center
      font-mons-medium
      text-base
      leading-relaxed
      px-2
    "
  >
    <p className="w-full max-w-[680px] break-words">
      {client.testimony}
    </p>
  </CardContent>

  <hr className="border-gray-300 " />

  {/* Client */}
  <div className="flex items-center justify-center gap-3">
    <div
      className="
        relative
        w-10
        h-10
        rounded-full
        overflow-hidden
        border-2
        border-blue
        flex-shrink-0
        flex
        items-center
        justify-center
      "
    >
      <client.image className="w-6 h-6" />
    </div>

    <div className="text-left font-mons-medium">
      <p className="font-semibold text-base">
        {client.name}
      </p>

      <p className="text-xs">
        {client.position}
      </p>
    </div>
  </div>
</Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    </section>
  );
}