import type { Metadata } from "next";
import { Nunito, Poppins, Galada } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalBackground from "./components/GlobalBackground";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const galada = Galada({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-galada",
  display: "swap",
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["400", "500", "700", "800", "900"],
});
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hknfunrun.com'),
  alternates: {
    canonical: '/',
  },
  title: "HKN62 FUN RUN 2026 | TAKE YOUR HEALTHY STEP",
  description:
    "18 OKTOBER 2026 - Alun Alun Wonosobo. HKN62 FUN RUN 2026 5K event. Kategori Umum, Pelajar, Instansi Kesehatan. Register now!",
  keywords: ["HKN62", "Fun Run", "5K", "marathon", "running event", "2026"],
  openGraph: {
    title: "HKN62 FUN RUN 2026 | TAKE YOUR HEALTHY STEP",
    description:
      "18 OKTOBER 2026 - Alun Alun Wonosobo. HKN62 FUN RUN 2026 5K event.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HKN62 FUN RUN 2026 | TAKE YOUR HEALTHY STEP",
    description:
      "18 OKTOBER 2026 - Alun Alun Wonosobo. HKN62 FUN RUN 2026 5K event.",
  },
};


const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "HKN62 FUN RUN 2026",
  "startDate": "2026-10-18T06:00:00+07:00",
  "endDate": "2026-10-18T10:00:00+07:00",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "Place",
    "name": "Alun Alun Wonosobo",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wonosobo",
      "addressRegion": "Central Java",
      "addressCountry": "ID"
    }
  },
  "image": [
    "https://hknfunrun.com/logo-hkn-run.webp"
  ],
  "description": "18 OKTOBER 2026 - Alun Alun Wonosobo. HKN62 FUN RUN 2026 5K event. Kategori Umum, Pelajar, Instansi Kesehatan.",
  "offers": {
    "@type": "Offer",
    "url": "https://hknfunrun.com/event/hkn-fun-run-2026",
    "price": "150000",
    "priceCurrency": "IDR",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-09-01T00:00:00+07:00"
  },
  "organizer": {
    "@type": "Organization",
    "name": "HKN62 Committee",
    "url": "https://hknfunrun.com/event/hkn-fun-run-2026"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${poppins.variable} ${galada.variable}`}
    >
      
      <body className="font-poppins bg-[#0a0a0a] overflow-x-hidden">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />
        <GlobalBackground />
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
