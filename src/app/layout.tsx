import type { Metadata } from "next";
import { Nunito, Poppins, Galada } from "next/font/google";
import "./globals.css";

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
  title: "HKN62 FUN RUN 2026 | Run Beyond Limits",
  description:
    "18 OKTOBER 2026 - Alun Alun Wonosobo. HKN62 FUN RUN 2026 5K event. Kategori Umum, Pelajar, Instansi Kesehatan. Register now!",
  keywords: ["HKN62", "Fun Run", "5K", "marathon", "running event", "2026"],
  openGraph: {
    title: "HKN62 FUN RUN 2026 | Run Beyond Limits",
    description:
      "18 OKTOBER 2026 - Alun Alun Wonosobo. HKN62 FUN RUN 2026 5K event.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HKN62 FUN RUN 2026 | Run Beyond Limits",
    description:
      "18 OKTOBER 2026 - Alun Alun Wonosobo. HKN62 FUN RUN 2026 5K event.",
  },
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
      <body className="font-poppins">
        {children}
      </body>
    </html>
  );
}
