import Link from "next/link";

export const metadata = {
  title: "Services",
  description: "Diagnostic strategique, elaboration de la strategie, mise en oeuvre et pilotage de la performance : les services de BL IMPACT en transformation documentaire.",
};

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Accueil</Link> / Services</div>
          <h1>Nos services</h1>
          <p>Un accompagnement structure, du diagnostic de vos flux jusqu&apos;au pilotage des resultats.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <p className="section-sub">
            BL IMPACT organise son offre autour de quatre etapes cles de la
            transformation documentaire et de la communication client. Chaque
            mission peut etre menee de facon autonome ou s&apos;inscrire dans un
            accompagnement de bout en bout.
          </p>
          <div className="grid">
            <div className="card">
              <div className="num">1</div>
              <h3><Link href="/services/diagnostic-strategique">Diagnostic strategique</Link></h3>
              <p>Analyse des flux entrants et sortants, audit des outils de production documentaire et des canaux de communication avant toute recommandation.</p>
            </div>
            <div className="card">
              <div className="num">2</div>
              <h3><Link href="/services/elaboration-strategie">Elaboration de la strategie</Link></h3>
              <p>Etude d&apos;opportunite, construction de scenarios de transformation hierarchises, arbitrage et formalisation de la feuille de route.</p>
            </div>
            <div className="card">
              <div className="num">3</div>
              <h3><Link href="/services/mise-en-oeuvre">Accompagnement a la mise en oeuvre</Link></h3>
              <p>AMOA, redaction des specifications, pilotage de projet et accompagnement du changement jusqu&apos;au deploiement.</p>
            </div>
            <div className="card">
              <div className="num">4</div>
              <h3><Link href="/services/pilotage-performance">Pilotage de la performance</Link></h3>
              <p>Definition d&apos;indicateurs de suivi des couts, des delais et de la tracabilite, et pilotage dans la duree des resultats obtenus.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2 className="section-title">Une question sur nos services ?</h2>
          <p>Nous pouvons adapter chaque etape au volume de flux et aux moyens de votre organisation.</p>
          <Link className="btn" href="/contact">Contacter BL IMPACT</Link>
        </div>
      </section>
    </>
  );
}
