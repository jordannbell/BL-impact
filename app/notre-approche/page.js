import Link from "next/link";
import ApprochePillars from "../../components/ApprochePillars";

export const metadata = {
  title: "Notre approche",
  description: "La méthode BL IMPACT en quatre piliers pour vos projets Éditique & GED : cadrage, déploiement, conduite du changement, exploitation.",
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
          <h2 className="section-title">Notre expertise</h2>
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
          <h2 className="section-title">Notre positionnement</h2>
          <p className="section-sub">
            Une méthodologie structurée en quatre piliers, pour vous rassurer
            sur notre rigueur, notre agilité et la sécurité de vos données.
          </p>
          <ApprochePillars />
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
