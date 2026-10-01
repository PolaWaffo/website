"use client"
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/locales/client";
import { motion } from "framer-motion";
import { Share2 } from "lucide-react";
export default function ChoisirSection() {
  const t= useI18n()
    const choisir = [
        {
          title: t('choose.list.results'),
          content:
            t('choose.list.results.content')
        },
        {
          title: t('choose.list.support'),
          content:
           t('choose.list.results.content')
        },
    
        {
          title: t('choose.list.deadlines'),
          content:
            t('choose.list.deadlines.content')
        },
      ];
    return (
      <section className="flex flex-col my-10 md:mx-20">
        <h2 className="text-center font-natom-bold text-3xl md:text-5xl font-semibold">
          {t('choose.title')}
        </h2>
        <p className="text-center font-mons-medium tracking-wider py-5">
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
              <Card className="max-w-md h-[210px] bg-white text-black-pale hover:bg-blue transition-all duration-700 hover:scale-105 hover:rounded-3xl rounded-xl p-6 text-center group flex flex-col items-center justify-center">
                <CardContent className="transition-all duration-700 text-center">
                  <Share2 className="w-12 h-12 px-1 border rounded-full text-blue bg-white" />
                  <h3 className="text-lg font-extrabold group-hover:text-white font-natom-bold text-black-pale">
                    {item.title}
                  </h3>
                  <p className="text-sm text-black-pale group-hover:text-white font-mons-medium mt-2">
                    {item.content}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </motion.div>
      </section>
    );
  }