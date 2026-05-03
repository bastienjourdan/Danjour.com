import { Lightbox } from "@/app/components/Lightbox";
import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";

export default function AstronautsPage() {
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
          Astronauts
        </h1>
        <p className="text-sm text-gray-400 mb-8">Branding, Logo — Projet personnel</p>
      </GridWrapper>

      <GridWrapper>
        <div className="flex flex-col lg:flex-row gap-16 py-8">
          <div className="lg:w-1/3">
            <p className="text-sm font-medium text-gray-400 mb-1">Client</p>
            <p className="text-base text-text-primary mb-4">Projet personnel</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Services</p>
            <p className="text-base text-text-primary">Branding, Logo</p>
          </div>
          <div className="lg:w-2/3">
            <p className="text-base leading-7 text-text-secondary">
              Astronauts est un projet de logo pour un club de football américain fictif. Inspiré par l&apos;esprit d&apos;exploration des années 70, le design incarne la passion et l&apos;unité. Préparez-vous à vous lancer dans une nouvelle victoire avec Astronauts — où le triomphe est la mission.
            </p>
          </div>
        </div>
      </GridWrapper>

      
      <Lightbox images={[
    "/projects/ASTRONAUTES/ASTRONAUTES_1.webp",
    "/projects/ASTRONAUTES/ASTRONAUTES_2.webp",
    "/projects/ASTRONAUTES/ASTRONAUTES_3.webp",
  ]} />

    </div>
  );
}