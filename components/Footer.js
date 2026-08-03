import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h4>BL IMPACT</h4>
          <p style={{ maxWidth: 330 }}>
            Cabinet de conseil en strategie base a Paris. BL IMPACT accompagne
            dirigeants et organisations dans la definition et la mise en oeuvre
            de leur strategie.
          </p>
        </div>
        <div>
          <h4>Navigation</h4>
          <ul>
            <li><Link href="/a-propos">A propos</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/expertises">Expertises</Link></li>
            <li><Link href="/notre-approche">Notre approche</Link></li>
            <li><Link href="/recrutement">Recrutement</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>Paris, France</li>
            <li><a href="mailto:mbom.didier@gmail.com">mbom.didier@gmail.com</a></li>
            <li>00 77 44 22 11</li>
            <li><Link href="/contact">Nous contacter</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 BL IMPACT. Tous droits reserves.</span>
        <span>Premiere version du site, en amelioration continue.</span>
      </div>
    </footer>
  );
}
