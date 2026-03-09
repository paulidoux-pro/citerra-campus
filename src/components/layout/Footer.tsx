import { NAV_ITEMS, CONTACT_INFO } from "@/lib/constants";
import Image from "next/image";

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

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} ESRre SAS. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs">
            <a
              href="/mentions-legales"
              className="hover:text-white transition-colors"
            >
              Mentions légales
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
