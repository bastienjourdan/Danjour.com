import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";

const projects = [
  { title: "Humans", services: "Photographie", image: "/Photographie/HUMANS/HUMANS_1.jpg", url: "/projects/humans" },
  { title: "Mood", services: "Photographie", image: "/Photographie/MOOD/MOOD_1.jpg", url: "/projects/mood" },
  { title: "The Night Shift", services: "Photographie", image: "/Photographie/The Night Shift/The_Night_Shift_1.jpg", url: "/projects/the-night-shift" },
];

export default function PhotographiePage() {
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
          Photographie
        </h1>
        
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