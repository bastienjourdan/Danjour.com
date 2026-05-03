"use client";

import { useState, useEffect } from "react";

export function Lightbox({ images }: { images: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openAt = (i: number) => setSelectedIndex(i);
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
    <>
      <div className="w-full mt-3">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Image ${i + 1}`}
            className="w-full object-cover mb-3 cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openAt(i)}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-light hover:opacity-70"
            onClick={close}
          >
            ×
          </button>

          <button
            className="absolute left-4 text-white text-4xl font-light hover:opacity-70 px-4 py-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            ‹
          </button>

          <img
            src={images[selectedIndex]}
            alt={`Image ${selectedIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 text-white text-4xl font-light hover:opacity-70 px-4 py-2"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            ›
          </button>

          <p className="absolute bottom-4 text-white text-sm opacity-50">
            {selectedIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}