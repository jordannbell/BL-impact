import Link from "next/link";

export const metadata = {
  title: "Expertises",
  description: "Les types d'organisations accompagnes par BL IMPACT : grands comptes, PME et ETI, secteur public et associations.",
};

export default function Expertises() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Accueil</Link> / Expertises</div>
          <h1>Nos expertises</h1>
          <p>Un accompagnement adapte a la taille et a la nature de chaque organisation.</p>
        </div>
      </section>
      <section>
        <div className="container">
          <p className="section-sub">
            BL IMPACT adapte sa methodologie de conseil en strategie au contexte
            propre de chaque type d&apos;organisation, avec une meme exigence de resultat.
          </p>
          <div className="grid">
            <div className="card">
              <h3><Link href="/expertises/grands-comptes">Grands comptes</Link></h3>
              <p>Accompagnement strategique de directions generales et de directions metier au sein de grandes organisations.</p>
            </div>
            <div className="card">
              <h3><Link href="/expertises/pme-eti">PME et ETI</Link></h3>
              <p>Conseil en strategie de croissance et de structuration pour les dirigeants de PME et d&apos;ETI.</p>
            </div>
            <div className="card">
              <h3><Link href="/expertises/secteur-public">Secteur public et associations</Link></h3>
              <p>Accompagnement strategique d&apos;organisations publiques et associatives dans un contexte de ressources contraintes.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
