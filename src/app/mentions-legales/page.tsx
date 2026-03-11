import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales | Citerra Campus Immobilier",
  description:
    "Mentions légales du site Citerra Campus Immobilier – SAS ESRre, agence immobilière spécialisée campus.",
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-12">
          Mentions légales
        </h1>

        <div className="prose prose-slate max-w-none space-y-10">
          {/* Éditeur du site */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              Éditeur du site
            </h2>
            <ul className="text-slate-600 space-y-1 mt-3 list-none pl-0">
              <li>
                <strong>Raison sociale :</strong> SAS ESRre — Société par
                Actions Simplifiée au capital de 1&nbsp;000&nbsp;€
              </li>
              <li>
                <strong>Siège social :</strong> 2603 Route Nationale, 59670
                Cassel
              </li>
              <li>
                <strong>RCS :</strong> Immatriculée au RCS de Dunkerque sous le
                numéro 992&nbsp;027&nbsp;730
              </li>
              <li>
                <strong>Carte professionnelle :</strong> Transaction sur
                immeubles et fonds de commerce — Carte n° CPI 5906 2026 000 000
                001, délivrée par la CCI Grand Lille
              </li>
              <li>
                <strong>Présidente :</strong> Anne Massart
              </li>
              <li>
                La société ESRre ne détient aucun fonds, effet ou valeur pour le
                compte de tiers.
              </li>
            </ul>
          </section>

          {/* Directeur de publication */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              Directeur de publication
            </h2>
            <p className="text-slate-600 leading-relaxed">Anne Massart</p>
          </section>

          {/* Hébergement */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              Hébergement
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, États-Unis.
            </p>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              Propriété intellectuelle
            </h2>
            <p className="text-slate-600 leading-relaxed">
              L&apos;ensemble des éléments présents sur le site Citerra Campus
              Immobilier, notamment les textes, images, photographies,
              illustrations, documents, logos, marques, graphismes, vidéos,
              ainsi que la structure et l&apos;architecture du site, sont
              protégés par les dispositions du Code de la propriété
              intellectuelle.
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              Ces éléments sont la propriété exclusive de la société ESRre,
              exploitant la marque commerciale Citerra Campus Immobilier, ou
              sont utilisés avec l&apos;autorisation de leurs titulaires
              respectifs.
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              Toute reproduction, représentation, modification, publication,
              transmission ou adaptation, totale ou partielle, des éléments du
              site, quel que soit le moyen ou le procédé utilisé, est interdite
              sans l&apos;autorisation écrite préalable de la société ESRre,
              sauf dans les cas autorisés par la loi.
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              Les marques, dénominations sociales et logos présents sur le site
              sont protégés et leur reproduction ou utilisation, totale ou
              partielle, sans autorisation préalable est interdite.
            </p>
          </section>

          {/* Contenus immobiliers */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              Contenus immobiliers
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Les photographies, plans, descriptifs, documents techniques et
              supports de communication relatifs aux biens immobiliers présentés
              sur le site peuvent être fournis par des propriétaires,
              promoteurs, exploitants ou partenaires. Ces éléments restent la
              propriété de leurs titulaires respectifs et ne peuvent être
              reproduits ou utilisés sans leur autorisation.
            </p>
          </section>

          {/* Clause de non-responsabilité */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              Informations immobilières — Clause de non-responsabilité
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Les informations présentées sur le site Citerra Campus Immobilier
              sont fournies à titre indicatif. Bien que la société ESRre
              s&apos;efforce d&apos;assurer l&apos;exactitude et
              l&apos;actualisation des informations diffusées, celles-ci
              peuvent être sujettes à modification à tout moment et sans
              préavis.
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              Les surfaces, plans, descriptifs, loyers, prix ou disponibilités
              des biens immobiliers présentés sont communiqués sur la base des
              informations transmises par les propriétaires, exploitants ou
              partenaires et ne constituent pas un engagement contractuel.
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              La société ESRre ne saurait être tenue responsable
              d&apos;éventuelles erreurs, omissions ou modifications concernant
              ces informations. Les utilisateurs sont invités à vérifier les
              informations auprès de la société ESRre avant toute prise de
              décision ou engagement.
            </p>
          </section>

          {/* Visuels et documents */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              Visuels et documents
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Les photographies, illustrations, plans et visuels présentés sur
              le site sont fournis à titre illustratif et ne sont pas
              contractuels. Ils ont pour objectif de donner une représentation
              générale des biens ou projets présentés.
            </p>
          </section>

          {/* Études de marché */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              Études de marché
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Les analyses, études et données de marché publiées sur le site
              sont établies à partir de sources considérées comme fiables.
              Toutefois, ces informations sont fournies à titre informatif et
              ne constituent ni un conseil d&apos;investissement ni une
              recommandation contractuelle. La société ESRre décline toute
              responsabilité quant aux décisions prises sur la base de ces
              informations.
            </p>
          </section>

          {/* Disponibilité */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              Disponibilité des biens
            </h2>
            <p className="text-slate-600 leading-relaxed">
              La disponibilité des biens immobiliers présentés sur le site est
              susceptible d&apos;évoluer à tout moment. La publication
              d&apos;un bien immobilier sur le site ne constitue pas une offre
              ferme ou contractuelle.
            </p>
          </section>

          {/* Informations ESG */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              Informations environnementales et ESG
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Les informations relatives aux performances environnementales,
              énergétiques, sociales ou de gouvernance (ESG) présentées sur le
              site sont communiquées à titre informatif. Ces informations
              peuvent provenir de propriétaires, exploitants, promoteurs,
              partenaires techniques ou documents réglementaires.
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              Les données relatives aux performances environnementales ou
              énergétiques des biens immobiliers (diagnostics énergétiques,
              certifications, performances carbone, indicateurs ESG) sont
              fournies à titre indicatif et peuvent évoluer en fonction des
              audits techniques, rénovations ou de l&apos;évolution de la
              réglementation.
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              Les analyses ou études relatives aux thématiques ESG sont établies
              à partir de sources considérées comme fiables mais sont fournies
              à titre informatif et ne constituent ni un conseil
              d&apos;investissement, ni un engagement contractuel.
            </p>
          </section>

          {/* Médiation */}
          <section>
            <h2 className="text-xl font-bold text-navy-800 mb-4">
              Médiation de la consommation
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Conformément aux articles L.612-1 et suivants du Code de la
              consommation, le consommateur a la possibilité de recourir
              gratuitement au service de médiation proposé par&nbsp;:
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              <strong>ANM Conso</strong> — Association Nationale des Médiateurs
              <br />
              2 rue de Colmar, 94300 Vincennes
              <br />
              <a
                href="https://www.anm-conso.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-600 hover:text-navy-800 underline"
              >
                www.anm-conso.com
              </a>
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
