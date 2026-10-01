
import React from 'react'
import AboutPage from './__components/about'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "À propos de TechSprint | Une marque de JPTEKS",
  description: "Découvrez la mission, la vision et les valeurs de TechSprint, une initiative de JPTEKS pour accompagner la transformation numérique des entreprises.",
};
export default function Pricing() {
  return (
    
     <AboutPage/>
   
  )
}
