import { notFound } from "next/navigation";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";
import { MobileMenu } from "@/components/MobileMenu";
import { Hero } from "@/components/Hero";
import { Welcome } from "@/components/Welcome";
import { Apartment } from "@/components/Apartment";
import { Location } from "@/components/Location";
import { TealQuote } from "@/components/TealQuote";
import { Monopoli } from "@/components/Monopoli";
import { Experiences } from "@/components/Experiences";
import { SeasidePool } from "@/components/SeasidePool";
import { GettingHere } from "@/components/GettingHere";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Lightbox } from "@/components/Lightbox";
import { LOCALES, type Locale } from "@/lib/site";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default function Home({ params }: { params: { locale: string } }) {
  if (!(LOCALES as readonly string[]).includes(params.locale)) notFound();
  const lang = params.locale as Locale;

  return (
    <Providers lang={lang}>
      <Header />
      <MobileMenu />
      <main>
        <Hero />
        <Welcome />
        <Apartment />
        <Location />
        <TealQuote />
        <Monopoli />
        <Experiences />
        <SeasidePool />
        <GettingHere />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Lightbox />
    </Providers>
  );
}
