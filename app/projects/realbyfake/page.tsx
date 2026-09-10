import { Lightbox } from "@/app/components/Lightbox";
import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";

export default function RealByFakePage() {
  return (
    <div className="pb-24">

      <GridWrapper>
        <div className="pt-12 pb-4">
          <Link href="/projects" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
            ← Projets
          </Link>
        </div>
      </GridWrapper>

      <GridWrapper>
        <h1 className="text-5xl font-medium leading-tight tracking-tighter text-text-primary mb-2">
          Real by Fake
        </h1>
        <p className="text-sm text-gray-400 mb-8">Logo, Branding, Webdesign</p>
      </GridWrapper>

      <GridWrapper>
        <div className="flex flex-col lg:flex-row gap-16 py-8">
          <div className="lg:w-1/3">
            <p className="text-sm font-medium text-gray-400 mb-1">Client</p>
            <p className="text-base text-text-primary mb-4">Real by Fake</p>
            <p className="text-sm font-medium text-gray-400 mb-1">Services</p>
            <p className="text-base text-text-primary">Logo, Branding, Webdesign</p>
          </div>
          <div className="lg:w-2/3">
            <p className="text-base leading-7 text-text-secondary">
              Le site Internet de Real by Fake se veut une vitrine interactive mettant en valeur l&apos;excellence de ses services de post-production et d&apos;effets spéciaux. En fournissant des informations détaillées, des démonstrations et des moyens de communication faciles, nous visons à renforcer la confiance des clients potentiels et à positionner Real by Fake comme un partenaire de confiance dans l&apos;industrie du divertissement.
            </p>
          </div>
        </div>
      </GridWrapper>

      
      <Lightbox images={[
    "/projects/realbyfake/RBF_1.gif",
    "/projects/realbyfake/RBF_2.webp",
    "/projects/realbyfake/RBF_3.webp",
  ]} />

    </div>
  );
}