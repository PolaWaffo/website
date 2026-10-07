"use client";
import { FaClock, FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import React, { startTransition } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Switch } from "./ui/switch";

import { useI18n } from "@/locales/client";
import Image from "next/image";
import { MdLocationOn, MdPhone } from "react-icons/md";
export default function Footer() {
  const pathname = usePathname();
  const params = useParams();
  const t=useI18n()
  const locale = params?.locale || "fr"; // fallback to 'fr' if missing
  const router = useRouter();
  const navItems = [
    { href: `/${locale}`, label: t("navbar.home") },
    { href: `/${locale}/about`, label: t("navbar.about") },
    { href: `/${locale}/pricing`, label: t("navbar.pricing") },
    { href: `/${locale}/blog`, label: t("navbar.blog") },
    { href: `/${locale}/contact`, label: t("navbar.contact") },
  ];
  const toggleLanguage = () => {
    const newLocale = locale === "fr" ? "en" : "fr";
    const segments = pathname.split("/");
    // Replace the locale segment (at index 1)
    segments[1] = newLocale;
    const newPath = segments.join("/") || "/";
    startTransition(() => {
      router.push(newPath);
    });
  };

  const serviceItems = [
    {
      label:
        t('footer.services.website'),
    },
    { label: t('footer.services.mobile')},
    // { label: t('footer.services.saas')},
    // { label: t('footer.services.graphic') },
    { label: t('footer.services.webdesign') },
    // { label: t('footer.services.consulting') },
  ];

  return (
    <footer className="bg-blue  text-white px-6 py-10">
   <div className="md:place-items-center grid md:grid-cols-4  gap-8 ">

      {/* À Propos */}
      <section aria-labelledby="footer-about" className="flex flex-col gap-4">
           <Image
                  src="/assets/logobg.png"
                  alt="Afriva Logo"
                  priority
                  width={80}
                  height={80}
                  
                />
        <h2 id="footer-about" className="text-[16px] font-natom-bold font-bold">{t('footer.title')}</h2>
        <p className="text-sm leading-relaxed tracking-wider">
        {t('footer.description')}
         
        </p>
        <div className="flex gap-4 text-2xl mt-2">
         
          <a
            href="https://web.facebook.com/profile.php?id=61575300329816" 
            aria-label="Facebook Afriva"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange transition-colors border-2 rounded-full p-2"
          >
            <FaFacebookF size={20}/>
          </a>
          <a
            href="https://www.linkedin.com/company/techsprint-agency/"
            aria-label="LinkedIn Afriva"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange transition-colors  border-2 rounded-full p-2"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://www.linkedin.com/company/techsprint-agency/"
            aria-label="Tiktok Afriva"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange transition-colors  border-2 rounded-full p-2"
          >
            <FaTiktok size={20} />
          </a>
        </div>
      </section>
  
      {/* Liens Rapides */}
      <nav aria-label="Liens rapides" className="flex flex-col gap-4">
        <h2 className="text-[16px] font-bold  font-natom-bold">{t('footer.title2')}</h2>
        <ul className="flex flex-col gap-2 font-mons-medium text-sm">

          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={` transition-colors duration-300   ${
                  pathname === href ? "text-orange hover:underline" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
  
      {/* Nos Services */}
      <nav aria-label="Nos services" className="flex flex-col gap-4">
        <h2 className="text-[16px] md:-mt-6 font-bold font-natom-bold">{t('footer.title3')}</h2>
        <ul className="flex flex-col gap-2 font-mons-medium text-sm">
          {serviceItems.map(({ label }, index) => (
            <li
              key={index}
              className="transition-colors duration-300 hover:text-orange"
            >
              {label}
            </li>
          ))}
        </ul>
      </nav>
  
      {/* Newsletter */}
      <section aria-labelledby="footer-newsletter" className="flex flex-col gap-4">
        <h2 id="footer-newsletter" className="text-[16px] font-bold font-natom-bold">{t('footer.newsletter.button')}</h2>
        {/* <p className="text-sm leading-relaxed">
        {t('footer.newsletter.description')}
        </p> */}
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
        
                        {/* <div className="flex gap-4">
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
                        </div> */}
                      </div>
      </section>
    </div>
  
    <hr className="border-gray-600 my-8" />
  
    <div className="max-w-7xl mx-auto flex justify-center  max-md:flex-col items-center text-center gap-4  md:gap-8">
  {/* Langues */}
 

  {/* Copyright */}
  <div className='flex flex-wrap items-center justify-center gap-4'>
  <p className="text-center text-sm font-mons-medium">
  {t('footer.copyright')}
    {/* <span className="font-semibold">{t('footer.privacyPolicy')}</span> */}

  </p>
  {/* <Image
  src="/assets/jp.jpg"
  width={24}
  height={16}
  alt="Logo JPTEKS"
  className="object-cover rounded-full "
/> */}

  </div>
   <nav aria-label="Changer la langue" className="flex justify-end gap-4">
    FR
    {/* <Image
      src="/assets/french.png"
      width={24}
      height={24}
      alt="Français"
      className="object-contain"
    /> */}
        <Switch
                  checked={locale === "en"}
                  onCheckedChange={toggleLanguage}
                />
                EN
    {/* <Image
      src="/assets/english.png"
      width={28}
      height={28}
      alt="Anglais"
      className="object-contain"
    /> */}
  </nav>

</div>


  </footer>
  
  );
}
