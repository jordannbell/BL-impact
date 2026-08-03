import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="badge">Cabinet de conseil en strategie · Paris</div>
          <h1>
            Donner a votre strategie une veritable <span className="grad">capacite d&apos;impact</span>.
          </h1>
          <p className="lead">
            BL IMPACT accompagne dirigeants, directions generales et organisations
            dans la definition d&apos;une strategie claire et dans sa mise en oeuvre
            concrete, mesurable et durable.
          </p>
          <Link className="btn" href="/contact">Echanger avec BL IMPACT</Link>
          <Link className="btn btn-ghost" href="/services">Decouvrir nos services</Link>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">Une approche du conseil centree sur le resultat</h2>
          <p className="section-sub">
            Fonde par Didier Mbom, BL IMPACT fait le choix d&apos;un accompagnement
            resserre, exigeant et directement oriente vers l&apos;impact operationnel
            de chaque recommandation.
          </p>
          <div className="grid">
            <div className="card">
              <div className="num">1</div>
              <h3><Link href="/services/diagnostic-strategique">Diagnostic strategique</Link></h3>
              <p>Comprendre en profondeur votre marche, votre organisation et vos enjeux avant toute recommandation.</p>
            </div>
            <div className="card">
              <div className="num">2</div>
              <h3><Link href="/services/elaboration-strategie">Elaboration de la strategie</Link></h3>
              <p>Construire des scenarios clairs, hierarchises et reellement actionnables par vos equipes.</p>
            </div>
            <div className="card">
              <div className="num">3</div>
              <h3><Link href="/services/mise-en-oeuvre">Mise en oeuvre</Link></h3>
              <p>Accompagner le deploiement concret des plans d&apos;action, au plus pres des equipes operationnelles.</p>
            </div>
            <div className="card">
              <div className="num">4</div>
              <h3><Link href="/services/pilotage-performance">Pilotage de la performance</Link></h3>
              <p>Mettre en place les indicateurs qui permettent de mesurer, corriger et perenniser les resultats.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="container two-col">
          <div>
            <h2 className="section-title">Pourquoi BL IMPACT ?</h2>
            <ul className="check-list">
              <li>Un interlocuteur unique et directement implique sur chaque mission</li>
              <li>Une structure independante, sans lien avec un editeur ou un grand cabinet</li>
              <li>Une approche sur mesure, adaptee a la taille et a la maturite de chaque organisation</li>
              <li>Une exigence de resultats concrets plutot que de recommandations theoriques</li>
            </ul>
            <Link className="btn" href="/a-propos">En savoir plus sur BL IMPACT</Link>
          </div>
          <div className="callout">
            <strong>Notre conviction</strong>
            <br /><br />
            Une strategie n&apos;a de valeur que si elle se traduit en decisions et en
            actions. C&apos;est pourquoi BL IMPACT s&apos;engage, au-dela du conseil, sur
            l&apos;accompagnement a la mise en oeuvre et sur le suivi des resultats obtenus.
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2 className="section-title">Un projet, une question strategique ?</h2>
          <p>Parlons de votre contexte et des leviers d&apos;impact possibles pour votre organisation.</p>
          <Link className="btn" href="/contact">Contacter BL IMPACT</Link>
        </div>
      </section>
    </>
  );
}
