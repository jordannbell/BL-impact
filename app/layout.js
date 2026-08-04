import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    default: "BL IMPACT | Conseil en transformation documentaire",
    template: "%s | BL IMPACT",
  },
  description:
    "BL IMPACT, cabinet de conseil en transformation documentaire et communication client basé à Paris, accompagne dirigeants et organisations du diagnostic à la mise en œuvre.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <div className="version-banner">
          <strong>Version 1</strong> : ce site est une première version, il sera enrichi et amélioré au fur et à mesure.
        </div>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
