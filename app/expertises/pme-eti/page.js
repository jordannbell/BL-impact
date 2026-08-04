import Link from "next/link";

export const metadata = {
  title: "PME et ETI",
  description: "BL IMPACT accompagne les dirigeants de PME et d'ETI dans la structuration de leurs flux documentaires et de leur communication.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Accueil</Link> / <Link href="/expertises">Expertises</Link> / PME et ETI</div>
          <h1>PME et ETI</h1>
        </div>
      </section>
      <section>
        <div className="container two-col">
          <div>
            <p>Pour les dirigeants de PME et d&apos;ETI, BL IMPACT propose un accompagnement dimensionné aux moyens de l&apos;entreprise, centré sur la simplification des flux documentaires et la fiabilisation de la communication client.</p>
            <ul className="check-list">
              <li>Diagnostic des processus documentaires existants et des coûts associés</li>
              <li>Structuration des outils et des flux pour accompagner la croissance</li>
              <li>Appui à la décision dans un contexte de ressources limitées</li>
              <li>Mise en place d&apos;indicateurs de suivi simples et actionnables</li>
            </ul>
          </div>
          <div className="callout">
            <strong>Notre approche</strong>
            <br /><br />
            Une même méthodologie rigoureuse, adaptée aux contraintes de gouvernance,
            de ressources et de temps propres à chaque type d&apos;organisation.
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="container">
          <h2 className="section-title">Discutons de votre contexte</h2>
          <Link className="btn" href="/contact">Prendre contact</Link>
        </div>
      </section>
    </>
  );
}
