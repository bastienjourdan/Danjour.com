import Link from "next/link";
import { GridWrapper } from "./GridWrapper";

export function Footer(): JSX.Element {
  return (
    <>
      <div className="relative max-w-7xl border-border-primary/50">
        <GridWrapper>
          <div className="max-w-6xl px-4 lg:mx-auto lg:px-4 xl:px-0">
            <div className="flex w-full py-8 flex-col lg:flex-row lg:justify-between lg:items-end gap-8">
              <div className="space-y-4">
                <Link className="inline-block" href="/">
                  <img className="h-10 w-10" src="/logo.svg" alt="Studio Danjour" />
                </Link>
                <p className="w-60 leading-5 text-gray-500 text-sm">
                  Directeur artistique et designer multidisciplinaire — Marseille et Quebec.
                </p>
                <p className="text-gray-500 text-sm">
                  © {new Date().getFullYear()} Bastien Jourdan
                </p>
              </div>

              <div className="flex gap-16 text-sm">
                <div>
                  <span className="mb-4 inline-block font-medium text-text-primary">Navigation</span>
                  <ul className="space-y-2 text-gray-500">
                    <li className="hover:text-text-primary"><Link href="/">Accueil</Link></li>
                    <li className="hover:text-text-primary"><Link href="/about">A propos</Link></li>
                    <li className="hover:text-text-primary"><Link href="/projects">Projets</Link></li>
                    <li className="hover:text-text-primary"><Link href="/contact">Contact</Link></li>
                  </ul>
                </div>

                <div>
                  <span className="mb-4 inline-block font-medium text-text-primary">Contact</span>
                  <ul className="space-y-2 text-gray-500">
                    <li className="hover:text-text-primary">
                      <a href="mailto:contact@danjour.com">Email</a>
                    </li>
                    <li className="hover:text-text-primary">
                      <a href="https://www.linkedin.com/in/bastienjourdan-/" target="_blank">LinkedIn</a>
                    </li>
                    <li className="hover:text-text-primary">
                      <a href="https://www.instagram.com/bastien_jourdan/" target="_blank">Instagram</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </GridWrapper>
      </div>
      <div className="relative h-8 w-full [background-image:linear-gradient(45deg,theme(colors.border-primary)_12.50%,transparent_12.50%,transparent_50%,theme(colors.border-primary)_50%,theme(colors.border-primary)_62.50%,transparent_62.50%,transparent_100%)] [background-size:5px_5px]"></div>
    </>
  );
}