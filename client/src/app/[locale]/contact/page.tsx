import React from 'react'
import Contact from './__components/contact'
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Contactez-nous | TechSprint",
  description: "Vous avez un projet ou une question ? Contactez notre équipe pour obtenir un accompagnement personnalisé.",
};
export default function page() {
  return (
    <Contact/>
  )
}
