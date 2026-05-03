import { Lightbox } from "@/app/components/Lightbox";
import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";

export default function FestivalDuGrosGrasPage() {
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
          Festival du Gros Gras
        </h1>
        <p className="text-sm text-gray-400 mb-8">Branding, Website — Agence Constella</p>
      </GridWrapper>

      <GridWrapper>
        <div className="flex flex-col lg:flex-row gap-16 py-8">
          <div className="lg:w-1/3">
            <p className="text-sm font-medium text-gray-400 mb-1">Client</p>
            <p className="text-base text-text-primary mb-4">Festival du Gros Gras</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Agence</p>
            <p className="text-base text-text-primary mb-4">Constella</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Services</p>
            <p className="text-base text-text-primary">Branding, Website</p>
          </div>
          <div className="lg:w-2/3">
            <p className="text-base leading-7 text-text-secondary">
              Refonte de l&apos;identité visuelle du Festival du Gros Gras — moderniser l&apos;image de l&apos;événement tout en préservant son essence punk rock. Inspiré du symbole emblématique des cornes, cher à la culture rock, et adoptant des textures brutes et audacieuses, le nouveau design reflète l&apos;énergie et l&apos;authenticité du festival. Logo et site web véhiculant des sentiments de rébellion, de convivialité et de passion musicale.
            </p>
          </div>
        </div>
      </GridWrapper>

      
      <Lightbox images={[
    "/projects/Festivaldugrosgras/Festivaldugrosgras_1.webp",
    "/projects/Festivaldugrosgras/Festivaldugrosgras_2.webp",
    "/projects/Festivaldugrosgras/Festivaldugrosgras_3.webp",
    "/projects/Festivaldugrosgras/Festivaldugrosgras_4.webp",
    "/projects/Festivaldugrosgras/Festivaldugrosgras_5.webp",
    "/projects/Festivaldugrosgras/Festivaldugrosgras_6.webp",
    "/projects/Festivaldugrosgras/Festivaldugrosgras_7.webp",
  ]} />

    </div>
  );
}