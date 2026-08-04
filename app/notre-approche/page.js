import Link from "next/link";

export const metadata = {
  title: "Notre approche",
  description: "La méthode BL IMPACT en quatre temps pour la transformation documentaire : comprendre, décider, agir, mesurer.",
};

export default function Approche() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Accueil</Link> / Notre approche</div>
          <h1>Notre approche</h1>
          <p>
            BL IMPACT est une structure nouvellement créée : cette page présente
            notre méthode et les types de missions de transformation documentaire
            que nous menons, plutôt qu&apos;un historique de références.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">Notre positionnement</h2>
          <p className="section-sub">
            BL IMPACT est une structure nouvellement créée qui organise sa
            stratégie d&apos;expansion autour de la convergence Éditique &amp; GED.
            Aujourd&apos;hui, ces deux univers fusionnent souvent dans des offres
            globales de Content Services ou de CCM (Customer Communications
            Management). L&apos;éditique génère le document, l&apos;envoie au client,
            puis le bascule instantanément dans la GED pour que les conseillers
            ou les clients puissent le consulter à tout moment.
          </p>
        </div>
      </section>

      <section className="alt">
        <div className="container">
          <h2 className="section-title">Une méthode en quatre temps</h2>
          <p className="section-sub">Quelle que soit la mission, BL IMPACT suit une même logique : comprendre, décider, agir, mesurer.</p>
          <div className="grid">
            <div className="card"><div className="num">1</div><h3>Comprendre</h3><p>Un diagnostic rigoureux de vos flux et de vos outils, sans idée préconçue ni solution imposée d&apos;avance.</p></div>
            <div className="card"><div className="num">2</div><h3>Décider</h3><p>Des scénarios de transformation clairs et un accompagnement à l&apos;arbitrage, avec la direction, en toute transparence.</p></div>
            <div className="card"><div className="num">3</div><h3>Agir</h3><p>Un appui concret au cadrage et au déploiement, au plus près des équipes opérationnelles.</p></div>
            <div className="card"><div className="num">4</div><h3>Mesurer</h3><p>Des indicateurs simples pour suivre les coûts, les délais et la traçabilité, et ajuster la trajectoire si nécessaire.</p></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">Exemples de missions types</h2>
          <p className="section-sub">
            Illustrations du type d&apos;accompagnement que BL IMPACT peut mener,
            présentées ici à titre d&apos;exemple et non comme des missions déjà réalisées.
          </p>
          <div className="grid">
            <div className="card">
              <h3>Refonte des flux documentaires</h3>
              <p>Une entreprise confrontée à une hausse des coûts postaux et des délais de traitement souhaite revoir ses flux : diagnostic des processus, construction de scénarios de dématérialisation, plan de déploiement.</p>
            </div>
            <div className="card">
              <h3>Structuration de la communication client</h3>
              <p>Une PME en forte croissance a besoin de structurer sa communication multicanale : audit des outils, définition d&apos;une feuille de route, accompagnement du changement.</p>
            </div>
            <div className="card">
              <h3>Pilotage de la performance documentaire</h3>
              <p>Une organisation souhaite mieux suivre la performance et la traçabilité de ses communications : définition d&apos;indicateurs, tableaux de bord, revues périodiques.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2 className="section-title">Votre organisation a un enjeu similaire ?</h2>
          <p>Discutons de la manière dont BL IMPACT peut vous accompagner.</p>
          <Link className="btn" href="/contact">Contacter BL IMPACT</Link>
        </div>
      </section>
    </>
  );
}
