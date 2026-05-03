import { Lightbox } from "@/app/components/Lightbox";
import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";

export default function LAutreLaurentidesPage() {
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
          L&apos;Autre Laurentides — Découvrir
        </h1>
        <p className="text-sm text-gray-400 mb-8">Website, Logo — Agence Constella</p>
      </GridWrapper>

      <GridWrapper>
        <div className="flex flex-col lg:flex-row gap-16 py-8">
          <div className="lg:w-1/3">
            <p className="text-sm font-medium text-gray-400 mb-1">Client</p>
            <p className="text-base text-text-primary mb-4">L&apos;Autre Laurentides</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Agence</p>
            <p className="text-base text-text-primary mb-4">Constella</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Services</p>
            <p className="text-base text-text-primary">Website, Logo</p>
          </div>
          <div className="lg:w-2/3">
            <p className="text-base leading-7 text-text-secondary">
              L&apos;Autre Laurentides Découvrir lance une refonte de son site web pour aligner sa direction artistique avec L&apos;Autre Laurentides, assurant cohérence visuelle et une expérience immersive pour mettre en valeur la diversité et la beauté de la région.
            </p>
          </div>
        </div>
      </GridWrapper>

      
      <Lightbox images={[
    "/projects/LAutreLaurentidesDecouvrir/LAutreLaurentidesDecouvrir_1.jpg",
    "/projects/LAutreLaurentidesDecouvrir/LAutreLaurentidesDecouvrir_2.jpg",
    "/projects/LAutreLaurentidesDecouvrir/LAutreLaurentidesDecouvrir_3.jpg",
    "/projects/LAutreLaurentidesDecouvrir/LAutreLaurentidesDecouvrir_4.jpg",
  ]} />

    </div>
  );
}