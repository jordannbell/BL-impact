import Link from "next/link";

export const metadata = {
  title: "Services",
  description: "Diagnostic strategique, elaboration de la strategie, mise en oeuvre et pilotage de la performance : les services de BL IMPACT.",
};

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Accueil</Link> / Services</div>
          <h1>Nos services</h1>
          <p>Un accompagnement structure, du diagnostic initial jusqu&apos;au pilotage des resultats.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <p className="section-sub">
            BL IMPACT organise son offre autour de quatre etapes cles du conseil en
            strategie. Chaque mission peut etre menee de facon autonome ou s&apos;inscrire
            dans un accompagnement de bout en bout.
          </p>
          <div className="grid">
            <div className="card">
              <div className="num">1</div>
              <h3><Link href="/services/diagnostic-strategique">Diagnostic strategique</Link></h3>
              <p>Analyse du marche, de la concurrence, de l&apos;organisation et des enjeux internes avant toute recommandation.</p>
            </div>
            <div className="card">
              <div className="num">2</div>
              <h3><Link href="/services/elaboration-strategie">Elaboration de la strategie</Link></h3>
              <p>Construction de scenarios strategiques hierarchises, arbitrage et formalisation du plan strategique.</p>
            </div>
            <div className="card">
              <div className="num">3</div>
              <h3><Link href="/services/mise-en-oeuvre">Accompagnement a la mise en oeuvre</Link></h3>
              <p>Traduction de la strategie en plans d&apos;action operationnels et accompagnement du changement.</p>
            </div>
            <div className="card">
              <div className="num">4</div>
              <h3><Link href="/services/pilotage-performance">Pilotage de la performance</Link></h3>
              <p>Definition d&apos;indicateurs de suivi et pilotage dans la duree des resultats obtenus.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2 className="section-title">Une question sur nos services ?</h2>
          <p>Nous pouvons adapter chaque etape a la maturite et aux moyens de votre organisation.</p>
          <Link className="btn" href="/contact">Contacter BL IMPACT</Link>
        </div>
      </section>
    </>
  );
}
