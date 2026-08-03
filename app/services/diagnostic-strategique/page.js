import Link from "next/link";

export const metadata = {
  title: "Diagnostic strategique",
  description: "Le diagnostic strategique BL IMPACT : audit de marche, d'organisation et des enjeux internes.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Accueil</Link> / <Link href="/services">Services</Link> / Diagnostic strategique</div>
          <h1>Diagnostic strategique</h1>
        </div>
      </section>
      <section>
        <div className="container two-col">
          <div>
            <p>Avant toute recommandation, BL IMPACT construit une comprehension fine du contexte de votre organisation : marche, positionnement concurrentiel, modele economique et fonctionnement interne.</p>
            <ul className="check-list">
              <li>Analyse du marche et de la dynamique concurrentielle</li>\n              <li>Audit de l&apos;organisation et des processus de decision</li>\n              <li>Identification des enjeux et des risques strategiques</li>\n              <li>Entretiens avec les parties prenantes cles</li>\n              <li>Synthese et restitution argumentee a la direction</li>
            </ul>
            <p>Ce diagnostic constitue le socle sur lequel s&apos;appuie l&apos;ensemble de la demarche strategique proposee par la suite.</p>
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
