import { Lightbox } from "@/app/components/Lightbox";
import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";

export default function ArcticMaxPage() {
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
          Arcticmax
        </h1>
        <p className="text-sm text-gray-400 mb-8">Branding, Packaging — Lamour Co.</p>
      </GridWrapper>

      <GridWrapper>
        <div className="flex flex-col lg:flex-row gap-16 py-8">
          <div className="lg:w-1/3">
            <p className="text-sm font-medium text-gray-400 mb-1">Client</p>
            <p className="text-base text-text-primary mb-4">Lamour Co.</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Services</p>
            <p className="text-base text-text-primary">Branding, Packaging</p>
          </div>
          <div className="lg:w-2/3">
            <p className="text-base leading-7 text-text-secondary">
              Arcticmax est une marque spécialisée dans les chaussettes d'extérieur. Conscients de la demande croissante de matériaux naturels et durables, nous avons entrepris un effort de rebranding pour nous aligner sur ces principes. Nous avons raffiné notre identité visuelle pour incarner l'essence d'Arcticmax, symbolisée par ce petit renard.
            </p>
          </div>
        </div>
      </GridWrapper>

      
      <Lightbox images={[
    "/projects/ArcticMax/ArcticMax_1.jpg",
    "/projects/ArcticMax/ArcticMax_2.jpg",
    "/projects/ArcticMax/ArcticMax_3.jpg",
  ]} />

    </div>
  );
}