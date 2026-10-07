"use client"
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/locales/client";
import { motion } from "framer-motion";
import { BadgeCheck,  Handshake,  Target } from "lucide-react";
export default function ChoisirSection() {
  const t= useI18n()
    const choisir = [
        {
          title: t('choose.list.results'),
          content:
            t('choose.list.results.content'),
          icon:Target
        },
        {
          title: t('choose.list.support'),
          content:
           t('choose.list.support.content'),
           icon:Handshake
        },
    
        {
          title: t('choose.list.deadlines'),
          content:
            t('choose.list.deadlines.content'),
             icon:BadgeCheck
        },
       
      ];
    return (
      <section className="flex flex-col my-10 md:mx-20">
         <h2 className="text-center font-natom-bold text-2xl md:text-5xl font-semibold">
       {t('choose.title')}
      </h2>
      <p className="text-justify font-mons-medium tracking-wider p-4 mb-2">
       {t('choose.description')}
      </p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:mx-8 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 "
        >
          {choisir.map((item, index) => (
           <div key={index} className="relative overflow-hidden">
  <Card
    className="
      max-w-md
      min-h-[210px]
      h-auto
      hover:bg-blue
      text-black-pale
      transition-all
      duration-1000
      hover:scale-105
      hover:rounded-3xl
      rounded-xl
      p-6
      text-center
      group
      flex
      flex-col
      items-center
      justify-center
    "
  >
    <CardContent className="transition-all duration-1000">
      <div className="flex flex-col items-center justify-center gap-2">
        
        <item.icon
          className="
            flex
            items-center
            justify-center
            p-1
            h-10
            w-10
            border
            border-transparent
            rounded-full
            text-blue
            group-hover:text-white
            transition-colors
            duration-500
          "
        />

        <h3
          className="
            text-lg
            text-start
            font-extrabold
            group-hover:text-white
            font-natom-bold
            text-black-pale
            transition-colors
            duration-500
          "
        >
          {item.title}
        </h3>

        <p
          className="
            text-sm
            text-black-pale
            group-hover:text-white
            font-mons-medium
            mt-2
            transition-colors
            duration-500
          "
        >
          {item.content}
        </p>

      </div>
    </CardContent>
  </Card>
</div>
          ))}
        </motion.div>
      </section>
    );
  }