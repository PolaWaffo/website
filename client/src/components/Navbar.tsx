// "use client"
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Switch } from "./ui/switch";
// import {
//   Sheet,

//   SheetContent,

//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { Menu } from "lucide-react";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//     const [open, setOpen] = useState(false);

//     const pathname = usePathname()
//     const navItems = [
//         { href: '/', label: 'Accueil' },
//         { href: '/about', label: 'À propos' },
//         { href: '/pricing', label: 'Nos offres' },
//         // { href: '/realisations', label: 'Réalisations' },
//         { href: '/blog', label: 'Blog' },
//         { href: '/contact', label: 'Contact' },
//       ]
//   return (
//     <nav className="flex items-center justify-between px-4  sticky top-0 z-[998] bg-white shadow-sm">
//     {/* Logo */}
//     <Link href="/" aria-label="TechSprint" className="flex items-center">
//       <Image
//         src="/assets/logo.png"
//         alt="TechSprint Logo"
//         priority
//         width={128}
//         height={128}
//         className="w-20 h-20 md:w-24 md:h-24"
//       />
//     </Link>

//     {/* Desktop Menu */}
//     <ul className="hidden md:flex items-center gap-x-4 font-mons-medium text-sm text-blue">
//       {navItems.map(({ href, label }) => (
//         <li key={href}>
//           <Link
//             href={href}
//             className={`transition-colors duration-300 hover:text-orange ${
//               pathname === href ? 'text-orange' : ''
//             }`}
//           >
//             {label}
//           </Link>
//         </li>
//       ))}
//       <li>
//         <div className="flex items-center gap-x-2">
//           <Image src="/assets/french.png" width={24} height={24} alt="french" />
//           <Switch />
//           <Image
//             src="/assets/english.png"
//             width={28}
//             height={28}
//             alt="english"
//             className="ml-1"
//           />
//         </div>
//       </li>
//     </ul>

//     {/* Mobile Menu Button */}
//     <div className="md:hidden">
//       <Sheet open={open} onOpenChange={setOpen}>
//         <SheetTrigger>
//           <Menu />
//         </SheetTrigger>
//         <SheetContent className="p-6 z-[1000]">
//           <ul className="flex flex-col gap-y-6 text-sm font-mons-medium text-blue">
//             {navItems.map(({ href, label }) => (
//               <li key={href}>
//                 <Link
//                   href={href}
//                   onClick={() => setOpen(false)}
//                   className={`transition-colors duration-300 hover:text-orange ${
//                     pathname === href ? 'text-orange' : ''
//                   }`}
//                 >
//                   {label}
//                 </Link>
//               </li>
//             ))}
//             <div className="flex items-center gap-x-2">
//               <Image src="/assets/french.png" width={24} height={24} alt="french" />
//               <Switch />
//               <Image src="/assets/english.png" width={28} height={28} alt="english" className="ml-1" />
//             </div>
//           </ul>
//         </SheetContent>
//       </Sheet>
//     </div>
//   </nav>

//   );
// }
"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useParams } from "next/navigation";
import { Switch } from "./ui/switch";
import { useI18n } from "@/locales/client"; // adjust path if needed
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = params?.locale || "fr"; // fallback to 'fr' if missing

  const t = useI18n();

  // Navigation items using translated labels
  const navItems = [
    { href: `/${locale}`, label: t("navbar.home") },
    { href: `/${locale}/about`, label: t("navbar.about") },
    { href: `/${locale}/pricing`, label: t("navbar.pricing") },
    // { href: `/${locale}/blog`, label: t("navbar.blog") },
    // { href: `/${locale}/contact`, label: t("navbar.contact") },
  ];

  // On toggle, switch locale and keep rest of the path intact
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

  return (
    <nav className="flex items-center justify-between p-4 fixed top-0 w-full z-1000  bg-white shadow-sm">
      {/* Logo */}
      <Link
        href={`/${locale}`}
        aria-label="Afriva"
        className="flex items-center"
      >
        <Image
        className="w-20 "
          src="/assets/logo.jpg"
          alt="Afriva Logo"
          priority
          width={100}
          height={100}
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-x-4 font-mons-medium text-sm text-blue">
        {navItems.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`transition-colors duration-300 hover:text-orange ${
                pathname === href
                  ? "text-orange p-1 px-2 rounded-lg w-fit  "
                  : "hover:underline "
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
        <li className="flex items-center gap-2">
            <Button><Link href={`/${locale}/contact`}>{t("navbar.contact")}</Link></Button>
          <div className="flex items-center gap-x-2">
            FR
            {/* <Image
              src="/assets/french.png"
              width={24}
              height={24}
              alt="french"
            /> */}
            <Switch
              checked={locale === "en"}
              onCheckedChange={toggleLanguage}
            />
            {/* <Image
              src="/assets/english.png"
              width={28}
              height={28}
              alt="english"
              className="ml-1"
            /> */}
            EN
          </div>
        </li>
      </ul>

      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>{" "}
          <SheetContent className="p-6 z-[1000]">
            <ul className="flex flex-col gap-y-6 text-sm font-mons-medium text-blue">
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`transition-colors duration-300 hover:text-orange ${
                      pathname === href
                        ? "text-orange p-1 px-2 rounded-lg w-fit  "
                        : "hover:underline"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
         
              <Button >
                <Link href={`/${locale}/contact`}>{t("navbar.contact")}</Link>
              </Button>
              <div className="flex items-center gap-x-2">
                FR
                {/* <Image
                  src="/assets/french.png"
                  width={24}
                  height={24}
                  alt="french"
                /> */}
                <Switch
                  checked={locale === "en"}
                  onCheckedChange={toggleLanguage}
                />
                {/* <Image
                  src="/assets/english.png"
                  width={28}
                  height={28}
                  alt="english"
                  className="ml-1"
                /> */}
                EN
              </div>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
