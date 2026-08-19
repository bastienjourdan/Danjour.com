import { AnimatedProfilePicture } from "./components/AnimatedProfilePicture";
import { AnimatedText } from "./components/AnimatedText";
import { PhotoGallery } from "./components/PhotoGallery";
import { AnimatedMobilePhotos } from "./components/AnimatedMobilePhotos";
import { GridWrapper } from "./components/GridWrapper";
import { AboutMeBento } from "./components/AboutMeBento";
import { CalendarBento } from "./components/CalendarBento";
import Link from "next/link";

export default async function Home() {
  const PROFILE_DELAY = 0;
  const HEADING_DELAY = PROFILE_DELAY + 0.2;
  const PARAGRAPH_DELAY = HEADING_DELAY + 0.1;
  const PHOTOS_DELAY = PARAGRAPH_DELAY + 0.1;

  return (
    <section className="pb-24 pt-6">
      <AnimatedProfilePicture delay={PROFILE_DELAY} />
      <div className="mt-6 space-y-24 md:mt-0">

        <section>
          <div className="relative text-balance">
            <GridWrapper>
              <AnimatedText as="h1" delay={HEADING_DELAY} className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
                Bonjour, je suis Bastien. Bienvenue sur Studio Danjour.
              </AnimatedText>
            </GridWrapper>
            <GridWrapper>
              <div className="mt-0 text-center md:mt-0">
                <AnimatedText as="p" delay={PARAGRAPH_DELAY} className="leading-8 text-text-secondary">
                  Directeur artistique et designer multidisciplinaire entre Marseille et le Quebec. Je transforme les idees en identites visuelles qui ont quelque chose a dire.
                </AnimatedText>
                <div className="mt-4">
                  <Link href="/contact" className="inline-block rounded-full border border-gray-900 px-6 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
                    Demarrer un projet
                  </Link>
                </div>
              </div>
            </GridWrapper>
          </div>
          <div>
            <div className="relative hidden h-fit w-full items-center justify-center lg:flex">
              <PhotoGallery animationDelay={PHOTOS_DELAY} />
            </div>
            <div className="hidden"><AnimatedMobilePhotos delay={PHOTOS_DELAY} /></div>
          </div>
        </section>

        <section className="relative">
          <GridWrapper>
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="lg:w-1/3 lg:sticky lg:top-24">
                <p className="text-sm font-medium text-indigo-600 mb-0">Design</p>
                <h2 className="text-3xl font-medium leading-tight tracking-tighter text-text-primary mb-6">Branding, identite visuelle et design web.</h2>
                <p className="text-base leading-6 text-text-secondary mb-6">Chaque projet part d'un brief, d'une intention. Je construis des identites qui ont quelque chose a dire.</p>
                <Link href="/projects" className="inline-block rounded-full border border-gray-900 px-6 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">Voir les projets</Link>
              </div>
              <div className="lg:w-2/3 grid grid-cols-2 gap-3 md:grid-cols-3">
                <Link href="/projects/kanawata"><img src="/projects/Kanawata/kanawata_2.jpg" className="w-full rounded-xl object-cover aspect-square hover:opacity-90 transition-opacity" alt="Kanawata" /></Link>
                <Link href="/projects/cool"><img src="/projects/Cool.webp" className="w-full rounded-xl object-cover aspect-square hover:opacity-90 transition-opacity" alt="Cool Shoe" /></Link>
                <Link href="/projects/afcbaskatong"><img src="/projects/AFCBaskatong/AFCBaskatong_1.jpg" className="w-full rounded-xl object-cover aspect-square hover:opacity-90 transition-opacity" alt="AFC Baskatong" /></Link>
                <Link href="/projects/festivaldugrosgras"><img src="/projects/Legrosgras.webp" className="w-full rounded-xl object-cover aspect-square hover:opacity-90 transition-opacity" alt="Gros Gras" /></Link>
                <Link href="/projects/kangol"><img src="/projects/Kangol.webp" className="w-full rounded-xl object-cover aspect-square hover:opacity-90 transition-opacity" alt="Kangol" /></Link>
                <Link href="/projects/arcticmax"><img src="/projects/ArcticMax.webp" className="w-full rounded-xl object-cover aspect-square hover:opacity-90 transition-opacity" alt="Arcticmax" /></Link>
              </div>
            </div>
          </GridWrapper>
        </section>

        <section className="relative">
          <GridWrapper>
            <div className="flex flex-col lg:flex-row-reverse lg:items-start lg:justify-between gap-8">
              <div className="lg:w-1/3 lg:sticky lg:top-24">
                <p className="text-sm font-medium text-indigo-600 mb-0">Fourre-Tout</p>
                <h2 className="text-3xl font-medium leading-tight tracking-tighter text-text-primary mb-6">Idees brutes, concepts sans filtre.</h2>
                <p className="text-base leading-6 text-text-secondary mb-6">Fourre-tout, c'est le remue-meninges pour differents projets, influence par l'enorme quantite de medias et d'informations qui nous entourent.</p>
                <Link href="/projects/fourre-tout" className="inline-block rounded-full border border-gray-900 px-6 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">Voir le Fourre-Tout</Link>
              </div>
              <div className="lg:w-2/3 columns-2 gap-3 md:columns-3">
                <img src="/Fourre-Tout/Fourre-Tout_3.png" className="w-full rounded-xl object-cover mb-3" alt="FT 1" />
                <img src="/Fourre-Tout/Fourre-Tout_2.jpg" className="w-full rounded-xl object-cover mb-3" alt="FT 2" />
                <img src="/Fourre-Tout/Fourre-Tout_4.jpg" className="w-full rounded-xl object-cover mb-3" alt="FT 3" />
                <img src="/Fourre-Tout/Fourre-Tout_36.jpeg" className="w-full rounded-xl object-cover mb-3" alt="FT 4" />
                <img src="/Fourre-Tout/Fourre-Tout_33.jpeg" className="w-full rounded-xl object-cover mb-3" alt="FT 5" />
                <img src="/Fourre-Tout/Fourre-Tout_41.jpg" className="w-full rounded-xl object-cover mb-3" alt="FT 6" />
                <img src="/Fourre-Tout/Fourre-Tout_35.jpeg" className="w-full rounded-xl object-cover mb-3" alt="FT 7" />
              </div>
            </div>
          </GridWrapper>
        </section>

        <section className="relative">
          <GridWrapper>
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="lg:w-1/3 lg:sticky lg:top-24">
                <p className="text-sm font-medium text-indigo-600 mb-0">Direction Artistique</p>
                <h2 className="text-3xl font-medium leading-tight tracking-tighter text-text-primary mb-6">Mettre en scene, raconter, diriger.</h2>
                <p className="text-base leading-6 text-text-secondary mb-6">De la photographie de mode a la direction de collections, je traduis une vision en images avec le photographe, le styliste, l espace.</p>
                <a href="/projects/direction-artistique" className="inline-block rounded-full border border-gray-900 px-6 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">Voir la DA</a>
              </div>
              <div className="lg:w-2/3 grid grid-cols-2 gap-3">
                <img src="/DirectionArtistique/JONSEN_4.webp" className="w-full rounded-xl object-cover aspect-square" alt="DA 1" />
                <img src="/DirectionArtistique/Nuri_1_2019.webp" className="w-full rounded-xl object-cover aspect-square" alt="DA 2" />
                <img src="/DirectionArtistique/ESSENTIAL_2.webp" className="w-full rounded-xl object-cover aspect-square" alt="DA 3" />
                <img src="/DirectionArtistique/Emoi-Emoi_3.webp" className="w-full rounded-xl object-cover aspect-square" alt="DA 4" />
              </div>
            </div>
          </GridWrapper>
        </section>

        <section className="relative">
          <GridWrapper>
            <div className="flex flex-col lg:flex-row-reverse lg:items-start lg:justify-between gap-8">
              <div className="lg:w-1/3 lg:sticky lg:top-24">
                <p className="text-sm font-medium text-indigo-600 mb-0">Photographie</p>
                <h2 className="text-3xl font-medium leading-tight tracking-tighter text-text-primary mb-6">Je photographie aussi.</h2>
                <a href="/projects/photographie" className="inline-block rounded-full border border-gray-900 px-6 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">Voir la Photographie</a>
              </div>
              <div className="lg:w-2/3 grid grid-cols-2 gap-3 md:grid-cols-3">
                <img src="/Photographie/HUMANS/HUMANS_24.jpg" className="w-full rounded-xl object-cover aspect-square" alt="Humans" />
                <img src="/Photographie/MOOD/MOOD_13.jpg" className="w-full rounded-xl object-cover aspect-square" alt="Mood" />
                <img src="/Photographie/The Night Shift/The_Night_Shift_1.jpg" className="w-full rounded-xl object-cover aspect-square" alt="Night Shift" />
                <img src="/Photographie/HUMANS/HUMANS_26.jpg" className="w-full rounded-xl object-cover aspect-square" alt="Humans 2" />
                <img src="/Photographie/MOOD/MOOD_45.jpg" className="w-full rounded-xl object-cover aspect-square" alt="Mood 2" />
                <img src="/Photographie/The Night Shift/The_Night_Shift_3.jpg" className="w-full rounded-xl object-cover aspect-square" alt="Night Shift 2" />
              </div>
            </div>
          </GridWrapper>
        </section>

        <section className="relative">
          <GridWrapper>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 overflow-hidden">
              <AboutMeBento linkTo="/about" />
              <CalendarBento />
            </div>
          </GridWrapper>
        </section>

        <section className="relative">
          <GridWrapper>
            <div className="text-center space-y-6 py-16 border-t border-gray-100">
              <h2 className="text-4xl font-medium tracking-tighter text-text-primary md:text-5xl">Mettons-nous au travail.</h2>
              <p className="text-base leading-8 text-text-secondary max-w-lg mx-auto">Tout commence par une idee, une intention. Parlons de votre projet.</p>
              <Link href="/contact" className="inline-block rounded-full border border-gray-900 px-8 py-3 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">Demarrer un projet</Link>
            </div>
          </GridWrapper>
        </section>

      </div>
    </section>
  );
}