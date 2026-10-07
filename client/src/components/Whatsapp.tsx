"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const contacts = [
  {
    name: "Pola",
    role: "Direction & projets",
    phone: "237XXXXXXXXX",
    message:
      "Bonjour Pola, je souhaite discuter d'un projet avec AFRIVA.",
  },
  {
    name: "Dimitri",
    role: "Marketing & communication",
    phone: "237XXXXXXXXX",
    message:
      "Bonjour Dimitri, je souhaite avoir des informations sur les services AFRIVA.",
  },
  {
    name: "Support AFRIVA",
    role: "Assistance & projets",
    phone: "237XXXXXXXXX",
    message:
      "Bonjour AFRIVA, j'ai besoin d'assistance concernant mon projet.",
  },
];

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  const openWhatsApp = (phone: string, message: string) => {
    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${phone}?text=${encodedMessage}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="
                absolute
                bottom-16
                right-0
                w-[300px]
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-2xl
                border
                border-gray-100
              "
            >
              {/* Header */}
              <div className="bg-[#25D366] px-5 py-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">
                      Besoin d&apos;aide ?
                    </h3>

                    <p className="text-sm text-white/90">
                      Choisissez qui contacter
                    </p>
                  </div>

                  <button
                    onClick={() => setOpen(false)}
                    className="
                      rounded-full
                      p-1.5
                      hover:bg-white/20
                      transition
                    "
                    aria-label="Fermer"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Contacts */}
              <div className="p-3">
                {contacts.map((contact, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      openWhatsApp(
                        contact.phone,
                        contact.message
                      )
                    }
                    className="
                      w-full
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      p-3
                      text-left
                      transition
                      hover:bg-gray-50
                    "
                  >
                    {/* Avatar */}
                    <div
                      className="
                        relative
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#25D366]/10
                      "
                    >
                      <MessageCircle
                        className="h-5 w-5 text-[#25D366]"
                      />

                      {/* Online indicator */}
                      <span
                        className="
                          absolute
                          right-0
                          top-0
                          h-3
                          w-3
                          rounded-full
                          border-2
                          border-white
                          bg-[#25D366]
                        "
                      />
                    </div>

                    {/* Contact information */}
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">
                        {contact.name}
                      </p>

                      <p className="text-xs text-gray-500">
                        {contact.role}
                      </p>
                    </div>

                    <MessageCircle
                      className="h-5 w-5 text-[#25D366]"
                    />
                  </button>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t bg-gray-50 px-4 py-3">
                <p className="text-center text-xs text-gray-500">
                  AFRIVA · Innovate. Impact. Grow.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating button */}
        <motion.button
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-[#25D366]
            text-white
            shadow-lg
            shadow-black/20
          "
          aria-label={
            open
              ? "Fermer les contacts WhatsApp"
              : "Ouvrir les contacts WhatsApp"
          }
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
    </>
  );
}