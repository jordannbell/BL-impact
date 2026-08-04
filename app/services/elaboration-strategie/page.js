import Link from "next/link";

export const metadata = {
  title: "Elaboration de la strategie",
  description: "L'elaboration de la strategie avec BL IMPACT : etude d'opportunite, scenarios de transformation documentaire et feuille de route.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Accueil</Link> / <Link href="/services">Services</Link> / Elaboration de la strategie</div>
          <h1>Elaboration de la strategie</h1>
        </div>
      </section>
      <section>
        <div className="container two-col">
          <div>
            <p>Sur la base du diagnostic, BL IMPACT etudie avec la direction les scenarios de transformation possibles (dematerialisation, refonte des outils, industrialisation de la production) et en evalue les impacts avant l&apos;arbitrage final.</p>
            <ul className="check-list">
              <li>Etude d&apos;opportunite et de faisabilite des scenarios de transformation</li>
              <li>Choix de la cible fonctionnelle et technique (gestion electronique des documents, communication multicanale, edition)</li>
              <li>Evaluation des impacts economiques et organisationnels de chaque scenario</li>
              <li>Formalisation de la feuille de route et du plan de transformation</li>
            </ul>
            <p>L&apos;objectif : aboutir a une strategie de transformation claire, chiffree et reellement actionnable par les equipes.</p>
          </div>
          <div className="callout">
            <strong>Valeur ajoutee BL IMPACT</strong>
            <br /><br />
            Des scenarios batis avec vos equipes et evalues sur leur impact reel
            en termes de couts, de delais et de simplicite d&apos;usage.
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="container">
          <h2 className="section-title">Echanger sur ce service</h2>
          <Link className="btn" href="/contact">Prendre contact</Link>
        </div>
      </section>
    </>
  );
}
