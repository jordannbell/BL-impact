import Link from "next/link";

export const metadata = {
  title: "Pilotage de la performance",
  description: "BL IMPACT met en place les outils de pilotage, de suivi des couts et de tracabilite des communications multicanales.",
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
            <p>Pour perenniser les resultats, BL IMPACT aide a definir les indicateurs et les outils de suivi permettant de mesurer la performance et la tracabilite de vos communications dans la duree.</p>
            <ul className="check-list">
              <li>Definition d&apos;indicateurs de suivi des couts, des delais et des volumes de flux</li>
              <li>Mise en place de tableaux de bord et d&apos;outils de tracabilite des communications multicanales</li>
              <li>Revues de performance periodiques avec la direction</li>
              <li>Recommandations correctives en cas d&apos;ecart aux objectifs</li>
            </ul>
            <p>Le pilotage de la performance permet de transformer une refonte ponctuelle en amelioration continue des flux.</p>
          </div>
          <div className="callout">
            <strong>Valeur ajoutee BL IMPACT</strong>
            <br /><br />
            Des indicateurs simples, penses pour etre suivis dans la duree par
            vos equipes, et non uniquement lors d&apos;un audit ponctuel.
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
