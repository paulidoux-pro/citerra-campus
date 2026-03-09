import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Citerra Campus Immobilier",
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-12">
          Mentions légales
        </h1>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">Éditeur du site</h2>
            <p className="text-slate-600 leading-relaxed">
              Le site citerracampus.fr est édité par la SAS ESRre.
            </p>
            <ul className="text-slate-600 space-y-1 mt-3 list-none pl-0">
              <li><strong>Raison sociale :</strong> ESRre SAS</li>
              <li><strong>Forme juridique :</strong> Société par actions simplifiée</li>
              <li><strong>Siège social :</strong> France</li>
              <li><strong>Email :</strong> contact@citerracampus.fr</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">Hébergement</h2>
            <p className="text-slate-600 leading-relaxed">
              Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, États-Unis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              Propriété intellectuelle
            </h2>
            <p className="text-slate-600 leading-relaxed">
              L&apos;ensemble du contenu de ce site (textes, images, logos,
              vidéos, etc.) est protégé par les lois relatives à la propriété
              intellectuelle. Toute reproduction, même partielle, est interdite
              sans autorisation préalable de l&apos;éditeur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              Protection des données personnelles
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), vous disposez d&apos;un droit d&apos;accès, de
              rectification et de suppression de vos données personnelles. Pour
              exercer ces droits, contactez-nous à l&apos;adresse
              contact@citerracampus.fr.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              Ce site peut utiliser des cookies techniques nécessaires à son
              fonctionnement. Aucun cookie publicitaire ou de traçage n&apos;est
              utilisé sans votre consentement préalable.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-800 font-medium transition-colors"
          >
            &larr; Retour à l&apos;accueil
          </a>
        </div>
      </div>
    </div>
  );
}
