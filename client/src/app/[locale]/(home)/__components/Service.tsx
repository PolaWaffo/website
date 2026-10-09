"use client"
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/locales/client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesSection() {
  const t=useI18n()
    const services = [
        {
          image: "/assets/website.jpeg",
          title: t('services.list.website'),
          content:
           t('services.list.website.content')
        },
        {
          image: "/assets/mobile.jpg",
          title: t('services.list.mobile'),
          content:
          t('services.list.mobile.content')
        },
        // {
        //   image: "/assets/saas.jpg",
        //   title: t('services.list.saas'),
        //   content:
        //   t('services.list.saas.content')
        // },
    
        // {
        //   image: "/assets/design.jpg",
        //   title: t('services.list.graphic'),
        //   content:
        //   t('services.list.graphic.content')
        // },
        {
          image: "/assets/ui.jpeg",
          title: t('services.list.webdesign'),
          content:
          t('services.list.webdesign.content'),
        },
        // {
        //   image: "/assets/consult.jpg",
        //   title: t('services.list.consulting'),
        //   content:
        //    t('services.list.consulting.content')
        // },
      ];
  return (
    <section className="flex flex-col my-10 md:mx-20">
      <h2 className="text-center font-natom-bold text-2xl md:text-5xl font-semibold">
       {t('services.title')}
      </h2>
      <p className="text-justify font-mons-medium tracking-wider p-4 mb-2">
      {t('services.description')}
      </p>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-6 md:mx-0"
      >
        {services.map((service, index) => (
          <div key={index} className="relative group">
            <div className="relative h-44 w-full group-hover:scale-110 transition-transform duration-500">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <Card className="-mt-10 mx-4 relative z-10 group-hover:scale-105 group-hover:bg-blue/70 group-hover:text-white transition-all duration-1000 bg-white border-0 rounded-xl  text-center shadow-lg">
              <CardContent>
                <h3 className="md:text-lg text-md font-extrabold group-hover:text-white font-natom-bold text-black-pale">
                  {service.title}
                </h3>
                <p className="text-sm text-justify text-black-pale group-hover:text-white font-mons-medium mt-2 tracking-wide">
                  {service.content}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
