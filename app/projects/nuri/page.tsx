import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";
import { Lightbox } from "@/app/components/Lightbox";

export default function NuriPage() {
  const images = [
    "/Nuri/Nuri_1_2019.webp",
    "/Nuri/compo-5-2.jpg",
    "/Nuri/Nuri_2_2019.webp",
    "/Nuri/Nuri_3_2019.webp",
    "/Nuri/Nuri_4_2019.webp",
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
          Nuri
        </h1>
        <p className="text-sm text-gray-400 mb-8">Direction Artistique, Photographie</p>
      </GridWrapper>
      <GridWrapper>
        <div className="flex flex-col lg:flex-row gap-16 py-8">
          <div className="lg:w-1/3">
            <p className="text-sm font-medium text-gray-400 mb-1">Client</p>
            <p className="text-base text-text-primary mb-4">Studio Wolfgang</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Services</p>
            <p className="text-base text-text-primary mb-4">Direction Artistique, Photographie</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Photographe</p>
            <p className="text-base text-text-primary">Franklin Belingard</p>
          </div>
          <div className="lg:w-2/3">
            
          </div>
        </div>
      </GridWrapper>
      <Lightbox images={images} />
    </div>
  );
}
