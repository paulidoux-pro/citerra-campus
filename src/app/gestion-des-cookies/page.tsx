import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gestion des cookies | Citerra Campus Immobilier",
  description:
    "Politique relative aux cookies du site Citerra Campus Immobilier – types de cookies, consentement et paramétrage.",
};

export default function GestionDesCookies() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
          Politique relative aux cookies
        </h1>
        <p className="text-lg text-slate-500 mb-12">
          Citerra Campus Immobilier
        </p>

        <p className="text-slate-600 leading-relaxed mb-10">
          La présente politique relative aux cookies explique comment le site
          Citerra Campus Immobilier utilise des cookies et technologies
          similaires lorsque vous consultez le site.
        </p>

        <div className="prose prose-slate max-w-none space-y-10">
          {/* 1. Définition */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              1. Qu&apos;est-ce qu&apos;un cookie&nbsp;?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Un cookie est un petit fichier texte déposé sur votre terminal
              (ordinateur, tablette ou smartphone) lors de la consultation
              d&apos;un site internet. Les cookies permettent notamment&nbsp;:
            </p>
            <ul className="text-slate-600 space-y-1 mt-3 list-disc pl-5">
              <li>d&apos;assurer le bon fonctionnement du site</li>
              <li>d&apos;améliorer l&apos;expérience utilisateur</li>
              <li>de mesurer l&apos;audience du site</li>
              <li>
                de mémoriser certaines préférences de navigation
              </li>
            </ul>
          </section>

          {/* 2. Responsable */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              2. Responsable du traitement
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Les cookies déposés sur le site sont gérés par&nbsp;:
            </p>
            <ul className="text-slate-600 space-y-1 mt-3 list-none pl-0">
              <li>
                <strong>SAS ESRre</strong> — Marque commerciale&nbsp;: Citerra
                Campus Immobilier
              </li>
              <li>
                <strong>Siège social :</strong> 2603 Route Nationale, 59670
                Cassel
              </li>
              <li>
                <strong>Contact :</strong>{" "}
                <a
                  href="mailto:jean-marc.idoux@esrre.fr"
                  className="text-navy-600 hover:text-navy-800 underline"
                >
                  jean-marc.idoux@esrre.fr
                </a>
              </li>
            </ul>
          </section>

          {/* 3. Types de cookies */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              3. Types de cookies utilisés
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Le site peut utiliser plusieurs catégories de cookies.
            </p>

            <h3 className="text-lg font-semibold text-navy-700 mb-2">
              Cookies strictement nécessaires
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Ces cookies sont indispensables au fonctionnement du site internet
              et ne peuvent pas être désactivés. Ils permettent
              notamment&nbsp;:
            </p>
            <ul className="text-slate-600 space-y-1 mt-2 mb-6 list-disc pl-5">
              <li>l&apos;affichage correct des pages</li>
              <li>la gestion de la navigation</li>
              <li>la sécurité du site</li>
            </ul>

            <h3 className="text-lg font-semibold text-navy-700 mb-2">
              Cookies de mesure d&apos;audience
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Ces cookies permettent de mesurer la fréquentation du site et
              d&apos;analyser la manière dont les visiteurs naviguent. Ils
              permettent notamment&nbsp;:
            </p>
            <ul className="text-slate-600 space-y-1 mt-2 mb-3 list-disc pl-5">
              <li>de connaître le nombre de visiteurs</li>
              <li>
                d&apos;analyser les pages les plus consultées
              </li>
              <li>
                d&apos;améliorer le contenu et l&apos;ergonomie du site
              </li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-6">
              Ces cookies peuvent être fournis par des outils d&apos;analyse
              tels que Google Analytics ou équivalents.
            </p>

            <h3 className="text-lg font-semibold text-navy-700 mb-2">
              Cookies fonctionnels
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Ces cookies permettent d&apos;améliorer votre expérience
              utilisateur en mémorisant certaines préférences. Par
              exemple&nbsp;:
            </p>
            <ul className="text-slate-600 space-y-1 mt-2 list-disc pl-5">
              <li>mémorisation du choix concernant les cookies</li>
              <li>optimisation de l&apos;affichage du site</li>
            </ul>
          </section>

          {/* 4. Consentement */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              4. Consentement de l&apos;utilisateur
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Lors de votre première visite sur le site Citerra Campus
              Immobilier, un bandeau d&apos;information vous informe de
              l&apos;utilisation de cookies. Vous avez la possibilité&nbsp;:
            </p>
            <ul className="text-slate-600 space-y-1 mt-3 list-disc pl-5">
              <li>d&apos;accepter tous les cookies</li>
              <li>de refuser les cookies non essentiels</li>
              <li>de paramétrer vos préférences</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-3">
              Votre choix est conservé pour une durée limitée conformément à la
              réglementation.
            </p>
          </section>

          {/* 5. Durée */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              5. Durée de conservation des cookies
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Les cookies sont conservés pour une durée maximale de 13 mois,
              conformément aux recommandations de la CNIL. À l&apos;issue de
              cette période, votre consentement sera de nouveau demandé.
            </p>
          </section>

          {/* 6. Gestion */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              6. Gestion des cookies
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Vous pouvez à tout moment modifier vos préférences en matière de
              cookies&nbsp;:
            </p>
            <ul className="text-slate-600 space-y-1 mt-3 list-disc pl-5">
              <li>via le bandeau de gestion des cookies du site</li>
              <li>en paramétrant votre navigateur internet</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-3">
              Vous pouvez également configurer votre navigateur pour refuser
              l&apos;ensemble des cookies. Toutefois, le refus de certains
              cookies peut affecter le fonctionnement du site.
            </p>
          </section>

          {/* 7. Paramétrage navigateur */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              7. Paramétrage des cookies via le navigateur
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Vous pouvez configurer votre navigateur pour accepter ou refuser
              les cookies. Pour plus d&apos;informations, consultez
              l&apos;aide de votre navigateur&nbsp;:
            </p>
            <ul className="text-slate-600 space-y-1 mt-3 list-disc pl-5">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-600 hover:text-navy-800 underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-600 hover:text-navy-800 underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-600 hover:text-navy-800 underline"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-600 hover:text-navy-800 underline"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </section>

          {/* 8. Contact */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              8. Contact
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Pour toute question relative à l&apos;utilisation des cookies,
              vous pouvez contacter&nbsp;:
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              <strong>ESRre</strong> —{" "}
              <a
                href="mailto:contact@citerracampusimmobilier.com"
                className="text-navy-600 hover:text-navy-800 underline"
              >
                contact@citerracampusimmobilier.com
              </a>
            </p>
          </section>

          {/* 9. Modification */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              9. Modification de la politique de cookies
            </h2>
            <p className="text-slate-600 leading-relaxed">
              La présente politique peut être mise à jour afin de tenir compte
              des évolutions légales ou techniques. La dernière version
              applicable est celle publiée sur le site internet.
            </p>
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
