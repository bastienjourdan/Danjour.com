import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";

const projects = [
  { title: "Jonsen Island", services: "DA, Photographie, Branding", image: "/JONSEN ISLAND/JONSEN_4.webp", url: "/projects/jonsen-island" },
  { title: "Essential Homme x Hermes", services: "DA, Photographie", image: "/Essential Homme Special Hermes/ESSENTIAL_2.webp", url: "/projects/hermes" },
  { title: "Emoi Emoi", services: "DA, Photographie", image: "/Émoi Émoi/Emoi-Emoi_3.webp", url: "/projects/emoi-emoi" },
  { title: "Nuri", services: "DA, Photographie", image: "/Nuri/Nuri_1_2019.webp", url: "/projects/nuri" },
];

export default function DirectionArtistiquePage() {
  return (
    <div className="pb-24">
      <GridWrapper>
        <div className="pt-12 pb-4">
          <Link href="/projects" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
            Projets
          </Link>
        </div>
      </GridWrapper>
      <GridWrapper>
        <h1 className="text-5xl font-medium leading-tight tracking-tighter text-text-primary mb-2">
          Direction Artistique
        </h1>
        <p className="text-sm text-gray-400 mb-8">Mettre en scène, raconter, diriger.</p>
      </GridWrapper>
      <GridWrapper>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-8">
          {projects.map((project) => (
            <a key={project.title} href={project.url} className="group block overflow-hidden rounded-xl bg-gray-50 transition-transform duration-300 hover:-translate-y-1">
              <div className="aspect-square w-full overflow-hidden bg-gray-100">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h2 className="text-base font-medium text-text-primary">{project.title}</h2>
                <p className="mt-1 text-sm text-gray-400">{project.services}</p>
              </div>
            </a>
          ))}
        </div>
      </GridWrapper>
    </div>
  );
}