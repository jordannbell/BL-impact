import Link from "next/link";

export const metadata = {
  title: "Secteur public et associations",
  description: "BL IMPACT accompagne les organisations publiques et associatives dans leurs projets strategiques.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Accueil</Link> / <Link href="/expertises">Expertises</Link> / Secteur public et associations</div>
          <h1>Secteur public et associations</h1>
        </div>
      </section>
      <section>
        <div className="container two-col">
          <div>
            <p>BL IMPACT accompagne les organisations publiques et associatives dans la definition et la mise en oeuvre de leur strategie, dans un contexte de ressources contraintes et d&apos;exigence de bon usage des moyens.</p>
            <ul className="check-list">
              <li>Diagnostic strategique adapte aux contraintes de gouvernance publique ou associative</li>\n              <li>Aide a la priorisation des actions dans un cadre de ressources limitees</li>\n              <li>Accompagnement du changement aupres des equipes et des parties prenantes</li>\n              <li>Mise en place d&apos;indicateurs de suivi de l&apos;impact des actions menees</li>
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
