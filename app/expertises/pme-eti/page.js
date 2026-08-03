import Link from "next/link";

export const metadata = {
  title: "PME et ETI",
  description: "BL IMPACT accompagne les dirigeants de PME et d'ETI dans leur strategie de croissance.",
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
            <p>Pour les dirigeants de PME et d&apos;ETI, BL IMPACT propose un accompagnement strategique dimensionne aux moyens de l&apos;entreprise, centre sur les leviers de croissance, de structuration et de competitivite.</p>
            <ul className="check-list">
              <li>Definition d&apos;une strategie de croissance et de developpement</li>\n              <li>Structuration de l&apos;organisation pour accompagner la croissance</li>\n              <li>Appui a la decision dans un contexte de ressources limitees</li>\n              <li>Mise en place d&apos;indicateurs de pilotage simples et actionnables</li>
            </ul>
          </div>
          <div className="callout">
            <strong>Notre approche</strong>
            <br /><br />
            Une meme methodologie rigoureuse, adaptee aux contraintes de gouvernance,
            de ressources et de temps propres a chaque type d&apos;organisation.
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
