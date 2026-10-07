"use client";
import { MdLocationOn, MdPhone } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useI18n } from "@/locales/client";
import Link from "next/link";

export default function Contact() {
  const t = useI18n();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section
          className="relative flex flex-col justify-center items-center text-center pt-20 px-4 text-white min-h-[400px] overflow-hidden"
          aria-labelledby="hero-title"
        >
          <Image
            src="/assets/contact.jpg"
            alt={t("contact.title")}
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
              {t("contact.title")}
            </motion.h1>
            <p className="text-lg md:text-xl mb-6 font-mons-medium">
              {t("contact.description")}
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 md:gap-10 md:p-10">
          {/* Left Info Card */}
          <Card className="space-y-6 border-0 shadow-none rounded-none">
            <CardContent>
              <h2 className="font-natom-bold text-xl md:text-3xl font-semibold text-center">
                {t("contact.title1")}
              </h2>
              <p className="text-sm font-mons-medium tracking-wider py-3">
                {t("contact.description1")}
              </p>

              <div className="mt-2 space-y-4 text-sm font-mons-medium tracking-wider">
                <div className="flex gap-4">
                  <MdLocationOn className="w-7 h-7" />
                  <div className="text-sm font-mons-medium">
                    <h4 className="font-semibold">{t("contact.address")}</h4>
                    <p>{t("contact.address.content")}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MdPhone className="w-7 h-7" />
                  <div className="text-sm font-mons-medium">
                    <h4 className="font-semibold">{t("contact.phone")}</h4>
                    <p className="text-sm">{t("contact.phone.content")}</p>
                    <p className="text-sm">{t("contact.phone.content1")}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaClock className="w-7 h-7" />
                  <div className="text-sm font-mons-medium">
                    <h4 className="font-semibold">
                      {t("contact.openingHours")}
                    </h4>
                    <p className="text-sm">
                      {t("contact.openingHours.content")}
                    </p>
                    <p className="text-sm">
                      {t("contact.openingHours.content1")}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Form Section */}
          <form
            className="space-y-6 mt-2 md:mt-12 mx-4 md:mx-0"
            aria-label="Demandez un Devis"
          >
            <h2 className="font-natom-bold text-xl md:text-3xl font-semibold text-center md:-translate-y-7">
              {t("contact.form.title")}
            </h2>
            <p className="text-sm font-mons-medium tracking-wider md:py-3">
              {t("contact.form.description")}
            </p>

            <div className="space-y-2 text-sm font-mons-medium tracking-wider">
              <Label htmlFor="name">{t("contact.form.name.title")}</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder={t("contact.form.name")}
              />
            </div>

            <div className="space-y-2 text-sm font-mons-medium tracking-wider">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t("contact.form.email")}
              />
            </div>

            <div className="space-y-2 text-sm font-mons-medium tracking-wider">
              <Label htmlFor="subject">{t("contact.form.subject.title")}</Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder={t("contact.form.subject")}
              />
            </div>

            <div className="space-y-2 text-sm font-mons-medium tracking-wider">
              <Label htmlFor="message">{t("contact.form.message.title")}</Label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder={t("contact.form.message")}
                className="w-full border border-gray-300 rounded-lg p-2 text-sm"
              />
            </div>

            <Link
             href='https://wa.me/237651118070'
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
          </form>
        </section>

        <section className="w-full my-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d63674.9794629403!2d9.729455939776724!3d4.084160847671739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x10610d0e0e4a7671%3A0xea4c2cf21dd231b9!2sDouala!3m2!1d4.0841414!2d9.770670299999999!5e0!3m2!1sen!2scm!4v1753962096477!5m2!1sen!2scm"
            width="100%"
            height="450"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            allow="geolocation; microphone; camera"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map - Douala"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
