import Link from "next/link";

export const metadata = {
  title: "Grands comptes",
  description: "BL IMPACT accompagne les directions generales et directions metier des grands comptes.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Accueil</Link> / <Link href="/expertises">Expertises</Link> / Grands comptes</div>
          <h1>Grands comptes</h1>
        </div>
      </section>
      <section>
        <div className="container two-col">
          <div>
            <p>Au sein de grandes organisations, BL IMPACT intervient en appui des directions generales et des directions metier sur des projets strategiques transverses, en toute independance vis-a-vis des equipes internes et des prestataires en place.</p>
            <ul className="check-list">
              <li>Diagnostic et repositionnement strategique</li>\n              <li>Accompagnement de projets de transformation transverses</li>\n              <li>Appui a la prise de decision en comite de direction</li>\n              <li>Pilotage de la performance a l&apos;echelle d&apos;une direction ou d&apos;un groupe</li>
            </ul>
          </div>
          <div className="callout">
            <strong>Notre approche</strong>
            <br /><br />
            Une meme methodologie rigoureuse, adaptee aux contraintes de gouvernance,
            de ressources et de temps propres a chaque type d&apos;organisation.
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="container">
          <h2 className="section-title">Discutons de votre contexte</h2>
          <Link className="btn" href="/contact">Prendre contact</Link>
        </div>
      </section>
    </>
  );
}
