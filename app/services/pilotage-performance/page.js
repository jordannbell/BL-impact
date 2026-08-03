import Link from "next/link";

export const metadata = {
  title: "Pilotage de la performance",
  description: "BL IMPACT met en place les outils de pilotage et de suivi de la performance strategique.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Accueil</Link> / <Link href="/services">Services</Link> / Pilotage de la performance</div>
          <h1>Pilotage de la performance</h1>
        </div>
      </section>
      <section>
        <div className="container two-col">
          <div>
            <p>Pour perenniser les resultats, BL IMPACT aide a definir les indicateurs pertinents et les outils de pilotage permettant de suivre l&apos;atteinte des objectifs strategiques dans la duree.</p>
            <ul className="check-list">
              <li>Definition d&apos;indicateurs de performance adaptes aux objectifs</li>\n              <li>Mise en place de tableaux de bord de suivi</li>\n              <li>Revues de performance periodiques avec la direction</li>\n              <li>Recommandations correctives en cas d&apos;ecart aux objectifs</li>
            </ul>
            <p>Le pilotage de la performance permet de transformer une decision strategique ponctuelle en trajectoire durable.</p>
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
