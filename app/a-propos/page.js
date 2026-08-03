import Link from "next/link";

export const metadata = {
  title: "A propos",
  description: "Histoire, mission et valeurs de BL IMPACT, cabinet de conseil en strategie fonde par Didier Mbom.",
};

export default function APropos() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Accueil</Link> / A propos</div>
          <h1>A propos de BL IMPACT</h1>
          <p>Un cabinet de conseil en strategie recemment cree, avec une ambition claire : faire de chaque mission un levier d&apos;impact reel.</p>
        </div>
      </section>

      <section>
        <div className="container two-col">
          <div>
            <h2 className="section-title">Notre histoire</h2>
            <p>
              BL IMPACT est un cabinet de conseil en strategie fonde a Paris par
              Didier Mbom. Ne de la conviction que les organisations, quelle que
              soit leur taille, ont besoin d&apos;un accompagnement strategique exigeant
              mais accessible, BL IMPACT se positionne comme un partenaire de
              conseil independant, engage aux cotes de ses clients du diagnostic
              jusqu&apos;aux resultats mesurables.
            </p>
            <p>
              En tant que structure nouvellement creee, BL IMPACT fait le choix de
              la proximite : chaque mission est suivie directement par son fondateur
              et une equipe resserree, sans dilution de responsabilite.
            </p>
            <h2 className="section-title" style={{ marginTop: 36 }}>Notre mission</h2>
            <p>
              Aider les dirigeants a transformer une intention strategique en
              decisions concretes, puis ces decisions en resultats mesurables :
              c&apos;est la raison d&apos;etre de BL IMPACT.
            </p>
          </div>
          <div>
            <div className="card" style={{ marginBottom: 24 }}>
              <h3>Fondateur</h3>
              <p><strong>Didier Mbom</strong><br />Fondateur et Directeur de BL IMPACT</p>
              <p style={{ marginTop: 10 }}>
                Didier Mbom a fonde BL IMPACT avec la volonte de mettre le conseil
                en strategie au service d&apos;une execution concrete et mesurable.
                <em> (Parcours et references professionnelles a completer.)</em>
              </p>
            </div>
            <div className="card">
              <h3>En bref</h3>
              <ul className="check-list" style={{ margin: 0 }}>
                <li>Cabinet independant</li>
                <li>Base a Paris</li>
                <li>Conseil en strategie</li>
                <li>Accompagnement personnalise</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="container">
          <h2 className="section-title">Nos valeurs</h2>
          <div className="grid">
            <div className="card"><h3>Independance</h3><p>Des recommandations fondees uniquement sur l&apos;interet du client, sans lien avec un editeur, un fournisseur ou un partenaire tiers.</p></div>
            <div className="card"><h3>Exigence</h3><p>Une rigueur d&apos;analyse et une discipline de mise en oeuvre qui ne transigent pas sur la qualite du travail rendu.</p></div>
            <div className="card"><h3>Proximite</h3><p>Un accompagnement direct, sans intermediaire, pour une relation de confiance construite dans la duree.</p></div>
            <div className="card"><h3>Impact</h3><p>La valeur du conseil se mesure aux resultats obtenus sur le terrain, pas au nombre de pages d&apos;un rapport.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
