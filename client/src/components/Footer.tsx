"use client";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import React, { startTransition } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Switch } from "./ui/switch";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useI18n } from "@/locales/client";

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
    { label: t('footer.services.saas')},
    { label: t('footer.services.graphic') },
    { label: t('footer.services.webdesign') },
    { label: t('footer.services.consulting') },
  ];

  return (
    <footer className="bg-blue text-white px-6 py-10">
   <div className="max-w-7xl mx-auto grid md:grid-cols-4 justify-between gap-8 ">

      {/* À Propos */}
      <section aria-labelledby="footer-about" className="flex flex-col gap-4">
        <h2 id="footer-about" className="text-[16px] font-natom-bold font-bold">{t('footer.title')}</h2>
        <p className="text-sm leading-relaxed tracking-wider">
        {t('footer.description')}
         
        </p>
        <div className="flex gap-4 text-2xl mt-2">
         
          <a
            href="https://web.facebook.com/profile.php?id=61575300329816" 
            aria-label="Facebook TechSprint"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange transition-colors border-2 rounded-full p-2"
          >
            <FaFacebookF size={20}/>
          </a>
          <a
            href="https://www.linkedin.com/company/techsprint-agency/"
            aria-label="LinkedIn TechSprint"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange transition-colors  border-2 rounded-full p-2"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </section>
  
      {/* Liens Rapides */}
      <nav aria-label="Liens rapides" className="flex flex-col gap-4 md:items-center">
        <h2 className="text-[16px] font-bold font-natom-bold">{t('footer.title2')}</h2>
        <ul className="flex flex-col gap-2 font-mons-medium text-sm">

          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`flex md:-translate-x-2 transition-colors duration-300  ${
                  pathname === href ? "bg-orange p-1 px-2 rounded-lg w-fit" : ""
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
        <h2 className="text-[16px] font-bold font-natom-bold">{t('footer.title3')}</h2>
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
        <p className="text-sm leading-relaxed">
        {t('footer.newsletter.description')}
        </p>
        <div className="flex max-w-md">
          <Input
            type="email"
            placeholder={t('footer.newsletter.placeholder')}
            aria-label="Adresse email pour newsletter"
            className="rounded-r-none border-r-0 bg-white text-black-pale"
          />
          <Button className="rounded-l-none border-l-0 py-4 hover:bg-orange hover:scale-105 ">{t('footer.newsletter.button')}</Button>
        </div>
      </section>
    </div>
  
    <hr className="border-gray-600 my-8" />
  
    <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4 md:flex-row md:justify-center md:gap-8">
  {/* Langues */}
  <nav aria-label="Changer la langue" className="flex items-center gap-4">
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

  {/* Copyright */}
  <div className='flex gap-x-4'>
  <p className="text-center">
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

</div>

  </footer>
  
  );
}
