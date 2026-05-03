import { Lightbox } from "@/app/components/Lightbox";
import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";

export default function RoseDesVentsPage() {
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
          La Ferme Rose des Vents
        </h1>
        <p className="text-sm text-gray-400 mb-8">Website, Iconographie — Agence Constella</p>
      </GridWrapper>

      <GridWrapper>
        <div className="flex flex-col lg:flex-row gap-16 py-8">
          <div className="lg:w-1/3">
            <p className="text-sm font-medium text-gray-400 mb-1">Client</p>
            <p className="text-base text-text-primary mb-4">La Ferme Rose des Vents</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Agence</p>
            <p className="text-base text-text-primary mb-4">Constella</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Services</p>
            <p className="text-base text-text-primary mb-4">Website, Iconographie</p>
<p className="text-sm font-medium text-gray-400 mb-1">Site web</p>
<a href="https://fermerosedesvents.com/" target="_blank" className="text-base text-indigo-600 hover:underline">fermerosedesvents.com</a>
          </div>
          <div className="lg:w-2/3">
            <p className="text-base leading-7 text-text-secondary">
              La Ferme Rose des Vents, entreprise familiale de production de volaille dans les Hautes-Laurentides, soigne son image et la qualité de ses produits. Le site web vise à attirer une clientèle locale, sensible à l'environnement et à la qualité alimentaire. Il met en avant les valeurs familiales et l'échelle humaine de l'entreprise, tout en soulignant ses atouts, comme la livraison locale et les produits prêts à cuisiner.
            </p>
          </div>
        </div>
      </GridWrapper>

      
      <Lightbox images={[
    "/projects/rosedesvents/rosedesvents_1.webp",
    "/projects/rosedesvents/rosedesvents_2.webp",
  ]} />

    </div>
  );
}