
import { ReactNode } from 'react';
import { I18nProviderClient } from '@/locales/client';
import localFont from 'next/font/local';
import '@/app/globals.css'
const fontMonsMedium = localFont({
  src: '../fonts/Montserrat-Regular.ttf',
  weight: '500',
  style: 'normal',
  variable: '--font-mons-medium',
  display: 'swap',
});

const fontMonsSemiBold = localFont({
  src: '../fonts/Montserrat-SemiBold.ttf',
  weight: '600',
  style: 'normal',
  variable: '--font-mons-semibold',
  display: 'swap',
});

const fontNatomBold = localFont({
  src: '../fonts/natompro-bold.otf',
  weight: '700',
  style: 'normal',
  variable: '--font-natom-bold',
  display: 'swap',
});

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
 

  return (
    <html lang={locale}>
      <body
        className={`${fontMonsMedium.variable} ${fontMonsSemiBold.variable} ${fontNatomBold.variable} antialiased`}
      >
        <I18nProviderClient locale={locale}>
          {children}
        </I18nProviderClient>
      </body>
    </html>
  );
}
