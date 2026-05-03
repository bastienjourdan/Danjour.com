import { Lightbox } from "@/app/components/Lightbox";
import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";

export default function KanawataPage() {
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
          Kanawata Lodge
        </h1>
        <p className="text-sm text-gray-400 mb-8">Branding, Website — Agence Constella</p>
      </GridWrapper>


      <GridWrapper>
        <div className="flex flex-col lg:flex-row gap-16 py-8">
          <div className="lg:w-1/3">
            <p className="text-sm font-medium text-gray-400 mb-1">Client</p>
            <p className="text-base text-text-primary mb-4">Kanawata Lodge</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Agence</p>
            <p className="text-base text-text-primary mb-4">Constella</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Services</p>
            <p className="text-base text-text-primary mb-4">Branding, Website</p>
<p className="text-sm font-medium text-gray-400 mb-1">Site web</p>
<a href="https://kanawata.com/" target="_blank" className="text-base text-indigo-600 hover:underline">kanawata.com</a>
          </div>
          <div className="lg:w-2/3">
            <p className="text-base leading-7 text-text-secondary">
              Refonte de l'identité visuelle du Kanawata Lodge — moderniser la marque tout en préservant l'essence du lieu et son grand héron emblématique. Couleurs naturelles, logo et site web ciblant les familles québécoises, groupes européens et clientèle corporative. Le projet vise à véhiculer des sentiments de rareté, d'intimité, de chaleur et de qualité.
            </p>
          </div>
        </div>
      </GridWrapper>

      
      <Lightbox images={[
    "/projects/Kanawata/kanawata_2.jpg",
    "/projects/Kanawata/kanawata_3.jpg",
    "/projects/Kanawata/kanawata_4.jpg",
    "/projects/Kanawata/kanawata_5.jpg",
    "/projects/Kanawata/kanawata_6.jpg",
    "/projects/Kanawata/kanawata_7.jpg",
    "/projects/Kanawata/kanawata_8.jpg",
    "/projects/Kanawata/kanawata_9.jpg",
  ]} />

    </div>
  );
}