import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Barème des honoraires | Citerra Campus Immobilier",
  description:
    "Barème des honoraires de l'agence Citerra Campus Immobilier – SAS ESRre, agence immobilière.",
};

export default function BaremeHonoraires() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
          Barème des honoraires
        </h1>
        <p className="text-lg text-slate-500 mb-12">
          Citerra Campus Immobilier — SAS ESRre
        </p>

        <div className="prose prose-slate max-w-none space-y-10">
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              Honoraires de transaction
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Conformément à la réglementation en vigueur, les honoraires de
              l&apos;agence Citerra Campus Immobilier sont exprimés TTC (toutes
              taxes comprises).
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              Sauf stipulation contraire dans le mandat, les honoraires sont à
              la charge de l&apos;acquéreur ou du preneur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              Barème applicable
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Le barème détaillé des honoraires de l&apos;agence sera prochainement
              disponible sur cette page.
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              Pour toute information, vous pouvez nous contacter à l&apos;adresse&nbsp;:{" "}
              <a
                href="mailto:contact@citerracampusimmobilier.com"
                className="text-navy-600 hover:text-navy-800 underline"
              >
                contact@citerracampusimmobilier.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              Informations complémentaires
            </h2>
            <ul className="text-slate-600 space-y-1 list-none pl-0">
              <li>
                <strong>Agence :</strong> SAS ESRre — Citerra Campus Immobilier
              </li>
              <li>
                <strong>Carte professionnelle :</strong> Transaction sur
                immeubles et fonds de commerce — CPI 5906 2026 000 000 001,
                délivrée par la CCI Grand Lille
              </li>
              <li>
                La société ESRre ne détient aucun fonds pour le compte de tiers.
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-800 font-medium transition-colors"
          >
            &larr; Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
