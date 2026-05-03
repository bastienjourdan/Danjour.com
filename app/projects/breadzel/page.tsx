import { Lightbox } from "@/app/components/Lightbox";
import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";

export default function BreadzelPage() {
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
          Breadzel
        </h1>
        <p className="text-sm text-gray-400 mb-8">Branding, Webdesign — Projet personnel</p>
      </GridWrapper>

      <GridWrapper>
        <div className="flex flex-col lg:flex-row gap-16 py-8">
          <div className="lg:w-1/3">
            <p className="text-sm font-medium text-gray-400 mb-1">Client</p>
            <p className="text-base text-text-primary mb-4">Projet personnel</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Services</p>
            <p className="text-base text-text-primary">Branding, Webdesign</p>
          </div>
          <div className="lg:w-2/3">
            <p className="text-base leading-7 text-text-secondary">
              Breadzel révolutionne la commande de pain en mettant en relation les amateurs de pain frais avec leurs boulangeries préférées. Cette application conviviale permet des commandes personnalisées, un suivi en temps réel du processus de préparation et une livraison rapide. Avec Breadzel, chaque commande célèbre le goût authentique du pain artisanal, simplifié pour s&apos;intégrer parfaitement à votre style de vie moderne.
            </p>
          </div>
        </div>
      </GridWrapper>

      
      <Lightbox images={[
    "/projects/Breadzel/Breadzel_1.gif",
    "/projects/Breadzel/Breadzel_2.gif",
    "/projects/Breadzel/Breadzel_3.jpg",
    "/projects/Breadzel/Breadzel_4.jpg",
    "/projects/Breadzel/Breadzel_5.jpg",
    "/projects/Breadzel/Breadzel_6.jpg",
  ]} />

    </div>
  );
}