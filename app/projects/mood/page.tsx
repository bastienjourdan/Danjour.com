import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";
import { Lightbox } from "@/app/components/Lightbox";

export default function MoodPage() {
  const images = [
    "/Photographie/MOOD/MOOD_1.jpg",
    "/Photographie/MOOD/MOOD_10.JPG.jpg",
    "/Photographie/MOOD/MOOD_11.jpg",
    "/Photographie/MOOD/MOOD_12.jpg",
    "/Photographie/MOOD/MOOD_13.jpg",
    "/Photographie/MOOD/MOOD_14.jpg",
    "/Photographie/MOOD/MOOD_15.jpg",
    "/Photographie/MOOD/MOOD_16.jpg",
    "/Photographie/MOOD/MOOD_17.jpg",
    "/Photographie/MOOD/MOOD_18.jpg",
    "/Photographie/MOOD/MOOD_19.jpg",
    "/Photographie/MOOD/MOOD_2.jpg",
    "/Photographie/MOOD/MOOD_20.jpg",
    "/Photographie/MOOD/MOOD_21.jpg",
    "/Photographie/MOOD/MOOD_22.jpg",
    "/Photographie/MOOD/MOOD_23.jpg",
    "/Photographie/MOOD/MOOD_24.JPG.jpg",
    "/Photographie/MOOD/MOOD_25.JPG.jpg",
    "/Photographie/MOOD/MOOD_26.JPG.jpg",
    "/Photographie/MOOD/MOOD_27.jpg",
    "/Photographie/MOOD/MOOD_28.JPG.jpg",
    "/Photographie/MOOD/MOOD_29.JPG.jpg",
    "/Photographie/MOOD/MOOD_3.jpg",
    "/Photographie/MOOD/MOOD_30.JPG.jpg",
    "/Photographie/MOOD/MOOD_31.JPG.jpg",
    "/Photographie/MOOD/MOOD_32.JPG.jpg",
    "/Photographie/MOOD/MOOD_33.JPG.jpg",
    "/Photographie/MOOD/MOOD_34.JPG.jpg",
    "/Photographie/MOOD/MOOD_35.JPG.jpg",
    "/Photographie/MOOD/MOOD_36.JPG.jpg",
    "/Photographie/MOOD/MOOD_37.JPG.jpg",
    "/Photographie/MOOD/MOOD_38.JPG.jpg",
    "/Photographie/MOOD/MOOD_39.JPG.jpg",
    "/Photographie/MOOD/MOOD_4.jpg",
    "/Photographie/MOOD/MOOD_40.jpg",
    "/Photographie/MOOD/MOOD_41.jpg",
    "/Photographie/MOOD/MOOD_42.jpg",
    "/Photographie/MOOD/MOOD_43.jpg",
    "/Photographie/MOOD/MOOD_44.jpg",
    "/Photographie/MOOD/MOOD_45.jpg",
    "/Photographie/MOOD/MOOD_46.jpg",
    "/Photographie/MOOD/MOOD_47.jpg",
    "/Photographie/MOOD/MOOD_48.JPG.jpg",
    "/Photographie/MOOD/MOOD_49.jpg",
    "/Photographie/MOOD/MOOD_5.jpg",
    "/Photographie/MOOD/MOOD_50.jpg",
    "/Photographie/MOOD/MOOD_51.jpg",
    "/Photographie/MOOD/MOOD_6.jpg",
    "/Photographie/MOOD/MOOD_7.jpg",
    "/Photographie/MOOD/MOOD_8.jpg",
    "/Photographie/MOOD/MOOD_9.jpg",
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
          Mood
        </h1>
        <p className="text-sm text-gray-400 mb-8">Photographie</p>
      </GridWrapper>
      <Lightbox images={images} />
    </div>
  );
}
