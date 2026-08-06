import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VersionBanner from "../components/VersionBanner";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "BL IMPACT | Conseil en transformation documentaire",
    template: "%s | BL IMPACT",
  },
  description:
    "BL IMPACT, cabinet de conseil en transformation documentaire et communication client basé en Île-de-France, accompagne dirigeants et organisations du diagnostic à la mise en œuvre.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={montserrat.className}>
        <VersionBanner />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
