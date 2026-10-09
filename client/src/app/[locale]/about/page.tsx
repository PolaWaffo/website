
import React from 'react'
import AboutPage from './__components/about'
import { Metadata } from 'next';
import WhatsAppButton from '@/components/Whatsapp';

export const metadata: Metadata = {
  title: "À propos d'AFRIVA",
  description: "Découvrez la mission, la vision et les valeurs d'AFRIVA",
};
export default function Pricing() {
  return (
    
    <>
     <AboutPage/>
     <WhatsAppButton/>
     </>
   
  )
}
