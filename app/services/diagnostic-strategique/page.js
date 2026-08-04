import Link from "next/link";

export const metadata = {
  title: "Diagnostic strategique",
  description: "Le diagnostic strategique BL IMPACT : audit des flux documentaires, des outils et des canaux de communication.",
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
            <p>Avant toute recommandation, BL IMPACT construit une comprehension fine de vos processus documentaires et de votre communication client : flux entrants et sortants, outils en place, organisation de la production et parcours associe.</p>
            <ul className="check-list">
              <li>Cartographie des flux entrants (courrier, email, formulaires, signatures) et sortants (edition, envoi, archivage)</li>
              <li>Audit des outils de production documentaire et des canaux de diffusion existants</li>
              <li>Identification des couts, des delais et des points de rupture dans le parcours client</li>
              <li>Entretiens avec les equipes operationnelles et les parties prenantes cles</li>
              <li>Synthese et restitution argumentee a la direction</li>
            </ul>
            <p>Ce diagnostic constitue le socle sur lequel s&apos;appuie l&apos;ensemble de la demarche de transformation proposee par la suite.</p>
          </div>
          <div className="callout">
            <strong>Valeur ajoutee BL IMPACT</strong>
            <br /><br />
            Un regard exterieur et independant sur vos flux actuels, sans parti
            pris pour un editeur de solutions ou un prestataire en particulier.
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
