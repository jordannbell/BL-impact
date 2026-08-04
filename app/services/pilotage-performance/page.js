import Link from "next/link";

export const metadata = {
  title: "Pilotage de la performance",
  description: "BL IMPACT met en place les outils de pilotage, de suivi des coûts et de traçabilité des communications multicanales.",
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
            <p>Pour pérenniser les résultats, BL IMPACT aide à définir les indicateurs et les outils de suivi permettant de mesurer la performance et la traçabilité de vos communications dans la durée.</p>
            <ul className="check-list">
              <li>Définition d&apos;indicateurs de suivi des coûts, des délais et des volumes de flux</li>
              <li>Mise en place de tableaux de bord et d&apos;outils de traçabilité des communications multicanales</li>
              <li>Revues de performance périodiques avec la direction</li>
              <li>Recommandations correctives en cas d&apos;écart aux objectifs</li>
            </ul>
            <p>Le pilotage de la performance permet de transformer une refonte ponctuelle en amélioration continue des flux.</p>
          </div>
          <div className="callout">
            <strong>Valeur ajoutée BL IMPACT</strong>
            <br /><br />
            Des indicateurs simples, pensés pour être suivis dans la durée par
            vos équipes, et non uniquement lors d&apos;un audit ponctuel.
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
