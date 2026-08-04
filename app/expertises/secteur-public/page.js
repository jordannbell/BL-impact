import Link from "next/link";

export const metadata = {
  title: "Secteur public et associations",
  description: "BL IMPACT accompagne les organisations publiques et associatives dans l'optimisation de leurs flux documentaires.",
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
            <p>BL IMPACT accompagne les organisations publiques et associatives dans l&apos;optimisation de leurs processus documentaires et de leur communication avec les usagers, dans un contexte de ressources contraintes et d&apos;exigence de bon usage des moyens.</p>
            <ul className="check-list">
              <li>Diagnostic des flux documentaires adapte aux contraintes de gouvernance publique ou associative</li>
              <li>Aide a la priorisation des actions dans un cadre de ressources limitees</li>
              <li>Accompagnement du changement aupres des equipes et des usagers</li>
              <li>Mise en place d&apos;indicateurs de suivi de l&apos;impact et de la tracabilite des communications</li>
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
