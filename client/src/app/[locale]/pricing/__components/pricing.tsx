"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { useI18n } from "@/locales/client";
import Link from "next/link";

export default function OffersPage() {
  const t = useI18n();
  const offers = [
    {
      id: 1,
      name: t("pricing.basic.title1"),
      price: t("pricing.basic.price"),
      features: [
        t("pricing.basic.features.0"),
        t("pricing.basic.features.1"),
        t("pricing.basic.features.2"),
        t("pricing.basic.features.3"),
        t("pricing.basic.features.4"),
        t("pricing.basic.features.5"),
        t("pricing.basic.features.6"),
        t("pricing.basic.features.7"),
        t("pricing.basic.features.8"),
        t("pricing.basic.features.9"),
        t("pricing.basic.features.10"),
      ],
      button: t("pricing.basic.button"),
    },
    {
      id: 2,
      name: t("pricing.advanced.title1"),
      price: t("pricing.advanced.price"),
      features: [
        t("pricing.advanced.features.0"),
        t("pricing.advanced.features.1"),
        t("pricing.advanced.features.2"),
        t("pricing.advanced.features.3"),
        t("pricing.advanced.features.4"),
        t("pricing.advanced.features.5"),
        t("pricing.advanced.features.6"),
        t("pricing.advanced.features.7"),
        t("pricing.advanced.features.8"),
        t("pricing.advanced.features.9"),
        t("pricing.advanced.features.10"),
        t("pricing.advanced.features.11"),
        t("pricing.advanced.features.12"),
        t("pricing.advanced.features.13"),
      ],
      button: t("pricing.advanced.button"),
    },
    {
      id: 3,
      name: t("pricing.premium.title1"),
      price: t("pricing.premium.price"),
      features: [
        t("pricing.premium.features.0"),
        t("pricing.premium.features.1"),
        t("pricing.premium.features.2"),
        t("pricing.premium.features.3"),
        t("pricing.premium.features.4"),
        t("pricing.premium.features.5"),
        t("pricing.premium.features.6"),
        t("pricing.premium.features.7"),
        t("pricing.premium.features.8"),
        t("pricing.premium.features.9"),
        t("pricing.premium.features.10"),
        t("pricing.premium.features.11"),
        t("pricing.premium.features.12"),
      ],
      button: t("pricing.premium.button"),
    },
  ];

  const offers2 = [
    {
      id: 1,
      name: t("pricing.design.title3"),
      price: t("pricing.design.price"),
      features: [
        t("pricing.design.features.0"),
        t("pricing.design.features.1"),
        t("pricing.design.features.2"),
        t("pricing.design.features.3"),
        t("pricing.design.features.4"),
      ],
      button: t("pricing.design.button"),
    },
    {
      id: 2,
      name: t("pricing.design.title4"),
      price: t("pricing.design.price1"),
      features: [
        t("pricing.design.features1.0"),
        t("pricing.design.features1.1"),
        t("pricing.design.features1.2"),
        t("pricing.design.features1.3"),
      ],
      button: t("pricing.design.button1"),
    },
    {
      id: 3,
      name: t("pricing.design.title5"),
      price: t("pricing.design.price2"),
      features: [
        t("pricing.design.features2.0"),
        t("pricing.design.features2.1"),
        t("pricing.design.features2.2"),
        t("pricing.design.features2.3"),
        t("pricing.design.features2.4"),
      ],
      button: t("pricing.design.button2"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="bg-white text-gray-900">
        <section
          className="relative flex flex-col justify-center items-center text-center pt-20 px-4 text-white min-h-[400px] overflow-hidden"
          aria-labelledby="hero-title"
        >
          <Image
            src="/assets/hero.png"
            alt="Illustration des offres digitales"
            fill
            priority
            quality={90}
            className="object-cover z-0"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20 max-w-3xl px-4">
            <motion.h1
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false, amount: 0.1 }}
              className="text-3xl md:text-5xl font-natom-bold font-semibold mb-4"
            >
              {t("pricing.title")}
            </motion.h1>
            <p className="text-lg md:text-xl mb-6 font-mons-medium">
              {t("pricing.description")}
            </p>
          </div>
        </section>

        <section className="flex flex-col py-16 px-4 md:px-8 lg:px-20">
          <h2 className="text-center font-natom-bold text-3xl md:text-5xl font-semibold mb-4">
            {t("pricing.title1")}
          </h2>
          <p className="text-center font-mons-medium tracking-wider text-sm md:text-base mb-10">
            {t("pricing.description1")}
          </p>

          <p className="text-lg md:text-xl text-orange font-title mb-6 text-center">
            {t("pricing.basic.title")}
          </p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {offers.map((plan) => (
              <Card
                key={plan.id}
                className={`${
                  plan.id === 2 ? "bg-blue text-white" : "bg-white text-black"
                } rounded-xl shadow-lg p-6`}
              >
                <CardContent className="p-2 sm:p-4 lg:p-6 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-xl font-natom-bold font-semibold mb-2">
                      {plan.name}
                    </h3>
                    <p
                      className={`${
                        plan.id === 2 ? "text-orange" : "text-black"
                      } font-mons-semibold text-lg`}
                    >
                      {plan.price}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm font-mons-medium">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex gap-3">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 text-orange" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="https://wa.me/237651118070"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="relative w-full overflow-hidden group px-6 py-2 hover:text-white rounded-md"
                      >
                        <span className="relative z-10 font-mons-semibold text-sm">
                          {plan.button}
                        </span>
                        <span
                          className="absolute inset-0 bg-orange scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-700 ease-in-out"
                          aria-hidden="true"
                        />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <p className="text-lg md:text-xl text-orange font-title my-10 text-center">
            {t("pricing.design.title2")}
          </p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {offers2.map((plan) => (
              <Card
                key={plan.id}
                className={`${
                  plan.id === 2 ? "bg-blue text-white" : "bg-white text-black"
                } rounded-xl shadow-lg p-6`}
              >
                <CardContent className="p-2 sm:p-4 lg:p-6 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-xl font-natom-bold font-semibold mb-2">
                      {plan.name}
                    </h3>
                    <p
                      className={`${
                        plan.id === 2 ? "text-orange" : "text-black"
                      } font-mons-semibold`}
                    >
                      {plan.price}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm font-mons-medium">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex gap-3">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 text-orange" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="https://wa.me/237651118070"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="relative w-full overflow-hidden group px-6 py-2 hover:text-white rounded-md"
                      >
                        <span className="relative z-10 font-mons-semibold text-sm">
                          {plan.button}
                        </span>
                        <span
                          className="absolute inset-0 bg-orange scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-700 ease-in-out"
                          aria-hidden="true"
                        />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <div className="flex justify-center flex-col items-center font-mons-medium mt-14 px-4 text-center">
            <p className="text-sm md:text-base max-w-2xl">
              {t("pricing.project.description")}
            </p>
            <Link
              href="https://wa.me/237651118070"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="relative overflow-hidden mt-4 group px-6 py-2 text-white bg-orange rounded-md hover:bg-blue hover:scale-105 transition duration-700">
                <span className="relative z-10 font-semibold text-sm font-mons-semibold">
                  {t("pricing.project.button")}
                </span>
                <span
                  className="absolute inset-0 bg-blue scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-700 ease-in-out"
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
