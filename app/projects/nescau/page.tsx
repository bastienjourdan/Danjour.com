import { Lightbox } from "@/app/components/Lightbox";
import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";

export default function NescauPage() {
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
          Nescau Brésil
        </h1>
        <p className="text-sm text-gray-400 mb-8">Branding, Packaging — IED Rio de Janeiro</p>
      </GridWrapper>

      <GridWrapper>
        <div className="flex flex-col lg:flex-row gap-16 py-8">
          <div className="lg:w-1/3">
            <p className="text-sm font-medium text-gray-400 mb-1">Client</p>
            <p className="text-base text-text-primary mb-4">Nestlé Brazil</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Partenaire</p>
            <p className="text-base text-text-primary mb-4">IED Rio de Janeiro</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Services</p>
            <p className="text-base text-text-primary">Branding, Packaging</p>
          </div>
          <div className="lg:w-2/3">
            <p className="text-base leading-7 text-text-secondary">
              Le projet de refonte de l'emballage de Nescau Brésil, réalisé en partenariat avec IED Rio de Janeiro, vise à donner un nouveau souffle à l'identité visuelle de Nescau tout en explorant des idées novatrices. L'objectif est de renforcer l'attrait de Nescau sur le marché brésilien tout en soulignant l'engagement continu en faveur de la qualité et de la durabilité.
            </p>
          </div>
        </div>
      </GridWrapper>

      
      <Lightbox images={[
    "/projects/nescau/nescau_1.webp",
    "/projects/nescau/nescau_2.webp",
  ]} />

    </div>
  );
}