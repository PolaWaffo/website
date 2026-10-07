"use client"
import { Quote, User, User2 } from 'lucide-react';
import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import { useI18n } from '@/locales/client';
export default function Testimonies() {
  const t= useI18n()
    const clients = [
        {
            icon: <Quote className="w-12 h-12  mb-2" />,
          testimony:
           t('testimonies.client1'),
          image: User,
          name: t('testimonies.namef') +  " " +  "Simo",
          position: t('testimonies.p1'),
        },
        {
            icon: <Quote className="w-12 h-12  mb-2" />,
          testimony:
          t('testimonies.client2'),
          image: User2,
          name: t('testimonies.namem') +  " " + 'koum Samuel',
          position: t('testimonies.p2') ,
        },
        {
            icon: <Quote className="w-12 h-12  mb-2" />,
          testimony:
          t('testimonies.client3'),
          image: User,
          name: t('testimonies.namef') +  " " + "Siewe Katia",
          position: t('testimonies.p3'),
        },
        {
          icon: <Quote className="w-12 h-12  mb-2" />,
          testimony:
          t('testimonies.client4'),
          image: User2,
          name:t('testimonies.namem') +  " " +  "Nzebaze",
          position: t('testimonies.p4'),
        },
        {
            icon: <Quote className="w-12 h-12  mb-2" />,
          testimony:
          t('testimonies.client5'),
          image: User,
          name: t('testimonies.namem') +  " " + "Bell Lontsi",
          position: t('testimonies.p5'),
        },
      ];
  return (
    <section className="flex flex-col my-10 md:mx-20">
    <h2 className="text-center font-natom-bold text-4xl md:text-5xl font-semibold">
      {t('testimonies.title')}
    </h2>
    <p className="text-center font-mons-medium tracking-wider py-5">
      {t('testimonies.description')}
    </p>
    <motion.div
    className='mx-4'
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: false, amount: 0.1 }}
    
    >
      <Carousel
        opts={{
          align: "start",
          containScroll:"trimSnaps",
          dragFree:true
        }}
        className="w-full "
      >
        <CarouselContent>
          {clients.map((client, index) => (
            <CarouselItem
              key={index}
              className="w-full md:basis-1/2 lg:basis-1/3"
            >
              <Card className="p-6 max-w-md rounded-xl shadow-lg hover:bg-white hover:text-black transition-colors duration-700 flex flex-col h-full bg-blue text-white">
                <div className="flex justify-start">{client.icon}</div>
                <CardContent className="flex-grow text-center font-mons-medium text-lg mb-1">
                  {client.testimony}
                </CardContent>
                <hr className="border-gray-300 mb-1" />
                <div className="flex items-center justify-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue">
                    <client.image className='flex justify-center items-center w-full h-full'/>
                  </div>
                  <div className="text-left font-mons-medium">
                    <p className="font-semibold text-lg ">
                      {client.name}
                    </p>
                    <p className="text-sm ">
                      {client.position}
                    </p>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </motion.div>
  </section>
  )
}
