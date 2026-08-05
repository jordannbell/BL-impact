import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VersionBanner from "../components/VersionBanner";

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
        <VersionBanner />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
