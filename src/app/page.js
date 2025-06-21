'use client'

import ArtistCard from "@/components/ArtistCard";
import Background from "@/components/Background";
import Button from "@/components/Button";
import { useEffect, useState } from "react";

export default function Home() {
  const [artists, setArtists] = useState([]);

  const rightArrow = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                     </svg>

  const downArrow = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

  useEffect(() => {
    import("@/data/artists.json").then((mod) => {
      setArtists(mod.default);
    });
  }, []);

  return (
    <main className="min-h-screen w-full">
      <section id="hero" className="h-screen flex flex-col justify-center gap-8">
        <Background />

        <div className="w-full flex flex-col gap-4 justify-center items-center px-5 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold ">Showcase Your Art, Seamlessly</h1>
          <p className="md:text-xl">
            Build your own stunning portfolio at <span className="font-semibold">helart.art/yourname</span> &ndash; fast, simple, and fully yours.
          </p>
        </div>
        <div className="flex justify-center items-center gap-5 rounded-md">
          <Button
            to={'#explore'}
            child={'Meet the Artists'}
            className={'border-foreground bg-transparent text-foreground hover:translate-y-1'}
            optIcon={downArrow}
          />
          <Button
            child={'Get Started'}
            className={'border-transparent bg-foreground text-background hover:bg-dark-foreground hover:translate-x-1'}
            optIcon={rightArrow}
          />
        </div>
      </section>

      <section id="explore" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            Featured Artists
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {artists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
