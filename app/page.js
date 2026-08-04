import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="badge">Cabinet de conseil en transformation documentaire · Paris</div>
          <h1>
            Reprenez la main sur vos <span className="grad">flux documentaires et votre communication client</span>.
          </h1>
          <p className="lead">
            BL IMPACT accompagne dirigeants, directions generales et organisations
            dans la refonte de leurs processus documentaires et de leur relation
            client multicanale, de la collecte de l&apos;information jusqu&apos;a
            l&apos;archivage.
          </p>
          <Link className="btn" href="/contact">Echanger avec BL IMPACT</Link>
          <Link className="btn btn-ghost" href="/services">Decouvrir nos services</Link>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">Une approche du conseil centree sur le flux et le resultat</h2>
          <p className="section-sub">
            Fonde par Didier Mbom, BL IMPACT fait le choix d&apos;un accompagnement
            resserre, exigeant et directement oriente vers la fiabilite et la
            performance de vos processus documentaires.
          </p>
          <div className="grid">
            <div className="card">
              <div className="num">1</div>
              <h3><Link href="/services/diagnostic-strategique">Diagnostic strategique</Link></h3>
              <p>Cartographier vos flux entrants et sortants, auditer votre production documentaire et vos outils avant toute recommandation.</p>
            </div>
            <div className="card">
              <div className="num">2</div>
              <h3><Link href="/services/elaboration-strategie">Elaboration de la strategie</Link></h3>
              <p>Etudier la faisabilite des scenarios de transformation et construire une feuille de route de dematerialisation realiste.</p>
            </div>
            <div className="card">
              <div className="num">3</div>
              <h3><Link href="/services/mise-en-oeuvre">Mise en oeuvre</Link></h3>
              <p>Cadrer, piloter et deployer les projets de transformation documentaire, au plus pres des equipes operationnelles.</p>
            </div>
            <div className="card">
              <div className="num">4</div>
              <h3><Link href="/services/pilotage-performance">Pilotage de la performance</Link></h3>
              <p>Mettre en place les indicateurs qui permettent de suivre les couts, les delais et la tracabilite de vos communications.</p>
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
              <li>Une structure independante, sans lien avec un editeur de solutions ou un imprimeur</li>
              <li>Une approche sur mesure, adaptee au volume et a la maturite numerique de chaque organisation</li>
              <li>Une exigence de resultats concrets : reduction des couts, fiabilisation des flux, satisfaction client</li>
            </ul>
            <Link className="btn" href="/a-propos">En savoir plus sur BL IMPACT</Link>
          </div>
          <div className="callout">
            <strong>Notre conviction</strong>
            <br /><br />
            Une strategie documentaire n&apos;a de valeur que si elle se traduit en
            flux plus simples, plus surs et moins couteux. C&apos;est pourquoi BL
            IMPACT s&apos;engage, au-dela du conseil, sur l&apos;accompagnement a la
            mise en oeuvre et sur le suivi des resultats obtenus.
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2 className="section-title">Un projet documentaire ou une question strategique ?</h2>
          <p>Parlons de vos flux actuels et des leviers d&apos;impact possibles pour votre organisation.</p>
          <Link className="btn" href="/contact">Contacter BL IMPACT</Link>
        </div>
      </section>
    </>
  );
}
