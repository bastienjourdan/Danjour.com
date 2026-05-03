import { Lightbox } from "@/app/components/Lightbox";
import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";

export default function CoolShoePage() {
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
          Cool Shoe
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
              La marque Cool Shoe, emblématique des années 80 dans le monde des sports de glisse, fait peau neuve en proposant une nouvelle gamme de produits aux couleurs pastel, alliant nostalgie et modernité. En ciblant un public plus large, Cool Shoe se positionne à nouveau comme un accessoire incontournable. Ce projet fictif fait partie du challenge Rebranding It, visant à créer de la visibilité en redessinant des marques emblématiques.
            </p>
          </div>
        </div>
      </GridWrapper>

      
      <Lightbox images={[
    "/projects/COOL/COOL_1.webp",
    "/projects/COOL/COOL_2.webp",
    "/projects/COOL/COOL_3.webp",
    "/projects/COOL/COOL_4.webp",
    "/projects/COOL/COOL_5.webp",
    "/projects/COOL/COOL_6.webp",
    "/projects/COOL/COOL_7.webp",
    "/projects/COOL/COOL_8.webp",
    "/projects/COOL/COOL_9.webp",
    "/projects/COOL/COOL_10.webp",
    "/projects/COOL/COOL_11.webp",
    "/projects/COOL/COOL_12.webp",
  ]} />

    </div>
  );
}