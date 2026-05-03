import { Lightbox } from "@/app/components/Lightbox";
import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";

export default function DistinctionDurablePage() {
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
          Distinction Durable
        </h1>
        <p className="text-sm text-gray-400 mb-8">Branding — La Maison de l'Entrepreneur</p>
      </GridWrapper>

      <GridWrapper>
        <div className="flex flex-col lg:flex-row gap-16 py-8">
          <div className="lg:w-1/3">
            <p className="text-sm font-medium text-gray-400 mb-1">Client</p>
            <p className="text-base text-text-primary mb-4">La Maison de l'Entrepreneur</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Services</p>
            <p className="text-base text-text-primary">Branding</p>
          </div>
          <div className="lg:w-2/3">
            <p className="text-base leading-7 text-text-secondary">
              Distinction Durable est une initiative développée par La Maison de l'Entrepreneur de Mont-Laurier, dédiée à soutenir les entreprises et organismes locaux dans leur démarche de développement durable. Cette cohorte permet de structurer des plans d'action durable et de réaliser des projets concrets en lien avec l'environnement.
            </p>
          </div>
        </div>
      </GridWrapper>

      
      <Lightbox images={[
    "/projects/DistinctionDurable/DistinctionDurable_1.webp",
    "/projects/DistinctionDurable/DistinctionDurable_2.webp",
    "/projects/DistinctionDurable/DistinctionDurable_3.webp",
    "/projects/DistinctionDurable/DistinctionDurable_4.webp",
    "/projects/DistinctionDurable/DistinctionDurable_5.webp",
    "/projects/DistinctionDurable/DistinctionDurable_6.webp",
  ]} />

    </div>
  );
}