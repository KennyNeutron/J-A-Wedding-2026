import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Details } from "@/components/details";
import { Entourage } from "@/components/entourage";
import { Gallery } from "@/components/gallery";
import { BibleVerse } from "@/components/bible-verse";
import { RSVP } from "@/components/rsvp";
import { Footer } from "@/components/footer";
import { getGalleryImages } from "@/lib/gallery";

export default function Home() {
  const galleryImages = getGalleryImages();

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <Hero />
      
      <div className="bg-[#FAF8FB]">
        <BibleVerse index={0} />
      </div>
      
      <div className="bg-[#FDFBFE]">
        <Details />
      </div>
      
      <div className="bg-[#F7F1FC]">
        <BibleVerse index={1} />
      </div>
      
      <div className="bg-[#FAF8FB]">
        <Entourage />
      </div>
      
      <Gallery images={galleryImages} />
      
      <div className="bg-[#F7F1FC]">
        <BibleVerse index={2} />
      </div>
      
      <div className="bg-[#FAF8FB]">
        <RSVP />
      </div>
      
      <Footer />
    </main>
  );
}
