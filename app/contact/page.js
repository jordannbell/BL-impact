import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: "Contactez BL IMPACT, cabinet de conseil en strategie base a Paris.",
};

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Accueil</Link> / Contact</div>
          <h1>Contact</h1>
          <p>Une question, un projet ? Echangeons.</p>
        </div>
      </section>
      <section>
        <div className="container two-col">
          <div>
            <h2 className="section-title">Coordonnees</h2>
            <div className="card" style={{ marginBottom: 20 }}>
              <h3>Didier Mbom</h3>
              <p>Fondateur et Directeur, BL IMPACT</p>
            </div>
            <ul className="check-list">
              <li>Paris, France</li>
              <li>Email : <a href="mailto:blimpact2025@gmail.com" style={{ color: "var(--accent)" }}>blimpact2025@gmail.com</a></li>
              <li>Telephone : +33 6 51 45 35 38</li>
              <li>SIRET : 988 289 591 00014</li>
            </ul>
          </div>
          <div>
            <div className="card">
              <h3>Nous ecrire</h3>
              <form action="mailto:blimpact2025@gmail.com" method="get">
                <div className="field">
                  <label htmlFor="nom">Nom</label>
                  <input id="nom" type="text" name="nom" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="body" rows={5} />
                </div>
                <button className="btn btn-form" type="submit">Envoyer</button>
              </form>
              <p style={{ color: "var(--slate)", fontSize: 12.5, marginTop: 14 }}>
                Ce formulaire ouvre votre logiciel de messagerie. Un envoi direct
                depuis le site sera ajoute dans une prochaine version.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
