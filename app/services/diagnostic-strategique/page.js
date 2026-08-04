import Link from "next/link";

export const metadata = {
  title: "Diagnostic stratégique",
  description: "Le diagnostic stratégique BL IMPACT : audit des flux documentaires, des outils et des canaux de communication.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Accueil</Link> / <Link href="/services">Services</Link> / Diagnostic stratégique</div>
          <h1>Diagnostic stratégique</h1>
        </div>
      </section>
      <section>
        <div className="container two-col">
          <div>
            <p>Avant toute recommandation, BL IMPACT construit une compréhension fine de vos processus documentaires et de votre communication client : flux entrants et sortants, outils en place, organisation de la production et parcours associé.</p>
            <ul className="check-list">
              <li>Cartographie des flux entrants (courrier, email, formulaires, signatures) et sortants (édition, envoi, archivage)</li>
              <li>Audit des outils de production documentaire et des canaux de diffusion existants</li>
              <li>Identification des coûts, des délais et des points de rupture dans le parcours client</li>
              <li>Entretiens avec les équipes opérationnelles et les parties prenantes clés</li>
              <li>Synthèse et restitution argumentée à la direction</li>
            </ul>
            <p>Ce diagnostic constitue le socle sur lequel s&apos;appuie l&apos;ensemble de la démarche de transformation proposée par la suite.</p>
          </div>
          <div className="callout">
            <strong>Valeur ajoutée BL IMPACT</strong>
            <br /><br />
            Un regard extérieur et indépendant sur vos flux actuels, sans parti
            pris pour un éditeur de solutions ou un prestataire en particulier.
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
