import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";
import { Lightbox } from "@/app/components/Lightbox";

export default function HermesPage() {
  const images = [
    "/Essential Homme Special Hermes/ESSENTIAL_1.webp",
    "/Essential Homme Special Hermes/ESSENTIAL_2.webp",
    "/Essential Homme Special Hermes/ESSENTIAL_3.webp",
    "/Essential Homme Special Hermes/ESSENTIAL_4.webp",
    "/Essential Homme Special Hermes/ESSENTIAL_5.webp",
    "/Essential Homme Special Hermes/ESSENTIAL_6.webp",
  ];

  return (
    <div className="pb-24">
      <GridWrapper>
        <div className="pt-12 pb-4">
          <Link href="/projects/direction-artistique" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
            Direction Artistique
          </Link>
        </div>
      </GridWrapper>
      <GridWrapper>
        <h1 className="text-5xl font-medium leading-tight tracking-tighter text-text-primary mb-2">
          Essential Homme x Hermes
        </h1>
        <p className="text-sm text-gray-400 mb-8">Direction Artistique, Photographie</p>
      </GridWrapper>
      <GridWrapper>
        <div className="flex flex-col lg:flex-row gap-16 py-8">
          <div className="lg:w-1/3">
            <p className="text-sm font-medium text-gray-400 mb-1">Client</p>
            <p className="text-base text-text-primary mb-4">Essential Homme x Hermes</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Services</p>
            <p className="text-base text-text-primary mb-4">Direction Artistique, Photographie</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Photographe</p>
            <p className="text-base text-text-primary">Franklin Belingard</p>
          </div>
          <div className="lg:w-2/3">
            <p className="text-base leading-7 text-text-secondary">
              Direction artistique pour un editorial Essential Homme en collaboration avec Hermes.
            </p>
          </div>
        </div>
      </GridWrapper>
      <Lightbox images={images} />
    </div>
  );
}
