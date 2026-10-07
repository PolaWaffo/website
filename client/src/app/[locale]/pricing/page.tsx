import React from 'react'
import OffersPage from './__components/pricing'
import { Metadata } from 'next';
import WhatsAppButton from '@/components/Whatsapp';
export const metadata: Metadata = {
  title: "Nos Offres | Sites Web & Chartes Graphiques - AFRIVA",
  description: "Découvrez nos packages web et chartes graphiques adaptés à vos besoins : de la création de site vitrine aux solutions sur mesure.",
};

export default function Pricing() {
  return (
<>
 <OffersPage/>
 <WhatsAppButton/>
</>
  )
}
