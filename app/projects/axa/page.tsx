import { Lightbox } from "@/app/components/Lightbox";
import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";

export default function AXAPage() {
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
          AXA France — Application Mobile
        </h1>
        <p className="text-sm text-gray-400 mb-8">UX/UI Design — Agence Haigo</p>
      </GridWrapper>

      <GridWrapper>
        <div className="flex flex-col lg:flex-row gap-16 py-8">
          <div className="lg:w-1/3">
            <p className="text-sm font-medium text-gray-400 mb-1">Client</p>
            <p className="text-base text-text-primary mb-4">AXA France</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Agence</p>
            <p className="text-base text-text-primary mb-4">Haigo</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Services</p>
            <p className="text-base text-text-primary mb-4">UX/UI Design</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Site web</p>
            <a href="https://design.axa.com/mobile-guidelines/welcome" target="_blank" className="text-base text-indigo-600 hover:underline">design.axa.com</a>
          </div>
          <div className="lg:w-2/3">
            <p className="text-base leading-7 text-text-secondary mb-6">
              Conception des directives UI pour l'application mobile AXA — créer des applications mobiles belles et fonctionnelles, portant l'identité visuelle d'AXA.
            </p>
            <p className="text-base leading-7 text-text-secondary mb-6">
              Les directives sont basées sur une grille de 8 pixels, favorisant la cohérence et la facilité d'utilisation grâce à sa divisibilité.
            </p>
            <p className="text-base leading-7 text-text-secondary">
              Sur cette plateforme, vous trouverez un aperçu rapide de chaque élément de design ainsi que les liens de téléchargement et références. Les éléments sont organisés en deux groupes — Constantes et Composants — afin de faciliter la navigation et de retrouver rapidement l'élément recherché.
            </p>
          </div>
        </div>
      </GridWrapper>

      
      <Lightbox images={[
    "/projects/AXA/AXA_1.webp",
    "/projects/AXA/AXA_2.webp",
    "/projects/AXA/AXA_3.webp",
    "/projects/AXA/AXA_4.webp",
    "/projects/AXA/AXA_5.webp",
    "/projects/AXA/AXA_6.webp",
    "/projects/AXA/AXA_7.webp",
  ]} />

    </div>
  );
}