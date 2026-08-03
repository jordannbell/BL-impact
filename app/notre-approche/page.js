import Link from "next/link";

export const metadata = {
  title: "Notre approche",
  description: "La methode BL IMPACT en quatre temps : comprendre, decider, agir, mesurer.",
};

export default function Approche() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Accueil</Link> / Notre approche</div>
          <h1>Notre approche</h1>
          <p>
            BL IMPACT est une structure nouvellement creee : cette page presente
            notre methode et les types de missions que nous menons, plutot qu&apos;un
            historique de references.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">Une methode en quatre temps</h2>
          <p className="section-sub">Quelle que soit la mission, BL IMPACT suit une meme logique : comprendre, decider, agir, mesurer.</p>
          <div className="grid">
            <div className="card"><div className="num">1</div><h3>Comprendre</h3><p>Un diagnostic rigoureux du contexte, sans idee preconcue ni solution imposee d&apos;avance.</p></div>
            <div className="card"><div className="num">2</div><h3>Decider</h3><p>Des scenarios clairs et un accompagnement a l&apos;arbitrage, avec la direction, en toute transparence.</p></div>
            <div className="card"><div className="num">3</div><h3>Agir</h3><p>Un appui concret a la mise en oeuvre, au plus pres des equipes operationnelles.</p></div>
            <div className="card"><div className="num">4</div><h3>Mesurer</h3><p>Des indicateurs simples pour suivre les resultats et ajuster la trajectoire si necessaire.</p></div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="container">
          <h2 className="section-title">Exemples de missions types</h2>
          <p className="section-sub">
            Illustrations du type d&apos;accompagnement que BL IMPACT peut mener,
            presentees ici a titre d&apos;exemple et non comme des missions deja realisees.
          </p>
          <div className="grid">
            <div className="card">
              <h3>Repositionnement strategique</h3>
              <p>Une entreprise confrontee a une evolution de son marche souhaite revoir son positionnement : diagnostic de marche, construction de scenarios, plan de deploiement.</p>
            </div>
            <div className="card">
              <h3>Structuration de la croissance</h3>
              <p>Une PME en forte croissance a besoin de structurer son organisation : audit organisationnel, definition d&apos;une feuille de route, accompagnement du changement.</p>
            </div>
            <div className="card">
              <h3>Pilotage de la performance</h3>
              <p>Une organisation souhaite mieux suivre l&apos;atteinte de ses objectifs strategiques : definition d&apos;indicateurs, tableaux de bord, revues periodiques.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2 className="section-title">Votre organisation a un enjeu similaire ?</h2>
          <p>Discutons de la maniere dont BL IMPACT peut vous accompagner.</p>
          <Link className="btn" href="/contact">Contacter BL IMPACT</Link>
        </div>
      </section>
    </>
  );
}
