"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  {
    label: "Services",
    href: "/services",
    sub: [
      { label: "Diagnostic stratégique", href: "/services/diagnostic-strategique" },
      { label: "Élaboration de la stratégie", href: "/services/elaboration-strategie" },
      { label: "Accompagnement à la mise en œuvre", href: "/services/mise-en-oeuvre" },
      { label: "Pilotage de la performance", href: "/services/pilotage-performance" },
    ],
  },
  {
    label: "Expertises",
    href: "/expertises",
    sub: [
      { label: "Grands comptes", href: "/expertises/grands-comptes" },
      { label: "PME et ETI", href: "/expertises/pme-eti" },
      { label: "Secteur public et associations", href: "/expertises/secteur-public" },
    ],
  },
  { label: "Notre approche", href: "/notre-approche" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") closeAll();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function closeAll() {
    setMenuOpen(false);
    setOpenSubmenu(null);
  }

  function toggleSubmenu(href) {
    setOpenSubmenu((current) => (current === href ? null : href));
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="logo" href="/" onClick={closeAll}>
          BL <em>IMPACT</em>
        </Link>

        <button
          type="button"
          className={`nav-toggle${menuOpen ? " is-open" : ""}`}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`main-nav${menuOpen ? " is-open" : ""}`}>
          <ul>
            {nav.map((item) => (
              <li key={item.href} className={openSubmenu === item.href ? "open" : ""}>
                <div className="nav-link-row">
                  <Link href={item.href} onClick={closeAll}>
                    {item.label}
                  </Link>
                  {item.sub && (
                    <button
                      type="button"
                      className="submenu-toggle"
                      aria-label={`Afficher le sous-menu ${item.label}`}
                      aria-expanded={openSubmenu === item.href}
                      onClick={() => toggleSubmenu(item.href)}
                    >
                      <span />
                    </button>
                  )}
                </div>
                {item.sub && (
                  <ul className="submenu">
                    {item.sub.map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} onClick={closeAll}>
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
