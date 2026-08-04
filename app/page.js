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
            BL IMPACT accompagne dirigeants, directions générales et organisations
            dans la refonte de leurs processus documentaires et de leur relation
            client multicanale, de la collecte de l&apos;information jusqu&apos;à
            l&apos;archivage.
          </p>
          <Link className="btn" href="/contact">Échanger avec BL IMPACT</Link>
          <Link className="btn btn-ghost" href="/services">Découvrir nos services</Link>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">Une approche du conseil centrée sur le flux et le résultat</h2>
          <p className="section-sub">
            Fondé par Didier Mbom, BL IMPACT fait le choix d&apos;un accompagnement
            resserré, exigeant et directement orienté vers la fiabilité et la
            performance de vos processus documentaires.
          </p>
          <div className="grid">
            <div className="card">
              <div className="num">1</div>
              <h3><Link href="/services/diagnostic-strategique">Diagnostic stratégique</Link></h3>
              <p>Cartographier vos flux entrants et sortants, auditer votre production documentaire et vos outils avant toute recommandation.</p>
            </div>
            <div className="card">
              <div className="num">2</div>
              <h3><Link href="/services/elaboration-strategie">Élaboration de la stratégie</Link></h3>
              <p>Étudier la faisabilité des scénarios de transformation et construire une feuille de route de dématérialisation réaliste.</p>
            </div>
            <div className="card">
              <div className="num">3</div>
              <h3><Link href="/services/mise-en-oeuvre">Mise en œuvre</Link></h3>
              <p>Cadrer, piloter et déployer les projets de transformation documentaire, au plus près des équipes opérationnelles.</p>
            </div>
            <div className="card">
              <div className="num">4</div>
              <h3><Link href="/services/pilotage-performance">Pilotage de la performance</Link></h3>
              <p>Mettre en place les indicateurs qui permettent de suivre les coûts, les délais et la traçabilité de vos communications.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="container two-col">
          <div>
            <h2 className="section-title">Pourquoi BL IMPACT ?</h2>
            <ul className="check-list">
              <li>Un interlocuteur unique et directement impliqué sur chaque mission</li>
              <li>Une structure indépendante, sans lien avec un éditeur de solutions ou un imprimeur</li>
              <li>Une approche sur mesure, adaptée au volume et à la maturité numérique de chaque organisation</li>
              <li>Une exigence de résultats concrets : réduction des coûts, fiabilisation des flux, satisfaction client</li>
            </ul>
            <Link className="btn" href="/a-propos">En savoir plus sur BL IMPACT</Link>
          </div>
          <div className="callout">
            <strong>Notre conviction</strong>
            <br /><br />
            Une stratégie documentaire n&apos;a de valeur que si elle se traduit en
            flux plus simples, plus sûrs et moins coûteux. C&apos;est pourquoi BL
            IMPACT s&apos;engage, au-delà du conseil, sur l&apos;accompagnement à la
            mise en œuvre et sur le suivi des résultats obtenus.
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2 className="section-title">Un projet documentaire ou une question stratégique ?</h2>
          <p>Parlons de vos flux actuels et des leviers d&apos;impact possibles pour votre organisation.</p>
          <Link className="btn" href="/contact">Contacter BL IMPACT</Link>
        </div>
      </section>
    </>
  );
}
