"use client";

import { useState } from "react";

const pillars = [
  {
    title: "L'Accompagnement Amont (Cadrage & Audit)",
    items: [
      { label: "Audit de l'existant", text: "Analyse quantitative et qualitative de vos flux documentaires actuels (papiers et numériques)." },
      { label: "Cartographie des processus", text: "Identification des circuits de validation, des points de blocage et des opportunités d'automatisation." },
      { label: "Ateliers de co-conception", text: "Animation de sessions de travail avec vos équipes métiers pour définir les règles de gestion, d'indexation et d'archivage." },
    ],
  },
  {
    title: "Le Déploiement Technique & Intégration",
    items: [
      { label: "Architecture sur-mesure", text: "Interconnexion transparente de la solution GED/Éditique choisie avec votre écosystème existant (ERP, CRM, SIRH) via API." },
      { label: "Méthodologie agile", text: "Déploiement par lots fonctionnels pour garantir des gains rapides (quick wins) et valider chaque étape avec vous." },
      { label: "Reprise des historiques", text: "Migration sécurisée, nettoyage et indexation de votre passif documentaire vers la nouvelle plateforme." },
    ],
  },
  {
    title: "La Conduite du Changement (Humain)",
    items: [
      { label: "Plan de communication", text: "Accompagnement de vos collaborateurs pour expliquer les bénéfices de la transformation digitale." },
      { label: "Formations ciblées", text: "Sessions adaptées par profil (administrateurs, utilisateurs clés, utilisateurs finaux) avec supports pédagogiques dédiés." },
      { label: "Amélioration continue", text: "Suivi post-démarrage et ajustement des parcours utilisateurs grâce aux retours d'expérience." },
    ],
  },
  {
    title: "L'Exploitation & La Sécurité (Le Rôle Opérationnel)",
    items: [
      { label: "Gouvernance des données", text: "Garantie de la conformité réglementaire (RGPD, NF Z42-013 / ISO 14641 pour l'archivage à valeur probante)." },
      { label: "Supervision des flux éditiques", text: "Traçabilité totale de la chaîne de production, du dépôt du fichier jusqu'à la distribution finale (mail, éditique papier, coffre-fort numérique)." },
      { label: "SLA et Support", text: "Engagement de service strict avec un support technique réactif et un pilotage régulier (comités de suivi trimestriels)." },
    ],
  },
];

export default function ApprochePillars() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="accordion">
      {pillars.map((pillar, i) => {
        const isOpen = openIndex === i;
        return (
          <div className={`accordion-item${isOpen ? " open" : ""}`} key={pillar.title}>
            <button
              type="button"
              className="accordion-trigger"
              aria-expanded={isOpen}
              aria-controls={`pillar-panel-${i}`}
              id={`pillar-trigger-${i}`}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
            >
              <span className="num">{i + 1}</span>
              <span className="accordion-title">{pillar.title}</span>
              <span className="accordion-chevron" />
            </button>
            {isOpen && (
              <ul
                className="accordion-body"
                id={`pillar-panel-${i}`}
                role="region"
                aria-labelledby={`pillar-trigger-${i}`}
              >
                {pillar.items.map((item) => (
                  <li key={item.label}>
                    <strong>{item.label}</strong> : {item.text}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
