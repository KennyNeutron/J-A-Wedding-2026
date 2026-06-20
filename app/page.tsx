import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Countdown } from "@/components/countdown";
import { Details } from "@/components/details";
import { Entourage } from "@/components/entourage";
import { ImageBreak } from "@/components/image-break";
import { BibleVerses } from "@/components/bible-verses";
import { RSVP } from "@/components/rsvp";
import { Footer } from "@/components/footer";
import { galleryImages } from "@/lib/gallery";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />

      {/* Full-bleed after hero */}
      <ImageBreak images={[galleryImages[0]]} layout="single" />

      <Countdown />

      {/* Duo after countdown */}
      <ImageBreak images={[galleryImages[1], galleryImages[2]]} layout="duo" />

      <Details />

      {/* Trio after details */}
      <ImageBreak images={[galleryImages[3], galleryImages[4], galleryImages[5]]} layout="trio" />

      <Entourage />

      {/* Duo after entourage */}
      <ImageBreak images={[galleryImages[6], galleryImages[7]]} layout="duo" />

      <BibleVerses />

      {/* Full-bleed before RSVP */}
      <ImageBreak images={[galleryImages[8]]} layout="single" />

      <RSVP />

      {/* Trio reusing favorites before footer */}
      <ImageBreak images={[galleryImages[0], galleryImages[4], galleryImages[8]]} layout="trio" />

      <Footer />
    </main>
  );
}
