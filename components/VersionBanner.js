"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "bl-impact-version-banner-dismissed";

export default function VersionBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "1") {
      setVisible(false);
    }
  }, []);

  if (!visible) return null;

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  return (
    <div className="version-banner">
      <strong>Version 1</strong> : ce site est une première version, il sera enrichi et amélioré au fur et à mesure.
      <button
        type="button"
        className="version-banner-close"
        aria-label="Fermer ce message"
        onClick={dismiss}
      >
        ×
      </button>
    </div>
  );
}
