import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Citerra Campus Immobilier",
  description:
    "Politique de confidentialité et protection des données personnelles (RGPD) du site Citerra Campus Immobilier.",
};

export default function PolitiqueDeConfidentialite() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
          Politique de confidentialité
        </h1>
        <p className="text-lg text-slate-500 mb-12">
          Citerra Campus Immobilier
        </p>

        <p className="text-slate-600 leading-relaxed mb-10">
          La présente politique de confidentialité a pour objectif
          d&apos;informer les utilisateurs du site Citerra Campus Immobilier sur
          la manière dont leurs données personnelles sont collectées, utilisées
          et protégées.
        </p>

        <div className="prose prose-slate max-w-none space-y-10">
          {/* 1. Responsable du traitement */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              1. Responsable du traitement
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Les données personnelles collectées sur le site sont traitées
              par&nbsp;:
            </p>
            <ul className="text-slate-600 space-y-1 mt-3 list-none pl-0">
              <li>
                <strong>SAS ESRre</strong> — Société par Actions Simplifiée
              </li>
              <li>
                <strong>Siège social :</strong> 2603 Route Nationale, 59670
                Cassel
              </li>
              <li>
                <strong>RCS :</strong> Dunkerque 992&nbsp;027&nbsp;730
              </li>
              <li>
                <strong>Marque commerciale :</strong> Citerra Campus Immobilier
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

          {/* 2. Données collectées */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              2. Données collectées
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Lors de l&apos;utilisation du site internet, certaines données
              personnelles peuvent être collectées, notamment via les
              formulaires de contact. Les données susceptibles d&apos;être
              collectées sont&nbsp;:
            </p>
            <ul className="text-slate-600 space-y-1 mt-3 list-disc pl-5">
              <li>nom et prénom</li>
              <li>adresse email</li>
              <li>numéro de téléphone</li>
              <li>société / organisation (le cas échéant)</li>
              <li>
                contenu du message transmis via le formulaire de contact
              </li>
              <li>
                données techniques de navigation (adresse IP, cookies, données
                de connexion)
              </li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-3">
              Ces données sont collectées uniquement lorsque l&apos;utilisateur
              les communique volontairement.
            </p>
          </section>

          {/* 3. Finalité */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              3. Finalité de la collecte des données
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Les données collectées sont utilisées uniquement pour les
              finalités suivantes&nbsp;:
            </p>
            <ul className="text-slate-600 space-y-1 mt-3 list-disc pl-5">
              <li>
                répondre aux demandes de contact adressées via le site
              </li>
              <li>
                fournir des informations sur les services de Citerra Campus
                Immobilier
              </li>
              <li>assurer la gestion de la relation commerciale</li>
              <li>
                améliorer le fonctionnement et l&apos;expérience utilisateur du
                site
              </li>
              <li>analyser l&apos;audience du site internet</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-3">
              Les données ne sont utilisées que dans le cadre strict des
              activités de la société ESRre.
            </p>
          </section>

          {/* 4. Base légale */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              4. Base légale du traitement
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Le traitement des données repose sur&nbsp;:
            </p>
            <ul className="text-slate-600 space-y-1 mt-3 list-disc pl-5">
              <li>
                le consentement de l&apos;utilisateur lorsqu&apos;il remplit un
                formulaire de contact
              </li>
              <li>
                l&apos;intérêt légitime de la société ESRre pour répondre aux
                demandes et améliorer ses services
              </li>
            </ul>
          </section>

          {/* 5. Destinataires */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              5. Destinataires des données
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Les données personnelles collectées sont destinées exclusivement à
              la société ESRre. Elles peuvent également être traitées par
              certains prestataires techniques intervenant dans la gestion du
              site internet (hébergement, maintenance, outils d&apos;analyse).
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              Les données ne sont ni vendues ni cédées à des tiers.
            </p>
          </section>

          {/* 6. Durée de conservation */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              6. Durée de conservation des données
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Les données personnelles sont conservées pendant une durée
              limitée&nbsp;:
            </p>
            <ul className="text-slate-600 space-y-1 mt-3 list-disc pl-5">
              <li>
                données issues des formulaires de contact&nbsp;: 3 ans maximum
                après le dernier contact
              </li>
              <li>
                données de navigation (cookies)&nbsp;: selon la durée définie
                dans la{" "}
                <Link
                  href="/gestion-des-cookies"
                  className="text-navy-600 hover:text-navy-800 underline"
                >
                  politique de cookies
                </Link>
              </li>
            </ul>
          </section>

          {/* 7. Droits des utilisateurs */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              7. Droits des utilisateurs
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Conformément au Règlement Général sur la Protection des Données
              (RGPD) et à la loi Informatique et Libertés, toute personne
              dispose des droits suivants concernant ses données
              personnelles&nbsp;:
            </p>
            <ul className="text-slate-600 space-y-1 mt-3 list-disc pl-5">
              <li>droit d&apos;accès aux données</li>
              <li>droit de rectification</li>
              <li>droit d&apos;effacement (droit à l&apos;oubli)</li>
              <li>droit de limitation du traitement</li>
              <li>droit d&apos;opposition au traitement</li>
              <li>droit à la portabilité des données</li>
            </ul>
          </section>

          {/* 8. Exercice des droits */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              8. Exercice des droits
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Ces droits peuvent être exercés à tout moment en adressant une
              demande à&nbsp;:
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
            <p className="text-slate-600 leading-relaxed mt-3">
              La demande doit être accompagnée d&apos;un justificatif
              d&apos;identité si nécessaire.
            </p>
          </section>

          {/* 9. Réclamation CNIL */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              9. Réclamation auprès de la CNIL
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez
              introduire une réclamation auprès de&nbsp;:
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              <strong>CNIL</strong> — Commission Nationale de
              l&apos;Informatique et des Libertés
              <br />
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-600 hover:text-navy-800 underline"
              >
                www.cnil.fr
              </a>
            </p>
          </section>

          {/* 10. Sécurité */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              10. Sécurité des données
            </h2>
            <p className="text-slate-600 leading-relaxed">
              La société ESRre met en œuvre les mesures techniques et
              organisationnelles appropriées afin d&apos;assurer la sécurité et
              la confidentialité des données personnelles.
            </p>
          </section>

          {/* 11. Cookies */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              11. Cookies
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Le site Citerra Campus Immobilier utilise des cookies afin
              d&apos;améliorer l&apos;expérience utilisateur et de mesurer
              l&apos;audience du site. L&apos;utilisateur peut accepter ou
              refuser l&apos;utilisation des cookies via le bandeau de gestion
              des cookies affiché lors de sa première visite.
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              Pour plus d&apos;informations, consultez la{" "}
              <Link
                href="/gestion-des-cookies"
                className="text-navy-600 hover:text-navy-800 underline"
              >
                politique de cookies
              </Link>{" "}
              du site.
            </p>
          </section>

          {/* 12. Modification */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              12. Modification de la politique de confidentialité
            </h2>
            <p className="text-slate-600 leading-relaxed">
              La présente politique de confidentialité peut être modifiée à tout
              moment afin de tenir compte des évolutions légales ou techniques.
              La dernière version applicable est celle publiée sur le site
              internet.
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
