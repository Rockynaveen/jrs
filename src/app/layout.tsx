import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'
import 'aos/dist/aos.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#031c3f',
}

export const metadata: Metadata = {
  title: 'JRS International School | Empowering Future Leaders',
  description:
    'JRS International School, Uppal, Hyderabad. Committed to providing quality education with CBSE curriculum, world-class infrastructure, and holistic development.',
}

import WhatsAppButton from '@/components/common/WhatsAppButton'
import AdmissionsPopup from '@/components/common/AdmissionsPopup'
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-[#111] antialiased font-sans overflow-x-clip min-h-screen w-full font-normal">
        {children}
        <AdmissionsPopup />
        <WhatsAppButton />

        {/* Zoho SalesIQ Live Chat Widget */}
        <Script id="zsiq-init" strategy="afterInteractive">
          {`
            window.$zoho = window.$zoho || {};
            $zoho.salesiq = $zoho.salesiq || { ready: function(){} };
          `}
        </Script>
        <Script
          id="zsiqscript"
          src="https://salesiq.zoho.in/widget?wc=siq03ac49bba0baf12c1689a69cfa7fab714cedc5f444bba32f2e99b8853a7da01a"
          strategy="afterInteractive"
          defer
        />
      </body>
    </html>
  )
}
