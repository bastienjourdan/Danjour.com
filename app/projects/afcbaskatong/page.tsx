import { Lightbox } from "@/app/components/Lightbox";
import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";

export default function AFCBaskatongPage() {
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
          AFC Baskatong
        </h1>
        <p className="text-sm text-gray-400 mb-8">Branding, Website — Agence Constella</p>
      </GridWrapper>

      <GridWrapper>
        <div className="flex flex-col lg:flex-row gap-16 py-8">
          <div className="lg:w-1/3">
            <p className="text-sm font-medium text-gray-400 mb-1">Client</p>
            <p className="text-base text-text-primary mb-4">AFC Baskatong</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Agence</p>
            <p className="text-base text-text-primary mb-4">Constella</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Services</p>
            <p className="text-base text-text-primary mb-4">Branding, Website</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Site web</p>
            <a href="https://afcbaskatong.com/" target="_blank" className="text-base text-indigo-600 hover:underline">afcbaskatong.com</a>
          </div>
          <div className="lg:w-2/3">
            <p className="text-base leading-7 text-text-secondary">
              La pourvoirie AFC Baskatong, nichée au cœur de la nature québécoise, modernise son image tout en préservant son essence et son histoire. Ce projet comprend la refonte de son site web et la création d&apos;un nouveau logo, harmonisant tradition et modernité afin de demeurer une destination de choix pour les amateurs de plein air et d&apos;aventure.
            </p>
          </div>
        </div>
      </GridWrapper>

      
      <Lightbox images={[
    "/projects/AFCBaskatong/AFCBaskatong_1.jpg",
    "/projects/AFCBaskatong/AFCBaskatong_2.jpg",
    "/projects/AFCBaskatong/AFCBaskatong_3.jpg",
    "/projects/AFCBaskatong/AFCBaskatong_4.jpg",
    "/projects/AFCBaskatong/AFCBaskatong_5.jpg",
    "/projects/AFCBaskatong/AFCBaskatong_6.jpg",
  ]} />

    </div>
  );
}