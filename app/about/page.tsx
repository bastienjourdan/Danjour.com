import { HorizontalLine } from "@/app/components/HorizontalLine";
import { getTimeOfDayGreeting } from "app/lib/utils";
import React from "react";
import { CurrentlyPlayingBento } from "@/app/components/CurrentlyPlayingBento";
import { ConnectionsBento } from "@/app/components/ConnectionsBento";
import { ScrapbookBento } from "@/app/components/ScrapbookBento";
import { ShadowBox } from "@/app/components/ShadowBox";
import { Resume } from "app/components/Resume";
import { StatsBento } from "@/app/components/StatsBento";
import { CurrentlyReadingBento } from "@/app/components/CurrentlyReadingBento";
import { GridWrapper } from "@/app/components/GridWrapper";
import { AboutTrackPattern } from "@/app/components/AboutTrackPattern";
import { Photo } from "@/app/components/Photo";

export default function AboutPage() {
  const timeOfDayGreeting = getTimeOfDayGreeting();

  return (
    <div className="relative mt-14">
      <title>About | Bastien Jourdan</title>
      <div className="relative space-y-10 md:space-y-16">
        {/* Title */}
        <GridWrapper className="space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around lg:px-24">
            <div className="order-2 mx-auto max-w-lg lg:order-1 lg:m-0 lg:max-w-3xl lg:pr-12">
              <div className="text-center text-sm font-medium text-indigo-600 lg:text-left">
                <span>{timeOfDayGreeting}</span>
              </div>
              <h1 className="mx-auto max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-5xl lg:text-left lg:text-6xl lg:leading-[64px]">
                Je suis Bastien, directeur artistique & designer multidisciplinaire.
              </h1>
            </div>
            <div className="order-1 my-12 flex-shrink-0 lg:order-2 lg:my-0">
              <div className="relative mx-auto w-full max-w-[400px]">
                <div className="relative grid grid-cols-3">
                  <div className="relative z-20 -translate-y-2">
                    <Photo
                      width={160}
                      height={200}
                      src="/bastien_5.JPG"
                      alt="Bastien Jourdan"
                      direction="left"
                    />
                  </div>
                  <div className="relative z-30">
                    <Photo
                      width={160}
                      height={200}
                      src="/bastien_2.jpg"
                      alt="Bastien Jourdan"
                      direction="right"
                    />
                  </div>
                  <div className="relative z-20 translate-y-4">
                    <Photo
                      width={160}
                      height={200}
                      src="/bastien_3.jpg"
                      alt="Bastien Jourdan"
                      direction="left"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GridWrapper>

        <span className="absolute left-1/2 top-40 -translate-y-1/2 translate-x-1/2">
          <HorizontalLine />
        </span>

        {/* About */}
        <div className="relative space-y-8 text-center">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>À propos</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-xl text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                Voici une brève présentation de moi et de ce que j'aime faire.
              </h2>
            </GridWrapper>
          </div>
          <div className="relative h-fit w-full overflow-hidden">
            <div className="absolute left-0 top-0 w-full md:left-4 lg:left-[355px] xl:left-[455px]">
              <AboutTrackPattern />
            </div>

            {/* Section 1 */}
            <div className="grid grid-cols-1 gap-8 py-12 pr-12 lg:grid-cols-2 lg:items-center lg:justify-between lg:py-32 lg:pb-20 xl:py-32">
              <div className="flex flex-col items-center text-left lg:order-2 lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                      src="/ARTICLE-ESADMM-4-crédit.jpg"
                      alt="A headshot"
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  Mes origines
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  J'ai grandi sur la Côte d'Azur, mais c'est à Marseille que tout a commencé. À l'ESADMM, design produit et graphique — mais la vraie formation s'est faite dehors. Verre soufflé avec le CIRVA, scénographie au Musée Antique d'Arles, co-fondateur de Vaï, un collectif culinaire qui remuait toute la ville. Projet de fin d'études : des steaks de mycélium développés avec un labo de microbiologie, en réponse à la pénurie alimentaire. Le jury les a mangés. Littéralement.
                </p>
              </div>
              <div className="hidden lg:order-1 lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <img
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                    src="/ARTICLE-ESADMM-4-crédit.jpg"
                    alt="A headshot"
                  />
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="grid grid-cols-1 gap-8 py-16 lg:grid-cols-2 lg:items-center lg:justify-between lg:pl-12">
              <div className="flex flex-col items-center text-left lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                      src="/bastien_3.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  Trouver ma direction
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  Ma dernière année a tout changé. Mentoré par le graphiste et illustrateur Thomas Cantoni, j'ai découvert la direction artistique, le branding et le design digital. Trois ans à travailler pour sa marque de surf Josen Island — DA, photographe, graphiste, scénographe — m'ont donné une expérience concrète à toute vitesse. Je n'avais aucune envie de dessiner une énième chaise à l'heure d'IKEA et du fast design. L'écran est devenu mon matériau de prédilection.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={300}></ShadowBox>
                  <img
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                    src="/bastien_3.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="grid grid-cols-1 gap-8 pr-0 lg:grid-cols-2 lg:items-center lg:justify-between xl:py-12">
              <div className="flex flex-col items-center text-left lg:order-2 lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                      src="/Nuri_4_2019.webp"
                      alt="A headshot"
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  Paris, Montréal
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  Paris, c'est la photographie de mode avec le Studio Wolfgang, puis l'UX/UI en autodidacte et quelques mois chez l'agence Haigo — le temps d'apprendre vite et de passer à autre chose. Un tirage au sort au Working Holiday Visa scelle la décision : janvier 2020, je pose mes valises à Montréal. Je design pour Lamour, je construis, j'observe. Quand l'IA publique débarque en 2022, je vois avant beaucoup d'autres que le design digital va être chamboulé. Je choisis délibérément de pivoter vers l'humain — je combine le freelance design avec la coordination de production en effets spéciaux chez Real by Fake, deux ans à gérer des équipes créatives à l'intersection de l'art et de la technologie. Une expérience que peu de designers ont.
                </p>
                
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <img
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                    src="/Nuri_4_2019.webp"
                    alt="A headshot"
                  />
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:justify-between lg:py-32 lg:pl-12 xl:py-24">
              <div className="flex flex-col items-center text-left lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                      src="/bastien_1.jpg"
                      alt="A headshot"
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  Aujourd'hui
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  J'ai déménagé dans les Hautes-Laurentides — un chalet dans la forêt, face à un lac, en autonomie avec ma conjointe Mélodie, trois chiens et deux chats. Je travaille à un rythme humain : design freelance pour les commerces et agences de la région, et rotations de supervision d'équipe dans le Grand Nord québécois en fly in fly out 14/14. Entre les deux, je voyage, je surfe, réstore mon chalet, et je continue de construire Studio Danjour — un projet à la fois, avec intention.
                </p>
                
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <img
                    className="absolute left-0 top-0 h-[300px] w-[220px] rotate-[8deg] rounded-lg object-cover shadow"
                    src="/bastien_6.JPG"
                    alt="A headshot"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="relative space-y-8 text-center">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>Experiences</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                Mon parcours et mes expériences professionnelles.
              </h2>
            </GridWrapper>
          </div>
        </div>
        <div className="space-y-16">
          <GridWrapper>
            <Resume />
          </GridWrapper>
          {/* <div className="flex justify-center">
            <Button variant="secondary">Download Resume</Button>
          </div> */}
        </div>

        <section className="relative space-y-16">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span></span>
              </div>
            </GridWrapper>

            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary">
                Ma marque de fabrique
              </h2>
            </GridWrapper>
          </div>

          {/* About Grid */}
          <GridWrapper>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-12">
              <div className="lg:col-span-3 lg:row-span-6">
                <CurrentlyPlayingBento />
              </div>
              <div className="lg:col-span-7 lg:row-span-5">
                <ScrapbookBento />
              </div>
              <div className="hidden lg:col-span-2 lg:col-start-11 lg:row-span-10 lg:block lg:min-h-[50px]">
                <CurrentlyReadingBento />
              </div>
              <div className="relative hidden lg:block lg:col-span-7 lg:row-span-8 group">
                <ConnectionsBento />
                <div className="absolute inset-0 bg-gray-100/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">Coming soon</span>
                </div>
              </div>

              <div className="relative hidden lg:block lg:col-span-3 lg:row-span-4 group">
                <StatsBento />
                <div className="absolute inset-0 bg-gray-100/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">Coming soon</span>
                </div>
              </div>
            </div>
          </GridWrapper>
        <section className="relative lg:hidden">
          <GridWrapper>
            <div className="text-center space-y-6 py-16 border-t border-gray-100">
              <h2 className="text-4xl font-medium tracking-tighter text-text-primary">Mettons-nous au travail.</h2>
              <p className="text-base leading-8 text-text-secondary max-w-lg mx-auto">Tout commence par une idee, une intention. Parlons de votre projet.</p>
              <a href="/contact" className="inline-block rounded-full border border-gray-900 px-8 py-3 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">Demarrer un projet</a>
            </div>
          </GridWrapper>
        </section>
        </section>

      
      </div>
    </div>
  );
}
