import Link from "next/link";

export const metadata = {
  title: "Elaboration de la strategie",
  description: "L'elaboration de la strategie avec BL IMPACT : scenarios, arbitrages et plan strategique.",
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
            <p>Sur la base du diagnostic, BL IMPACT construit avec la direction plusieurs scenarios strategiques, en evalue les impacts et accompagne l&apos;arbitrage final.</p>
            <ul className="check-list">
              <li>Construction de scenarios strategiques differencies</li>\n              <li>Evaluation des impacts economiques et organisationnels de chaque scenario</li>\n              <li>Aide a la decision et a l&apos;arbitrage en comite de direction</li>\n              <li>Formalisation du plan strategique et de sa feuille de route</li>
            </ul>
            <p>L&apos;objectif : aboutir a une strategie claire, partagee et reellement actionnable par les equipes.</p>
          </div>
          <div className="callout">
            <strong>Valeur ajoutee BL IMPACT</strong>
            <br /><br />
            Un accompagnement direct par le fondateur du cabinet, une lecture
            independante de votre contexte et des recommandations pensees pour etre
            reellement mises en oeuvre.
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
