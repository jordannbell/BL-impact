import Link from "next/link";

export const metadata = {
  title: "À propos",
  description: "Histoire, mission et valeurs de BL IMPACT, cabinet de conseil en transformation documentaire fondé par Didier Mbom.",
};

export default function APropos() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Accueil</Link> / À propos</div>
          <h1>À propos de BL IMPACT</h1>
          <p>Un cabinet de conseil en transformation documentaire récemment créé, avec une ambition claire : simplifier et fiabiliser les flux d&apos;information de chaque organisation accompagnée.</p>
        </div>
      </section>

      <section>
        <div className="container two-col">
          <div>
            <h2 className="section-title">Notre histoire</h2>
            <p>
              BL IMPACT est un cabinet de conseil, spécialisé dans la
              transformation des processus documentaires et de
              la communication client. Né de la conviction que les organisations,
              quelle que soit leur taille, ont besoin d&apos;un accompagnement
              exigeant mais accessible pour fiabiliser leurs flux d&apos;information,
              BL IMPACT se positionne comme un partenaire indépendant, engagé aux
              côtés de ses clients du diagnostic jusqu&apos;aux résultats mesurables.
            </p>
            <p>
              En tant que structure nouvellement créée, BL IMPACT fait le choix de
              la proximité : chaque mission est suivie directement par son fondateur
              et une équipe resserrée, sans dilution de responsabilité.
            </p>
            <h2 className="section-title" style={{ marginTop: 36 }}>Notre mission</h2>
            <p>
              Aider les dirigeants à transformer des flux documentaires complexes
              et coûteux en processus simples, traçables et mesurables : c&apos;est
              la raison d&apos;être de BL IMPACT.
            </p>
          </div>
          <div>
            <div className="card" style={{ marginBottom: 24 }}>
              <h3>Fondateur</h3>
              <p><strong>Didier Mbom</strong><br />Fondateur et Directeur de BL IMPACT</p>
              <p style={{ marginTop: 10 }}>
                Didier Mbom a fondé BL IMPACT avec la volonté de mettre le conseil
                en transformation documentaire au service d&apos;une exécution
                concrète et mesurable.
                <em> (Parcours et références professionnelles à compléter.)</em>
              </p>
            </div>
            <div className="card">
              <h3>En bref</h3>
              <ul className="check-list" style={{ margin: 0 }}>
                <li>Cabinet indépendant</li>
                <li>Basé en Île-de-France</li>
                <li>Conseil en transformation documentaire</li>
                <li>Accompagnement personnalisé</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="container">
          <h2 className="section-title">Nos valeurs</h2>
          <div className="grid">
            <div className="card"><h3>Indépendance</h3><p>Des recommandations fondées uniquement sur l&apos;intérêt du client, sans lien avec un éditeur de solutions, un imprimeur ou un prestataire tiers.</p></div>
            <div className="card"><h3>Exigence</h3><p>Une rigueur d&apos;analyse et une discipline de mise en œuvre qui ne transigent pas sur la fiabilité des flux mis en place.</p></div>
            <div className="card"><h3>Proximité</h3><p>Un accompagnement direct, sans intermédiaire, pour une relation de confiance construite dans la durée.</p></div>
            <div className="card"><h3>Impact</h3><p>La valeur du conseil se mesure aux flux simplifiés et aux coûts réduits sur le terrain, pas au nombre de pages d&apos;un rapport.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
