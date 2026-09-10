import { GridWrapper } from "@/app/components/GridWrapper";

interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
}

const projects: Project[] = [
  { title: "Kanawata Lodge", description: "Branding, Website", image: "/projects/Kanawata/kanawata_2.jpg", url: "/projects/kanawata" },
  { title: "Cool Shoe", description: "Art Direction et Branding.", image: "/projects/Cool.webp", url: "/projects/cool" },
  { title: "AFC Baskatong", description: "Branding et Website.", image: "/projects/AFCBaskatong/AFCBaskatong_1.jpg", url: "/projects/afcbaskatong" },
  { title: "L'Autre Laurentides Decouvrir", description: "Website et Logo.", image: "/projects/Lautrelaurentide.webp", url: "/projects/lautrelaurentides" },
  { title: "Festival Le Gros Gras", description: "Branding et Website.", image: "/projects/Legrosgras.webp", url: "/projects/festivaldugrosgras" },
  { title: "Kangol", description: "Art Direction et Branding.", image: "/projects/Kangol.webp", url: "/projects/kangol" },
  { title: "AXA France", description: "UX/UI Design.", image: "/projects/AXA/AXA_1.webp", url: "/projects/axa" },
  { title: "Manipura Surf Board", description: "Branding et Illustration.", image: "/projects/Manipura.webp", url: "/projects/manipura" },
  { title: "Arcticmax", description: "Branding et Packaging.", image: "/projects/ArcticMax.webp", url: "/projects/arcticmax" },
  { title: "Lucas Guidi Photographie", description: "Branding et Logo.", image: "/projects/Lucas.webp", url: "/projects/lucas" },
  { title: "Breadzel", description: "Branding et Webdesign.", image: "/projects/Breadzel.webp", url: "/projects/breadzel" },
  { title: "Distinction Durable", description: "Branding.", image: "/projects/DD.webp", url: "/projects/distinctiondurable" },
  { title: "Real by Fake", description: "Logo, Branding et Webdesign.", image: "/projects/RBF_Site_Web.gif", url: "/projects/realbyfake" },
  { title: "La Ferme Rose des Vents", description: "Website et Iconographie.", image: "/projects/RDV.webp", url: "/projects/rosedesvents" },
  { title: "Nescau Brasil", description: "Branding et Packaging .", image: "/projects/Nescau.webp", url: "/projects/nescau" },
  { title: "Astronauts", description: "Branding et Logo.", image: "/projects/Astronauts.webp", url: "/projects/astronauts" },
  { title: "Location Haute Laurentides", description: "Website.", image: "/projects/LHL.webp", url: "/projects/lhl" },
  { title: "LOCO", description: "Branding, Website.", image: "/projects/LOCO/LOCO_1.webp", url: "/projects/loco" },
  { title: "À la cueillette", description: "Branding et Packaging ", image: "/projects/Àlacueillette.webp", url: "/projects/alacueillette" },
  { title: "Fourre-Tout", description: "Idées brutes, concepts sans filtre.", image: "/projects/Fourre-Tout/Fourre-Tout_1.jpg", url: "/projects/fourre-tout" },
];

export default function ProjectPage() {
  return (
    <div className="relative space-y-16 pb-24">
      <GridWrapper>
        <h1 className="mx-auto mt-16 max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
          Une selection de mes projets.
        </h1>
      </GridWrapper>
      <GridWrapper>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a href={project.url} key={project.title} className="overflow-hidden rounded-xl bg-gray-50 block">
              <div className="aspect-square w-full overflow-hidden bg-gray-100">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <h2 className="text-base font-medium text-text-primary">{project.title}</h2>
                <p className="mt-1 text-sm text-gray-400">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </GridWrapper>
    </div>
  );
}
