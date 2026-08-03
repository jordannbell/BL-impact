import Link from "next/link";

export const metadata = {
  title: "Recrutement",
  description: "Rejoindre BL IMPACT : candidatures spontanees pour le cabinet de conseil en strategie.",
};

export default function Recrutement() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Accueil</Link> / Recrutement</div>
          <h1>Recrutement</h1>
          <p>BL IMPACT est une structure en construction : nous sommes ouverts aux candidatures spontanees.</p>
        </div>
      </section>
      <section>
        <div className="container two-col">
          <div>
            <h2 className="section-title">Rejoindre BL IMPACT</h2>
            <p>
              BL IMPACT est un cabinet de conseil en strategie nouvellement cree,
              avec l&apos;ambition de constituer progressivement une equipe de
              consultants exigeants, autonomes et orientes resultats.
            </p>
            <ul className="check-list">
              <li>Une structure a taille humaine, en phase de construction</li>
              <li>Des missions variees en conseil en strategie</li>
              <li>Une reelle autonomie et une proximite avec la direction</li>
              <li>L&apos;opportunite de participer a la construction d&apos;un cabinet des son origine</li>
            </ul>
            <p>
              Aucun poste precis n&apos;est ouvert a ce jour, mais BL IMPACT etudie avec
              attention toute candidature spontanee en lien avec le conseil en strategie.
            </p>
            <Link className="btn" href="/contact">Envoyer une candidature spontanee</Link>
          </div>
          <div className="callout">
            <strong>Profil recherche</strong>
            <br /><br />
            Consultant(e) en strategie, junior ou experimente(e), avec un gout pour
            l&apos;analyse, la rigueur et le contact direct avec les dirigeants.
          </div>
        </div>
      </section>
    </>
  );
}
