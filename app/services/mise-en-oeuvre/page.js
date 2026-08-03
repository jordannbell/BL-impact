import Link from "next/link";

export const metadata = {
  title: "Accompagnement a la mise en oeuvre",
  description: "BL IMPACT accompagne la mise en oeuvre operationnelle des plans strategiques.",
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
            <p>Une strategie ne prend sa valeur que dans son execution. BL IMPACT accompagne la traduction du plan strategique en actions concretes et suit son deploiement aupres des equipes.</p>
            <ul className="check-list">
              <li>Declinaison de la strategie en plans d&apos;action operationnels</li>\n              <li>Definition des priorites et du sequencement des chantiers</li>\n              <li>Accompagnement du changement aupres des equipes</li>\n              <li>Suivi de l&apos;avancement et ajustements en cours de deploiement</li>
            </ul>
            <p>BL IMPACT reste engage au-dela de la phase de recommandation, jusqu&apos;a la mise en oeuvre effective des decisions.</p>
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
