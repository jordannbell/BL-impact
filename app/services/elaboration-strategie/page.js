import Link from "next/link";

export const metadata = {
  title: "Élaboration de la stratégie",
  description: "L'élaboration de la stratégie avec BL IMPACT : étude d'opportunité, scénarios de transformation documentaire et feuille de route.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Accueil</Link> / <Link href="/services">Services</Link> / Élaboration de la stratégie</div>
          <h1>Élaboration de la stratégie</h1>
        </div>
      </section>
      <section>
        <div className="container two-col">
          <div>
            <p>Sur la base du diagnostic, BL IMPACT étudie avec la direction les scénarios de transformation possibles (dématérialisation, refonte des outils, industrialisation de la production) et en évalue les impacts avant l&apos;arbitrage final.</p>
            <ul className="check-list">
              <li>Étude d&apos;opportunité et de faisabilité des scénarios de transformation</li>
              <li>Choix de la cible fonctionnelle et technique (gestion électronique des documents, communication multicanale, édition)</li>
              <li>Évaluation des impacts économiques et organisationnels de chaque scénario</li>
              <li>Formalisation de la feuille de route et du plan de transformation</li>
            </ul>
            <p>L&apos;objectif : aboutir à une stratégie de transformation claire, chiffrée et réellement actionnable par les équipes.</p>
          </div>
          <div className="callout">
            <strong>Valeur ajoutée BL IMPACT</strong>
            <br /><br />
            Des scénarios bâtis avec vos équipes et évalués sur leur impact réel
            en termes de coûts, de délais et de simplicité d&apos;usage.
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="container">
          <h2 className="section-title">Échanger sur ce service</h2>
          <Link className="btn" href="/contact">Prendre contact</Link>
        </div>
      </section>
    </>
  );
}
