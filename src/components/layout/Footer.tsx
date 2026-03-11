import { NAV_ITEMS, CONTACT_INFO } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <Image
              src="/Logo.png"
              alt="Citerra Campus Immobilier"
              width={200}
              height={45}
              className="h-10 w-auto brightness-0 invert mb-6"
            />
            <p className="text-sm leading-relaxed">
              Opérateur immobilier spécialisé dans les campus
              d&apos;enseignement supérieur et les écosystèmes de compétence.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>{CONTACT_INFO.email}</li>
              <li>{CONTACT_INFO.phone}</li>
              <li>{CONTACT_INFO.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="text-xs leading-relaxed space-y-1 mb-6">
            <p>
              Citerra Campus Immobilier — Marque commerciale de ESRre
            </p>
            <p>
              SAS ESRre – RCS Dunkerque 992 027 730
            </p>
            <p>
              Agence immobilière – Transaction sur immeubles et fonds de commerce
            </p>
            <p>
              Carte professionnelle CPI 5906 2026 000 000 001 – CCI Grand Lille
            </p>
            <p>
              La société ESRre ne détient aucun fonds pour le compte de tiers
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs">
              &copy; {new Date().getFullYear()} ESRre – Citerra Campus Immobilier. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
              <Link
                href="/mentions-legales"
                className="hover:text-white transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/bareme-honoraires"
                className="hover:text-white transition-colors"
              >
                Barème des honoraires
              </Link>
              <Link
                href="/politique-de-confidentialite"
                className="hover:text-white transition-colors"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="/gestion-des-cookies"
                className="hover:text-white transition-colors"
              >
                Gestion des cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
