
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

import fr from "@/locales/fr";
import en from "@/locales/en";

const translations = { fr, en };

const contacts = [
  {
    id: "commercial",
    nameKey: "whatsapp.contacts.commercial.name",
    roleKey: "whatsapp.contacts.commercial.role",
    phone: "237XXXXXXXXX",
    messageKey: "whatsapp.contacts.commercial.message",
  },
  {
    id: "creative",
    nameKey: "whatsapp.contacts.creative.name",
    roleKey: "whatsapp.contacts.creative.role",
    phone: "237XXXXXXXXX",
    messageKey: "whatsapp.contacts.creative.message",
  },
  {
    id: "support",
    nameKey: "whatsapp.contacts.support.name",
    roleKey: "whatsapp.contacts.support.role",
    phone: "237XXXXXXXXX",
    messageKey: "whatsapp.contacts.support.message",
  },
];

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const locale = pathname.split("/")[1] === "en" ? "en" : "fr";
  const dictionary = translations[locale];

 const t = (key: string): string => {
  const value = (
    dictionary as Record<string, unknown>
  )[key];

  return typeof value === "string" ? value : key;
};
  const openWhatsApp = (phone: string, message: string) => {
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-16 right-0 w-[300px] max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl"
          >
            <div className="bg-[#25D366] px-5 py-4 text-white">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">
                    {t("whatsapp.title")}
                  </h3>
                  <p className="text-sm text-white/90">
                    {t("whatsapp.subtitle")}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={t("whatsapp.close")}
                  className="rounded-full p-1.5 transition hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="p-3">
              {contacts.map((contact) => (
                <button
                  key={contact.id}
                  type="button"
                  onClick={() =>
                    openWhatsApp(
                      contact.phone,
                      t(contact.messageKey)
                    )
                  }
                  className="flex w-full items-center gap-3 rounded-xl p-3 text-left transition hover:bg-gray-50"
                >
                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10">
                    <MessageCircle className="h-5 w-5 text-[#25D366]" />
                    <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-white bg-[#25D366]" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900">
                      {t(contact.nameKey)}
                    </p>
                    <p className="text-xs leading-relaxed text-gray-500">
                      {t(contact.roleKey)}
                    </p>
                  </div>

                  <MessageCircle className="h-5 w-5 shrink-0 text-[#25D366]" />
                </button>
              ))}
            </div>

            <div className="border-t bg-gray-50 px-4 py-3">
              <p className="text-center text-xs text-gray-500">
                {t("whatsapp.footer")}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={
          open
            ? t("whatsapp.close")
            : t("whatsapp.open")
        }
        aria-expanded={open}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <MessageCircle className="h-7 w-7" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
