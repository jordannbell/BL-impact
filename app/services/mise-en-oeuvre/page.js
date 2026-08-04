import Link from "next/link";

export const metadata = {
  title: "Accompagnement a la mise en oeuvre",
  description: "BL IMPACT accompagne la mise en oeuvre operationnelle des projets de transformation documentaire, de l'AMOA au deploiement.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Accueil</Link> / <Link href="/services">Services</Link> / Accompagnement a la mise en oeuvre</div>
          <h1>Accompagnement a la mise en oeuvre</h1>
        </div>
      </section>
      <section>
        <div className="container two-col">
          <div>
            <p>Une strategie de transformation documentaire ne prend sa valeur que dans son execution. BL IMPACT accompagne le cadrage, le pilotage et le deploiement des projets, jusqu&apos;a leur mise en production.</p>
            <ul className="check-list">
              <li>Assistance a maitrise d&apos;ouvrage : expression des besoins et animation d&apos;ateliers</li>
              <li>Redaction des specifications et des cahiers des charges</li>
              <li>Direction de projet et pilotage (PMO) jusqu&apos;a la recette</li>
              <li>Plans de deploiement et accompagnement du changement aupres des equipes</li>
            </ul>
            <p>BL IMPACT reste engage au-dela de la phase de recommandation, jusqu&apos;a la mise en service effective des nouveaux processus.</p>
          </div>
          <div className="callout">
            <strong>Valeur ajoutee BL IMPACT</strong>
            <br /><br />
            Un accompagnement direct par le fondateur du cabinet jusqu&apos;au
            deploiement effectif, au plus pres des equipes operationnelles.
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
