import Link from "next/link";

export const metadata = {
  title: "Services",
  description: "Diagnostic stratégique, élaboration de la stratégie, mise en œuvre et pilotage de la performance : les services de BL IMPACT en transformation documentaire.",
};

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Accueil</Link> / Services</div>
          <h1>Nos services</h1>
          <p>Un accompagnement structuré, du diagnostic de vos flux jusqu&apos;au pilotage des résultats.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <p className="section-sub">
            BL IMPACT organise son offre autour de quatre étapes clés de la
            transformation documentaire et de la communication client. Chaque
            mission peut être menée de façon autonome ou s&apos;inscrire dans un
            accompagnement de bout en bout.
          </p>
          <div className="grid">
            <div className="card">
              <div className="num">1</div>
              <h3><Link href="/services/diagnostic-strategique">Diagnostic stratégique</Link></h3>
              <p>Analyse des flux entrants et sortants, audit des outils de production documentaire et des canaux de communication avant toute recommandation.</p>
            </div>
            <div className="card">
              <div className="num">2</div>
              <h3><Link href="/services/elaboration-strategie">Élaboration de la stratégie</Link></h3>
              <p>Étude d&apos;opportunité, construction de scénarios de transformation hiérarchisés, arbitrage et formalisation de la feuille de route.</p>
            </div>
            <div className="card">
              <div className="num">3</div>
              <h3><Link href="/services/mise-en-oeuvre">Accompagnement à la mise en œuvre</Link></h3>
              <p>AMOA, rédaction des spécifications, pilotage de projet et accompagnement du changement jusqu&apos;au déploiement.</p>
            </div>
            <div className="card">
              <div className="num">4</div>
              <h3><Link href="/services/pilotage-performance">Pilotage de la performance</Link></h3>
              <p>Définition d&apos;indicateurs de suivi des coûts, des délais et de la traçabilité, et pilotage dans la durée des résultats obtenus.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="container">
          <h2 className="section-title">Vous cherchez une solution pour votre entreprise ?</h2>
          <p className="section-sub">
            BL IMPACT vous accompagne. Bon à savoir : vous pouvez dès à présent
            nous préciser les éléments suivants pour accélérer notre premier échange.
          </p>
          <ul className="check-list">
            <li>Quel est votre volume mensuel et/ou annuel de documents à traiter ?</li>
            <li>Quel est l&apos;objectif principal : réduire les coûts d&apos;impression, automatiser des validations internes, vous conformer à la facturation électronique ?</li>
            <li>Quels logiciels métiers (ERP, CRM) la solution devra-t-elle intégrer ?</li>
          </ul>
          <Link className="btn" href="/contact">Nous transmettre ces informations</Link>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2 className="section-title">Une question sur nos services ?</h2>
          <p>Nous pouvons adapter chaque étape au volume de flux et aux moyens de votre organisation.</p>
          <Link className="btn" href="/contact">Contacter BL IMPACT</Link>
        </div>
      </section>
    </>
  );
}
