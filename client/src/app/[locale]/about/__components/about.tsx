"use client"
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/locales/client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";

  

export default function AboutPage() {
  const t= useI18n()
    const values=[
        {
          title: t('about.value.innovation'),
        text: t('about.value.innovation.content')
        },
        {
          title: t('about.value.intégrité'),
          text: t('about.value.intégrité.content')
        },
        {
          title: t('about.value.excellence'),
          text: t('about.value.excellence.content')
        }
      ]
      const team = [
        {
          image: '/assets/me.JPG',
          name: 'Pola Waffo',
          role: t('about.team.member1.role'),
        },
        {
          image: '/assets/awono.jpg',
          name: 'Awono Bilogue ',
          role:  t('about.team.member2.role'),
          
        },
        {
          image: '/assets/forland.JPG',   
          name: 'Tsafack Forland',
          role:  t('about.team.member5.role'),
        },
        {
          image: '/assets/yomi.jpeg',
          name: 'Yomi Njike Brenda',
          role:  t('about.team.member4.role'),
        }, 
        
      ];
      
  return (
    <div className="min-h-screen flex flex-col   ">
        <Navbar/>
    <main className="bg-white text-gray-900">
    <section
  className="relative flex flex-col justify-center items-center text-center pt-20 px-4 text-white min-h-[400px] overflow-hidden"
  aria-labelledby="hero-title"
>
  {/* Image optimisée */}
  <Image
    src="/assets/about.jpg"
    alt="Équipe TechSprint en pleine collaboration"
    fill
    priority
    quality={90}
    className="object-cover z-0"
  />

  {/* Overlay noir semi-transparent */}
  <div className="absolute inset-0 bg-black/60 z-10" />

  {/* Contenu texte au-dessus de tout */}
  <div className="relative z-20 max-w-3xl px-4">
    <motion.h1
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: false, amount: 0.2 }}
      className="text-4xl md:text-5xl font-natom-bold font-semibold mb-4"
    >
      {t('about.title')}
    </motion.h1>
    <p className="text-lg md:text-xl mb-6 font-mons-medium">
      {t('about.description')}
    </p>
  </div>
</section>
    
      {/* Notre Histoire */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-10 md:mx-20 mx-4">
  {/* Texte */}
  <div className="w-full">
    <h2 className="font-natom-bold text-3xl md:text-5xl font-semibold leading-tight">
      {t('about.story.title')}
    </h2>
    <p className="font-mons-medium tracking-wide text-sm md:text-base py-5 text-justify md:text-left">
      {t('about.story.content')}
      <br /><br />
      {t('about.mission')}
      <br /><br />
      {t('about.vision')}
    </p>
  </div>

  {/* Image */}
  <div className="md:flex justify-center md:justify-end hidden ">
    <Image
      src="/assets/circle.png"
      alt="Graph"
      width={400}
      height={400}
      className="animate-gentle-spin w-[250px] sm:w-[300px] md:w-[400px]"
    />
  </div>
</section>


      {/* Nos Valeurs */}
      <section className="flex flex-col my-10 md:mx-20">
        <h2 className="text-center font-natom-bold text-3xl md:text-5xl font-semibold">
        {t('about.value.title')}
        </h2>
        <p className="text-center font-mons-medium tracking-wider py-5">
        {t('about.value.content')}
        </p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 mx-8 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((item, index) => (
            <div key={index} className="relative overflow-hidden">
              <Card className="max-w-md h-[210px] bg-white text-black-pale hover:bg-blue transition-all duration-700 hover:scale-105 hover:rounded-3xl rounded-xl p-6 text-center group flex flex-col items-center justify-center">
                <CardContent className="transition-all duration-700 text-center">
                 
                  <h3 className="text-lg font-extrabold group-hover:text-white font-natom-bold text-black-pale">
                    {item.title}
                  </h3>
                  <p className="text-sm text-black-pale group-hover:text-white font-mons-medium mt-2">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </motion.div>
      </section>
      {/* Notre Vision */}
      {/* <section className="flex flex-col my-10 md:mx-20">
        <h2 className="text-center font-natom-bold text-3xl md:text-5xl font-semibold">Notre Vision à Long Terme</h2>
        <p className="text-center font-mons-medium tracking-wider">
        Notre ambition pour l'avenir de TechSprint et de nos clients.
        </p>
        <p className=" font-mons-medium tracking-wider py-5">
          Nous visons à révolutionner la façon dont les entreprises interagissent avec la technologie. En mettant l'accent
          sur l'intelligence artificielle, l'automatisation et la personnalisation, nous souhaitons façonner un avenir où
          la tech est accessible à tous. Notre objectif est de bâtir une plateforme inclusive, centrée sur l'utilisateur,
          qui favorise la croissance durable.
        </p>
      </section> */}

      {/* Notre Équipe */}
      <section className="flex flex-col my-10 md:mx-20">
    <h2 className="text-center font-natom-bold text-3xl md:text-5xl font-semibold">
    {t('about.team.title')}
    </h2>
    <p className="text-center font-mons-medium tracking-wider py-5">
    {t('about.team.content')}
    </p>
  <motion.div
  initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  viewport={{ once: false, amount: 0.2 }}
>
  <Carousel opts={{ align: "start" }} className="w-full">
    <CarouselContent>
      {team.map((member, index) => (
        <CarouselItem
          key={index}
          className="w-full md:basis-1/2 lg:basis-1/3 px-4"
        >
          <Card className="p-6 rounded-xl shadow-lg flex flex-col items-center text-center h-full bg-white">
            <div className="relative w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-orange shadow-md">
              <Image
                src={member.image}
                alt={member.name}
                fill
                quality={90}
                className="object-cover"
              />
            </div>
            <CardContent className="flex flex-col gap-1 text-center text-black-pale">
              <p className="text-lg font-mons-medium tracking-wider">{member.name}</p>
              <p className="text-sm font-mons-medium tracking-wider">{member.role}</p>
            </CardContent>
          </Card>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</motion.div>

  </section>
    </main>
    <Footer/>
</div>
  );
}
