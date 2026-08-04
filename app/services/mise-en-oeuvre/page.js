import Link from "next/link";

export const metadata = {
  title: "Accompagnement à la mise en œuvre",
  description: "BL IMPACT accompagne la mise en œuvre opérationnelle des projets de transformation documentaire, de l'AMOA au déploiement.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Accueil</Link> / <Link href="/services">Services</Link> / Accompagnement à la mise en œuvre</div>
          <h1>Accompagnement à la mise en œuvre</h1>
        </div>
      </section>
      <section>
        <div className="container two-col">
          <div>
            <p>Une stratégie de transformation documentaire ne prend sa valeur que dans son exécution. BL IMPACT accompagne le cadrage, le pilotage et le déploiement des projets, jusqu&apos;à leur mise en production.</p>
            <ul className="check-list">
              <li>Assistance à maîtrise d&apos;ouvrage : expression des besoins et animation d&apos;ateliers</li>
              <li>Rédaction des spécifications et des cahiers des charges</li>
              <li>Direction de projet et pilotage (PMO) jusqu&apos;à la recette</li>
              <li>Plans de déploiement et accompagnement du changement auprès des équipes</li>
            </ul>
            <p>BL IMPACT reste engagé au-delà de la phase de recommandation, jusqu&apos;à la mise en service effective des nouveaux processus.</p>
          </div>
          <div className="callout">
            <strong>Valeur ajoutée BL IMPACT</strong>
            <br /><br />
            Un accompagnement direct par le fondateur du cabinet jusqu&apos;au
            déploiement effectif, au plus près des équipes opérationnelles.
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
