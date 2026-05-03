import { Lightbox } from "@/app/components/Lightbox";
import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";

export default function KangolPage() {
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
          Kangol
        </h1>
        <p className="text-sm text-gray-400 mb-8">Art Direction, Branding — Projet personnel</p>
      </GridWrapper>

      <GridWrapper>
        <div className="flex flex-col lg:flex-row gap-16 py-8">
          <div className="lg:w-1/3">
            <p className="text-sm font-medium text-gray-400 mb-1">Client</p>
            <p className="text-base text-text-primary mb-4">Projet personnel</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Services</p>
            <p className="text-base text-text-primary">Art Direction, Branding</p>
          </div>
          <div className="lg:w-2/3">
            <p className="text-base leading-7 text-text-secondary">
              La marque Kangol, icone du hip-hop des annees 80, se reinvente avec une nouvelle gamme aux motifs et couleurs vives, melant nostalgie et modernite. Ce projet fictif, pour le challenge Rebranding It, modernise l'image de Kangol tout en honorant son riche heritage, visant une nouvelle generation en quete de style et d'originalite.
            </p>
          </div>
        </div>
      </GridWrapper>

      
      <Lightbox images={[
    "/projects/Kangol/Kangol_1.webp",
    "/projects/Kangol/Kangol_2.webp",
    "/projects/Kangol/Kangol_3.webp",
    "/projects/Kangol/Kangol_4.webp",
    "/projects/Kangol/Kangol_5.webp",
    "/projects/Kangol/Kangol_6.webp",
    "/projects/Kangol/Kangol_7.webp",
    "/projects/Kangol/Kangol_8.webp",
    "/projects/Kangol/Kangol_9.webp",
  ]} />

    </div>
  );
}