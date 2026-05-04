import { GridWrapper } from "@/app/components/GridWrapper";

export default function ContactPage() {
  return (
    <div className="pb-24">
      <GridWrapper>
        <div className="max-w-xl mx-auto pt-16 pb-8">
          <h1 className="text-4xl font-medium tracking-tighter text-text-primary text-center mb-4">
            Mettons-nous au travail.
          </h1>
          <p className="text-base leading-7 text-text-secondary text-center mb-12">
            Interesse par une collaboration ? Des questions ? Le formulaire ci-dessous nous aide a mieux comprendre vos besoins. Remplissez-le avec le plus de details possible et nous vous contacterons rapidement pour discuter des prochaines etapes. Creons ensemble quelque chose d'extraordinaire !
          </p>
<div className="text-center mb-8">
  <a href="mailto:contact@danjour.com" className="inline-block rounded-full border border-gray-900 px-6 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
    contact@danjour.com
  </a>
  <p className="text-sm text-gray-400 mt-3">ou remplissez le formulaire ci-dessous</p>
</div>
          <form action="https://formspree.io/f/mzdodoyy" method="POST" className="space-y-6">

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">Prenom <span className="text-gray-400 text-xs">(obligatoire)</span></label>
                <input required name="prenom" type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gray-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">Nom de famille <span className="text-gray-400 text-xs">(obligatoire)</span></label>
                <input required name="nom" type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Nom de l'entreprise <span className="text-gray-400 text-xs">(obligatoire)</span></label>
              <input required name="entreprise" type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gray-400" />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Site web de l'entreprise</label>
              <input name="site" type="url" placeholder="http://" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gray-400" />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Quel est l'objet de votre entreprise ? <span className="text-gray-400 text-xs">(obligatoire)</span></label>
              <input required name="objet" type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gray-400" />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Email <span className="text-gray-400 text-xs">(obligatoire)</span></label>
              <input required name="email" type="email" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gray-400" />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Ou vous trouvez-vous ? <span className="text-gray-400 text-xs">(obligatoire)</span></label>
              <input required name="localisation" type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gray-400" />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Quel est votre budget ? (CAD) <span className="text-gray-400 text-xs">(obligatoire)</span></label>
              <select required name="budget" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gray-400 bg-white">
                <option value="">Selectionner une option</option>
<option>Moins de 500 $</option>
<option>500 $ - 1 000 $</option>
<option>1 000 $ - 3 000 $</option>
<option>3 000 $ - 6 000 $</option>
<option>6 000 $ - 10 000 $</option>
<option>10 000 $ +</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Quand souhaitez-vous que le projet soit acheve ?</label>
              <input name="deadline" type="date" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gray-400" />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Quelles services vous interessent ? <span className="text-gray-400 text-xs">(obligatoire)</span></label>
              <p className="text-xs text-gray-400 mb-3">choisissez tout ce qui correspond</p>
              <div className="space-y-2">
                {["Conception du logo", "Systeme d'identite visuelle", "Marchandising", "Website", "Illustration", "Packaging", "Contenu des medias sociaux", "Direction artistique", "Demande de renseignements generaux"].map((service) => (
                  <label key={service} className="flex items-center gap-3 text-sm text-text-secondary cursor-pointer">
                    <input type="checkbox" name="services" value={service} className="w-4 h-4 rounded border-gray-300" />
                    {service}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Parlez-nous du projet et expliquez-nous pourquoi vous aimeriez collaborer avec nous. <span className="text-gray-400 text-xs">(obligatoire)</span></label>
              <textarea required name="message" rows={6} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gray-400 resize-none" />
            </div>

            <button type="submit" className="w-full rounded-full border border-gray-900 px-8 py-3 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
              ENVOYER
            </button>

          </form>

          <p className="text-sm text-text-secondary text-center mt-12">
            Vous n'etes pas encore sur de ce que vous cherchez ? Ne vous inquietez pas ! Explorez notre{" "}
            <a href="/projects" className="underline">page de travail</a>{" "}
            pour vous inspirer et voir le genre de magie que nous pouvons creer.
          </p>
        </div>
      </GridWrapper>
    </div>
  );
}