import Link from "next/link";

export const metadata = {
  title: "Actualites",
  description: "Les actualites de BL IMPACT, cabinet de conseil en strategie.",
};

export default function Actualites() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Accueil</Link> / Actualites</div>
          <h1>Actualites</h1>
          <p>Les nouvelles de BL IMPACT.</p>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="card" style={{ maxWidth: 640 }}>
            <p className="news-date">3 aout 2026</p>
            <h3>Lancement de BL IMPACT</h3>
            <p>
              BL IMPACT, cabinet de conseil en strategie fonde par Didier Mbom,
              ouvre officiellement ses portes a Paris. Le cabinet accompagne des a
              present dirigeants et organisations dans la definition et la mise en
              oeuvre de leur strategie.
            </p>
          </div>
          <p style={{ marginTop: 32, color: "var(--slate)" }}>
            D&apos;autres actualites seront publiees ici au fil des missions et des
            prises de parole de BL IMPACT.
          </p>
        </div>
      </section>
    </>
  );
}
