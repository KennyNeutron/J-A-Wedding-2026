import { COUPLE, DETAILS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-text text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-script text-4xl mb-4 text-secondary">
          {COUPLE.groom} & {COUPLE.bride}
        </h2>
        <p className="font-sans text-sm tracking-widest uppercase mb-8 text-secondary/80">
          {DETAILS.dateStr}
        </p>
        <p className="font-serif text-lg mb-8">{DETAILS.hashtag}</p>
        <div className="w-16 h-px bg-secondary/30 mx-auto mb-8" />
        <p className="text-sm text-secondary/60">
          Made with love. <br />
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
