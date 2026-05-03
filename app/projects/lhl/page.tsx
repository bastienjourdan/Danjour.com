import { Lightbox } from "@/app/components/Lightbox";
import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";

export default function LHLPage() {
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
          Location Haute-Laurentides
        </h1>
        <p className="text-sm text-gray-400 mb-8">Website — Agence Constella</p>
      </GridWrapper>

      <GridWrapper>
        <div className="flex flex-col lg:flex-row gap-16 py-8">
          <div className="lg:w-1/3">
            <p className="text-sm font-medium text-gray-400 mb-1">Client</p>
            <p className="text-base text-text-primary mb-4">Location Haute-Laurentides</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Agence</p>
            <p className="text-base text-text-primary mb-4">Constella</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Services</p>
            <p className="text-base text-text-primary">Website</p>
          </div>
          <div className="lg:w-2/3">
            <p className="text-base leading-7 text-text-secondary">
              Location Haute-Laurentides renouvelle son site web pour offrir une navigation intuitive et simplifier la présentation de ses produits et services.
            </p>
          </div>
        </div>
      </GridWrapper>

      
      <Lightbox images={[
    "/projects/LHL/LHL_1.webp",
    "/projects/LHL/LHL_2.webp",
  ]} />

    </div>
  );
}