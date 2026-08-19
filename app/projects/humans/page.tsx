import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";
import { Lightbox } from "@/app/components/Lightbox";

export default function HumansPage() {
  const images = [
    "/Photographie/HUMANS/DSC00533.jpg",
    "/Photographie/HUMANS/HUMANS_1.jpg",
    "/Photographie/HUMANS/HUMANS_10.JPG.jpg",
    "/Photographie/HUMANS/HUMANS_11.jpg",
    "/Photographie/HUMANS/HUMANS_12.JPG.jpg",
    "/Photographie/HUMANS/HUMANS_13.jpg",
    "/Photographie/HUMANS/HUMANS_14.jpg",
    "/Photographie/HUMANS/HUMANS_15.JPG.jpg",
    "/Photographie/HUMANS/HUMANS_16.JPG.jpg",
    "/Photographie/HUMANS/HUMANS_17.JPG.jpg",
    "/Photographie/HUMANS/HUMANS_18.jpg",
    "/Photographie/HUMANS/HUMANS_19.jpg",
    "/Photographie/HUMANS/HUMANS_2.jpg",
    "/Photographie/HUMANS/HUMANS_20.JPG.jpg",
    "/Photographie/HUMANS/HUMANS_21.JPG.jpg",
    "/Photographie/HUMANS/HUMANS_22.jpg",
    "/Photographie/HUMANS/HUMANS_23.jpg",
    "/Photographie/HUMANS/HUMANS_24.jpg",
    "/Photographie/HUMANS/HUMANS_25.jpg",
    "/Photographie/HUMANS/HUMANS_26.jpg",
    "/Photographie/HUMANS/HUMANS_27.JPG.jpg",
    "/Photographie/HUMANS/HUMANS_28.jpg",
    "/Photographie/HUMANS/HUMANS_29.jpg",
    "/Photographie/HUMANS/HUMANS_3.JPG.jpg",
    "/Photographie/HUMANS/HUMANS_4.JPG.jpg",
    "/Photographie/HUMANS/HUMANS_5.jpg",
    "/Photographie/HUMANS/HUMANS_6.jpg",
    "/Photographie/HUMANS/HUMANS_7.JPG.jpg",
    "/Photographie/HUMANS/HUMANS_8.jpg",
    "/Photographie/HUMANS/HUMANS_9.JPG.jpg",
  ];

  return (
    <div className="pb-24">
      <GridWrapper>
        <div className="pt-12 pb-4">
          <Link href="/projects/photographie" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
            Photographie
          </Link>
        </div>
      </GridWrapper>
      <GridWrapper>
        <h1 className="text-5xl font-medium leading-tight tracking-tighter text-text-primary mb-2">
          Humans
        </h1>
        <p className="text-sm text-gray-400 mb-8">Photographie</p>
      </GridWrapper>
      <Lightbox images={images} />
    </div>
  );
}
