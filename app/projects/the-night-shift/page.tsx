import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";
import { Lightbox } from "@/app/components/Lightbox";

export default function TheNightShiftPage() {
  const images = [
    "/Photographie/The Night Shift/The_Night_Shift_1.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_10.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_11.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_12.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_13.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_14.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_15.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_16.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_17.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_18.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_19.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_2.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_20.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_21.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_22.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_23.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_24.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_25.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_26.JPG.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_27.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_28.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_29.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_3.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_30.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_4.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_5.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_6.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_7.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_8.jpg",
    "/Photographie/The Night Shift/The_Night_Shift_9.jpg",
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
          The Night Shift
        </h1>
        <p className="text-sm text-gray-400 mb-8">Photographie</p>
      </GridWrapper>
      <Lightbox images={images} />
    </div>
  );
}
