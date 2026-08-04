import Link from "next/link";

export const metadata = {
  title: "Expertises",
  description: "Les types d'organisations accompagnés par BL IMPACT sur leurs flux documentaires : grands comptes, PME et ETI, secteur public et associations.",
};

export default function Expertises() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Accueil</Link> / Expertises</div>
          <h1>Nos expertises</h1>
          <p>Un accompagnement adapté à la taille et à la nature de chaque organisation.</p>
        </div>
      </section>
      <section>
        <div className="container">
          <p className="section-sub">
            BL IMPACT adapte sa méthodologie de conseil en transformation
            documentaire au contexte propre de chaque type d&apos;organisation,
            avec une même exigence de résultat.
          </p>
          <div className="grid">
            <div className="card">
              <h3><Link href="/expertises/grands-comptes">Grands comptes</Link></h3>
              <p>Accompagnement des directions générales et directions métier de grandes organisations dans la refonte de leurs flux documentaires et de leur communication client.</p>
            </div>
            <div className="card">
              <h3><Link href="/expertises/pme-eti">PME et ETI</Link></h3>
              <p>Conseil en structuration des processus documentaires et de communication pour les dirigeants de PME et d&apos;ETI en croissance.</p>
            </div>
            <div className="card">
              <h3><Link href="/expertises/secteur-public">Secteur public et associations</Link></h3>
              <p>Accompagnement d&apos;organisations publiques et associatives dans l&apos;optimisation de leurs flux documentaires, dans un contexte de ressources contraintes.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
