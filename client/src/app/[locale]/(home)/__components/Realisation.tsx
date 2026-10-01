
'use client';

import { useI18n } from '@/locales/client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

export default function RealizationsSection() {
  const t = useI18n();

  const realizations = [
    {
      id: 1,
      title: t('realizations.4.title'),
      description: t('realizations.4.description'),
      image: '/assets/longrich.png',
      link:'https://www.longrich-decollage.com/fr',
    },
    {
      id: 5,
      title: t('realizations.8.title'),
      description: t('realizations.8.description'),
      image: '/assets/solif.png',
      link: 'https://www.solifcoopbod.com/',
    },
    {
      id: 2,
      title: t('realizations.1.title'),
      description: t('realizations.1.description'),
      image: '/assets/fomax.png',
      link: 'https://formax-academy.vercel.app/',
    },
    {
      id: 3,
      title: t('realizations.2.title'),
      description: t('realizations.2.description'),
      image: '/assets/kribi.png',
      link: 'https://agence-immobiliere-rho.vercel.app/',
    },
    {
      id: 4,
      title: t('realizations.3.title'),
      description: t('realizations.3.description'),
      image: '/assets/finzo1.png',
      link: 'https://finzo.onrender.com/',
    },
   
    {
      id: 6,
      title: t('realizations.5.title'),
      description: t('realizations.5.description'),
      image: '/assets/mboa.png',
      link: 'https://mboashopsite.onrender.com/',
    },
  

    {
      id: 8,
      title: t('realizations.7.title'),
      description:t('realizations.7.description'),
      image: '/assets/cks.png',
      link: 'https://cks-app.example.com',
    },
  ];
  const [isTapped, setIsTapped] = useState(false);

  const handleTap = () => {
    setIsTapped((prev) => !prev);
  };
  return (
    <section className="flex flex-col my-10 md:mx-20">
      <h2 className="text-center font-natom-bold text-3xl md:text-5xl font-semibold">
        {t('realizations.title')}
      </h2>
      <p className="text-center font-mons-medium tracking-wider py-5">
        {t('realizations.description')}
      </p>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: false, amount: 0.1 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:mx-0"
      >
        {realizations.map((realisation) => (
            <Card
            key={realisation.id}
            onClick={handleTap}
            className={`group h-56 relative overflow-hidden border rounded-xl shadow-md cursor-pointer transition-transform hover:scale-[1.02] ${
              isTapped ? "scale-[1.02] text-white" : ""
            }`}
          >
            <Image
              src={realisation.image}
              alt={realisation.title}
              fill
              className="w-full h-56 object-cover"
            />

<div
        className={`absolute inset-0 text-white bg-gradient-to-t from-blue/80 via-blue/50 to-blue-60 p-4 transition-all duration-700 ease-in-out flex flex-col justify-center gap-4 text-sm text-center
          ${isTapped ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} 
          group-hover:opacity-100 group-hover:translate-y-0`}
      >
              <CardContent className="p-4">
                <h3 className="text-lg font-extrabold group-hover:text-white font-natom-bold text-black-pal">
                  {realisation.title}
                </h3>
                <p className="text-sm text-black-pale mb-4 group-hover:text-white font-mons-medium mt-2">
                  {realisation.description}
                </p>
                {realisation.id === 8 ? (
                  <span className="inline-block bg-white text-black px-4 py-2 rounded-md text-sm font-mons-medium">
                    {t('realizations.developing')}
                  </span>
                ) : (
                  <Link
                    href={realisation.link}
                    className="inline-flex bg-white text-black px-4 py-2 rounded-md text-sm font-mons-medium items-center justify-center hover:bg-gray-100 transition"
                  >
                    {t('realizations.visitSite')} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                )}
              </CardContent>
            </div>
          </Card>
        ))}
      </motion.div>

      
    </section>
  );
}
