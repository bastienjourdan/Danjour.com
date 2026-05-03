import { ResumeData } from "../lib/resume/types";
import { Timeline } from "./Timeline";

const resumeData: ResumeData = {
  experiences: [
    {
      company: "Studio Danjour",
      period: "2017 - Présent",
      positions: [
        {
          title: "Fondateur — Designer stratégique UX/UI & Directeur Artistique",
          description: [
            "Conception UX/UI pour sites web et plateformes numériques, direction artistique et développement d'identités visuelles pour des clients en France et au Québec.",
            "Mandats corporatifs notables : AXA France, Hermès. Gestion complète des projets créatifs — brief, budget, échéancier, livraison.",
            "Collaboration avec développeurs, agences partenaires et équipes marketing. Conseil en stratégie de marque et expérience utilisateur.",
          ],
        },
      ],
    },
    {
      company: "Canadian Royalties",
      period: "2024 - Présent",
      positions: [
        {
          title: "Superviseur d'équipe — Nunavik, Québec",
          description: [
            "Supervision d'équipes en milieu nordique isolé, gestion des ressources humaines, des horaires et du suivi des heures.",
            "Gestion et suivi de budgets opérationnels, organisation et répartition du travail selon les priorités terrain.",
            "Application des règles de santé et sécurité, coordination inter-départements et gestion des situations critiques en contexte de fly in/fly out 14/14 - 21/21.",
          ],
        },
      ],
    },
    {
      company: "Real by Fake",
      period: "2021 - 2023",
      positions: [
        {
          title: "Designer & Coordinateur d'équipe — Montréal",
          description: [
            "Direction artistique pour des clients en production multimédia : séquences d'ouverture, illustrations, concepts visuels.",
            "Développement de stratégies de gestion d'équipe pour une équipe de 40 artistes, entraînant une augmentation de 20% des taux de réalisation des projets.",
            "Spécialisation en direction photo et expérience utilisateur, à l'intersection de la recherche créative et de la conception artistique.",
          ],
        },
      ],
    },
    {
      company: "Lamour",
      period: "2020 - 2021",
      positions: [
        {
          title: "Designer Graphique — Montréal",
          description: [
            "Création et direction artistique de visuels pour 37 marques et licences, incluant packagings, signalétiques, refontes complètes de marques, logos et matériels promotionnels.",
            "Élaboration de stratégies pour les lancements de collections en collaboration avec l'équipe marketing.",
            "Réalisation de prises de vue en studio et retouches photo.",
          ],
        },
      ],
    },
    {
      company: "Haigo",
      period: "2019 - 2020",
      positions: [
        {
          title: "Designer UX/UI — Paris",
          description: [
            "Création et développement des directives UI pour l'application mobile d'AXA France, garantissant une expérience utilisateur cohérente et intuitive.",
            "Participation à la conception et à l'exécution de recherches utilisateur, traduisant les besoins en solutions digitales centrées sur l'utilisateur.",
            "Collaboration étroite avec les clients pour analyser les attentes des utilisateurs finaux et concevoir des applications à forte adoption.",
          ],
        },
      ],
    },
    {
      company: "Studio Wolfgang & Franklin Bélingard",
      period: "2018 - 2019",
      positions: [
        {
          title: "Directeur Artistique / Assistant Photographe — Paris",
          description: [
            "Direction artistique : mise en place de la vision créative entre le photographe et les clients.",
            "Photographie de mode et de produit, design de scénographie pour séances photo en intérieur et extérieur.",
          ],
        },
      ],
    },
    {
      company: "Jonsen Island & Studio Thomas Cantoni / Malax",
      period: "2016 - 2018",
      positions: [
        {
          title: "Designer Graphique & Directeur Artistique Junior — Marseille",
          description: [
            "Création d'identité de marque, visuels pour lignes de vêtements, logotypes, supports éditoriaux et signalétiques.",
            "Définition et mise en œuvre de la vision créative pour les collections, en collaboration avec le directeur de création.",
            "Élaboration de stratégies marketing et storytelling. Photographie et scénographie pour les séances photo.",
          ],
        },
      ],
    },
    {
      company: "IMBE Research Center — IRD",
      period: "2018",
      positions: [
        {
          title: "Projet de recherche — Steak de Mycélium, Marseille",
          description: [
            "Analyse des propriétés nutritionnelles et des contraintes de culture du mycélium en laboratoire, en collaboration avec le Dr Sevastianos Roussos.",
            "Développement d'un aliment innovant type steak de mycélium, présenté au jury de l'ESADMM avec félicitations.",
          ],
        },
      ],
    },
  ],
  avatarUrl: "/avatar.jpg",
};

export function Resume() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative">
          <div className="divide-y divide-gray-100">
            {resumeData.experiences.map((experience) => (
              <div
                key={experience.company}
                className="grid grid-cols-[1fr,5fr] gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr,1fr,4fr]"
              >
                <div className="hidden md:block">
                  <h3 className="text-xl font-bold">{experience.company}</h3>
                  <p className="text-sm text-gray-600">{experience.period}</p>
                </div>

                <div />

                <div className="space-y-6">
                  {experience.positions.map((position, index) => (
                    <div
                      key={`${experience.company}-${index}`}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-semibold">
                        {position.title}
                      </h4>
                      <div className="space-y-3">
                        {position.description.map((desc, i) => (
                          <p key={i} className="text-gray-600">
                            {desc}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 h-full w-8 md:left-[calc(28%_-_1rem)]">
            <Timeline avatarUrl={resumeData.avatarUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
