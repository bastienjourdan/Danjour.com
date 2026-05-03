"use client";

import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";
import { useState, useEffect } from "react";

const images = [
  "Fourre-Tout_1.jpg", "Fourre-Tout_2.jpg", "Fourre-Tout_3.png",
  "Fourre-Tout_4.jpg", "Fourre-Tout_5.jpg", "Fourre-Tout_6.jpg",
  "Fourre-Tout_7.jpg", "Fourre-Tout_8.jpg", "Fourre-Tout_9.jpg",
  "Fourre-Tout_10.jpg", "Fourre-Tout_11.jpg", "Fourre-Tout_12.jpg",
  "Fourre-Tout_13.jpg", "Fourre-Tout_14.jpg", "Fourre-Tout_15.jpg",
  "Fourre-Tout_16.png", "Fourre-Tout_17.png", "Fourre-Tout_18.png",
  "Fourre-Tout_19.jpg", "Fourre-Tout_20.png", "Fourre-Tout_21.jpg",
  "Fourre-Tout_22.png", "Fourre-Tout_23.png", "Fourre-Tout_24.jpg",
  "Fourre-Tout_25.png", "Fourre-Tout_26.jpg", "Fourre-Tout_27.jpg",
  "Fourre-Tout_28.jpg", "Fourre-Tout_29.jpg", "Fourre-Tout_30.jpg",
  "Fourre-Tout_31.jpg", "Fourre-Tout_32.jpg", "Fourre-Tout_33.jpeg",
  "Fourre-Tout_34.jpeg", "Fourre-Tout_35.jpeg", "Fourre-Tout_36.jpeg",
  "Fourre-Tout_37.jpeg", "Fourre-Tout_38.png", "Fourre-Tout_39.jpg",
  "Fourre-Tout_40.jpg", "Fourre-Tout_41.jpg", "Fourre-Tout_42.jpg",
  "Fourre-Tout_43.jpg", "Fourre-Tout_44.jpg", "Fourre-Tout_45.jpg",
  "Fourre-Tout_46.jpg", "Fourre-Tout_47.jpg", "Fourre-Tout_48.jpeg",
  "Fourre-Tout_49.JPG.jpg",
].map(f => `/projects/Fourre-Tout/${f}`);

export default function FourreToutPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const close = () => setSelectedIndex(null);
  const prev = () => setSelectedIndex((i) => (i! > 0 ? i! - 1 : images.length - 1));
  const next = () => setSelectedIndex((i) => (i! < images.length - 1 ? i! + 1 : 0));

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <div className="pb-24">

      <GridWrapper>
        <div className="pt-12 pb-4">
          <Link href="/projects" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
            ← Projets
          </Link>
        </div>
      </GridWrapper>

      <GridWrapper>
        <h1 className="text-5xl font-medium leading-tight tracking-tighter text-text-primary mb-2">
          Fourre-Tout
        </h1>
        <p className="text-sm text-gray-400 mb-8">Idees brutes, concepts sans filtre</p>
      </GridWrapper>

      <GridWrapper>
        <div className="flex flex-col lg:flex-row gap-16 py-8">
          <div className="lg:w-1/3"></div>
          <div className="lg:w-2/3">
            <p className="text-base leading-7 text-text-secondary">
              Fourre-tout, c&apos;est le remue-meninges pour differents projets, influence par l&apos;enorme quantite de medias et d&apos;informations qui nous entourent. Fourre-tout se compose de concepts regurgites ou d&apos;idees non acceptees pour de nouveaux designs.
            </p>
          </div>
        </div>
      </GridWrapper>

      <GridWrapper>
        <div className="columns-2 gap-3 md:columns-3 lg:columns-4">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Fourre-Tout ${i + 1}`}
              className="w-full rounded-xl object-cover mb-3 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedIndex(i)}
            />
          ))}
        </div>
      </GridWrapper>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          <button className="absolute top-4 right-4 text-white text-4xl font-light hover:opacity-70" onClick={close}>×</button>
          <button className="absolute left-4 text-white text-4xl font-light hover:opacity-70 px-4 py-2" onClick={(e) => { e.stopPropagation(); prev(); }}>‹</button>
          <img
            src={images[selectedIndex]}
            alt={`Fourre-Tout ${selectedIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="absolute right-4 text-white text-4xl font-light hover:opacity-70 px-4 py-2" onClick={(e) => { e.stopPropagation(); next(); }}>›</button>
          <p className="absolute bottom-4 text-white text-sm opacity-50">{selectedIndex + 1} / {images.length}</p>
        </div>
      )}

    </div>
  );
}