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
    <main className="flex min-h-screen flex-col bg-background text-text transition-colors duration-300">
      <Navbar />
      
      <Hero />
      
      <div className="bg-bg-alt-1 transition-colors duration-300">
        <BibleVerse index={0} />
      </div>
      
      <div className="bg-bg-alt-3 transition-colors duration-300">
        <Details />
      </div>
      
      <div className="bg-bg-alt-2 transition-colors duration-300">
        <BibleVerse index={1} />
      </div>
      
      <div className="bg-bg-alt-1 transition-colors duration-300">
        <Entourage />
      </div>
      
      <Gallery images={galleryImages} />
      
      <div className="bg-bg-alt-2 transition-colors duration-300">
        <BibleVerse index={2} />
      </div>
      
      <div className="bg-bg-alt-1 transition-colors duration-300">
        <RSVP />
      </div>
      
      <Footer />
    </main>
  );
}
