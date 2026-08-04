import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h4>BL IMPACT</h4>
          <p style={{ maxWidth: 330 }}>
            Cabinet de conseil en transformation documentaire base a Paris. BL
            IMPACT accompagne dirigeants et organisations dans l&apos;optimisation
            et le pilotage de leurs flux d&apos;information.
          </p>
        </div>
        <div>
          <h4>Navigation</h4>
          <ul>
            <li><Link href="/a-propos">A propos</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/expertises">Expertises</Link></li>
            <li><Link href="/notre-approche">Notre approche</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>Paris, France</li>
            <li><a href="mailto:blimpact2025@gmail.com">blimpact2025@gmail.com</a></li>
            <li>+33 6 51 45 35 38</li>
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
