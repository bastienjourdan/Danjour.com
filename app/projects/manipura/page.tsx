import { Lightbox } from "@/app/components/Lightbox";
import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";

export default function ManipuraPage() {
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
          Manipura Surf Board
        </h1>
        <p className="text-sm text-gray-400 mb-8">Branding, Illustration</p>
      </GridWrapper>

      <GridWrapper>
        <div className="flex flex-col lg:flex-row gap-16 py-8">
          <div className="lg:w-1/3">
            <p className="text-sm font-medium text-gray-400 mb-1">Client</p>
            <p className="text-base text-text-primary mb-4">Manipura</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Services</p>
            <p className="text-base text-text-primary">Branding, Illustration</p>
          </div>
          <div className="lg:w-2/3">
            <p className="text-base leading-7 text-text-secondary">
              Dans le cadre de ma collaboration avec la marque de surf Manipura, j&apos;ai développé une série de visuels et d&apos;illustrations uniques pour leur ligne de vêtements.
            </p>
          </div>
        </div>
      </GridWrapper>

      
      <Lightbox images={[
    "/projects/manipura/Manipura_1.webp",
    "/projects/manipura/Manipura_2.webp",
    "/projects/manipura/Manipura_3.webp",
    "/projects/manipura/Manipura_4.webp",
    "/projects/manipura/Manipura_5.webp",
    "/projects/manipura/Manipura_6.webp",
    "/projects/manipura/Manipura_7.webp",
    "/projects/manipura/Manipura_8.webp",
    "/projects/manipura/Manipura_9.webp",
    "/projects/manipura/Manipura_10.webp",
    "/projects/manipura/Manipura_11.webp",
    "/projects/manipura/Manipura_12.webp",
  ]} />

    </div>
  );
}