import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";
import { Lightbox } from "@/app/components/Lightbox";

export default function JonsenIslandPage() {
  const images = [
    "/JONSEN ISLAND/JONSEN_1.webp",
    "/JONSEN ISLAND/JONSEN_2.webp",
    "/JONSEN ISLAND/JONSEN_3.webp",
    "/JONSEN ISLAND/JONSEN_4.webp",
    "/JONSEN ISLAND/JONSEN_5.webp",
    "/JONSEN ISLAND/JONSEN_6.webp",
    "/JONSEN ISLAND/JONSEN_7.webp",
  ];

  return (
    <div className="pb-24">
      <GridWrapper>
        <div className="pt-12 pb-4">
          <Link href="/projects/direction-artistique" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
            Direction Artistique
          </Link>
        </div>
      </GridWrapper>
      <GridWrapper>
        <h1 className="text-5xl font-medium leading-tight tracking-tighter text-text-primary mb-2">
          Jonsen Island
        </h1>
        <p className="text-sm text-gray-400 mb-8">Direction Artistique, Photographie, Branding</p>
      </GridWrapper>
      <GridWrapper>
        <div className="flex flex-col lg:flex-row gap-16 py-8">
          <div className="lg:w-1/3">
            <p className="text-sm font-medium text-gray-400 mb-1">Client</p>
            <p className="text-base text-text-primary mb-4">Jonsen Island</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Services</p>
            <p className="text-base text-text-primary mb-4">Direction Artistique, Photographie, Branding</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Photographe</p>
            <p className="text-base text-text-primary">Thomas Cantoni</p>
          </div>
          <div className="lg:w-2/3">
            <p className="text-base leading-7 text-text-secondary">
              Trois ans de collaboration avec la marque de surf Jonsen Island — direction artistique, photographie, branding et scenographie pour les collections.
            </p>
          </div>
        </div>
      </GridWrapper>
      <Lightbox images={images} />
    </div>
  );
}
