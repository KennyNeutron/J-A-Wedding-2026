import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Countdown } from "@/components/countdown";
import { Story } from "@/components/story";
import { Details } from "@/components/details";
import { Entourage } from "@/components/entourage";
import { Gallery } from "@/components/gallery";
import { BibleVerses } from "@/components/bible-verses";
import { RSVP } from "@/components/rsvp";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Countdown />
      <Story />
      <Details />
      <Entourage />
      <Gallery />
      <BibleVerses />
      <RSVP />
      <Footer />
    </main>
  );
}
