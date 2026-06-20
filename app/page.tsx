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
      <Countdown />

      {/* Photo break: after countdown */}
      <ImageBreak images={[galleryImages[0], galleryImages[1]]} layout="duo" />

      <Details />

      {/* Photo break: full-bleed after details */}
      <ImageBreak images={[galleryImages[2]]} layout="single" />

      <Entourage />

      {/* Photo break: trio after entourage */}
      <ImageBreak images={[galleryImages[3], galleryImages[4], galleryImages[5]]} layout="trio" />

      <BibleVerses />

      {/* Photo break: duo before RSVP */}
      <ImageBreak images={[galleryImages[6], galleryImages[7]]} layout="duo" />

      <RSVP />

      {/* Photo break: full-bleed before footer */}
      <ImageBreak images={[galleryImages[8]]} layout="single" />

      <Footer />
    </main>
  );
}
