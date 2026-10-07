
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
//  const projects = [
//   {
//     id: 1,
//     name: "Auto-École Bilingue Juste",
//     category: "website",
//     categoryLabel: "Website",
//     image:
//       "https://www.justeglobal.com/_next/image?q=75&url=%2Fimages%2Fz11.jpg&w=1920",
//     alt: "Auto-École Bilingue Juste website",
//     description:
//       "A bilingual website presenting the driving school's training, services and vehicles.",
//     tags: ["Business website", "FR / EN", "Responsive"],
//     url: "https://www.justeglobal.com/",
//   },

//   {
//     id: 2,
//     name: "Décollage",
//     category: "website",
//     categoryLabel: "Website",
//     image: "./assets/images/longrich.png",
//     alt: "Décollage website",
//     description:
//       "A website designed to present the organisation, its activities and its services clearly.",
//     tags: ["Website", "Responsive"],
//     url: "https://decollage-website-d5ixlwuqj-jpteks-projects.vercel.app/fr",
//   },

//   {
//     id: 3,
//     name: "CHS",
//     category: "website",
//     categoryLabel: "Website",
//     image:
//       "https://chs-lyart.vercel.app/_next/image?q=75&url=%2F_next%2Fstatic%2Fmedia%2Flobby.3mes9m705bef6.png&w=1200",
//     alt: "CHS website",
//     description:
//       "A professional website presenting CHS sanitation, hygiene and QHSE services.",
//     tags: ["Corporate", "FR / EN", "QHSE"],
//     url: "https://chs-lyart.vercel.app/fr",
//   },

//   {
//     id: 4,
//     name: "Cargo",
//     category: "website",
//     categoryLabel: "Website",
//     image:
//       "https://nova-cargo-cargo-tk67-sigma.vercel.app/_next/image?q=75&url=%2F_next%2Fstatic%2Fmedia%2FCargo+-+Pitch+Deck2.9f2a913e.png&w=1920",
//     alt: "Cargo application",
//     description:
//       "A digital platform for tracking commodity vaults, trades and investment activity.",
//     tags: ["Fintech", "Dashboard", "Commodities"],
//     url: "https://nova-cargo-cargo-tk67-sigma.vercel.app/",
//   },

//   {
//     id: 5,
//     name: "Nova Commodities",
//     category: "website",
//     categoryLabel: "Website",
//     image: "./assets/images/nova.png",
//     alt: "Nova Commodities website",
//     description:
//       "A corporate website presenting commodity sourcing, custody, trading and export activities.",
//     tags: ["Corporate", "Commodities", "Africa"],
//     url: "https://nova-cargo-nova.vercel.app/",
//   },

//   {
//     id: 6,
//     name: "Finzo",
//     category: "web-app",
//     categoryLabel: "Web App",
//     image: "./assets/images/finzo.png",
//     alt: "Finzo web application",
//     description:
//       "A digital finance application designed around financial management and user interaction.",
//     tags: ["Fintech", "Web App", "Dashboard"],
//     url: "https://finzo-woad.vercel.app/",
//   },

//   {
//     id: 7,
//     name: "Spring Coop",
//     category: "website",
//     categoryLabel: "Website",
//     image: "./assets/images/spring.png",
//     alt: "Spring Coop digital platform",
//     description:
//       "A digital platform concept designed to make cooperative activities easier to manage and access.",
//     tags: ["Web App", "Platform", "Responsive"],
//     url: "https://spring-coop-qtqrmhh15-jpteks-projects.vercel.app/",
//   },

//   {
//     id: 8,
//     name: "Principauté Hotel",
//     category: "website",
//     categoryLabel: "Website",
//     image: "./assets/images/principaute.png",
//     alt: "Principauté H website",
//     description:
//       "A modern web experience created to present the brand, its identity and its activities.",
//     tags: ["Website", "Branding", "Responsive"],
//     url: "https://principaute-h.vercel.app/",
//   },

//   {
//     id: 9,
//     name: "ProHealth",
//     category: "web-app",
//     categoryLabel: "Web App",
//     image: "./assets/images/tjp.png",
//     alt: "ProHealth web application",
//     description:
//       "A digital health experience designed to make health-related services and information easier to access.",
//     tags: ["Health", "Web App", "UI/UX"],
//     url: "https://prohealth-khaki.vercel.app/",
//   },



//   {
//     id: 10,
//     name: "Mboa Shop",
//     category: "web-app",
//     categoryLabel: "Web App",
//     image: "./assets/images/mboa.png",
//     alt: "Mboa Shop e-commerce application",
//     description:
//       "An online shopping experience built around products, discovery and digital purchasing.",
//     tags: ["E-commerce", "Shopping", "Responsive"],
//     url: "https://mboashopsite.onrender.com/",
//   },

//   {
//     id: 11,
//     name: "Gemini Vika",
//     category: "web-app",
//     categoryLabel: "Web App",
//     image: "./assets/images/gemini.png",
//     alt: "Gemini Vika web application",
//     description:
//       "A web application focused on building a personalised Chat model",
//     tags: ["Web App", "Interactive", "Responsive"],
//     url: "https://gemini-vika.onrender.com/",
//   },

  

//   {
//     id: 13,
//     name: "DigitalBank",
//     category: "website",
//     categoryLabel: "Website",
//     image:
//       "https://ffdwrr.netlify.app/assets/images/image-mockups.png",
//     alt: "DigitalBank mobile application",
//     description:
//       "A digital banking experience designed around everyday financial activities.",
//     tags: ["Fintech", "Mobile", "UI/UX"],
//     url: "https://ffdwrr.netlify.app/",
//   },

//   {
//     id: 14,
//     name: "Article Summarizer",
//     category: "web-app",
//     categoryLabel: "Web App",
//     image: "./assets/images/sumarise.png",
//     alt: "Article summarizer web application",
//     description:
//       "A web application designed to make long articles easier to understand and consume.",
//     tags: ["AI", "Web App", "Productivity"],
//     url: "https://summariseepola.netlify.app/",
//   },

 

//   {
//     id: 15,
//     name: "Find Your Home",
//     category: "web-app",
//     categoryLabel: "Web App",
//     image: "./assets/images/fyh.png",
//     alt: "Find Your Home real estate application",
//     description:
//       "A property platform designed to help people discover homes and explore available listings.",
//     tags: ["Real Estate", "Search", "Web App"],
//     url: "https://find-yourhome.lovable.app/",
//   },

//  {
//   id: 16,
//   name: "Relationship Discovery Platform",
//   category: "ui-ux",
//   categoryLabel: "UI/UX",
//   image: "",
//   alt: "Relationship discovery platform UI/UX design",
//   description:
//     "A relationship platform designed to help single people meet others, discover meaningful connections and find a potential partner through a simple and welcoming experience.",
//   tags: ["Figma", "UI/UX", "Social Platform"],
//   url: "https://www.figma.com/design/eQpWznavNqoCU39NqSHvDy/Sans-titre?node-id=107-142&t=30qIJQsIi22ujQlC-1",
// },

// {
//   id: 17,
//   name: "E-Learning Platform",
//   category: "ui-ux",
//   categoryLabel: "UI/UX",
//   image: "./assets/images/e-learning.png",
//   alt: "E-learning platform UI/UX design",
//   description:
//     "An e-learning platform designed to make online learning easier, helping learners discover courses, follow their progress and access educational content in one place.",
//   tags: ["Figma", "UI/UX", "E-Learning"],
//   url: "https://www.figma.com/proto/pEZo7tpayIzkGCm4hayU31/UI?node-id=238-206&starting-point-node-id=238%3A200&t=pjnk4fuAldtbsOqU-1",
// },
// ];

  const realizations = [
    {
      id: 1,
      title: t('realizations.4.title'),
      description: t('realizations.4.description'),
      image: '/assets/longrich.png',
      link:'https://decollage-website.vercel.app/fr',
    },
    {
      id: 5,
      title: t('realizations.8.title'),
      description: t('realizations.8.description'),
      image: '/assets/solif.png',
      link: 'https://spring-coop-qtqrmhh15-jpteks-projects.vercel.app/',
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
      link: 'https://finzo-woad.vercel.app/',
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
     
     
       <h2 className="text-center font-natom-bold text-2xl md:text-5xl font-semibold">
       {t('realizations.title')}
      </h2>
      <p className="text-justify font-mons-medium tracking-wider p-4 mb-2">
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
        className={`absolute inset-0 text-white bg-gradient-to-t from-blue/80 via-blue-900/80 to-blue-900 p-4 transition-all duration-700 ease-in-out flex flex-col justify-center gap-4 text-sm text-center
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
