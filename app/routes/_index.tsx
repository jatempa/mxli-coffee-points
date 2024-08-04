import type { LinksFunction } from "@remix-run/node";
import type { MetaFunction } from "@netlify/remix-runtime";
import Card from "~/components/Card";

export const meta: MetaFunction = () => {
  return [
    { title: "Mxli Coffee Shop Points" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

import styles from "~/styles/index.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <ul className="list-container">
        <li>
          <Card>Cafenio</Card>
        </li>
        <li>
          <Card link="https://www.facebook.com/cafelanegrita">Cafe la Negrita</Card>
        </li>
        <li>
          <Card link="https://www.facebook.com/revoltmxli">
            Revolt Café & Boutique Mexicali
          </Card>
        </li>
        <li>
          <Card>
            Chianti Cafe. Deli.
          </Card>
        </li>
        <li>
          <Card link="https://www.facebook.com/zafarirestaurantebar">
            Zafari Restaurante Bar
          </Card>
        </li>        
        <li>
          <Card link="https://www.facebook.com/Uno800BD">
            UNO 800 Brew Dispatch
          </Card>
        </li>        
        <li>
          <Card link="https://www.facebook.com/profile.php?id=100076334313413">
            Black Garden
          </Card>
        </li>        
        <li>
          <Card link="https://www.facebook.com/pages/Cafe-Tr3z/604309876613741">
            Cafe Tr3z
          </Card>
        </li>        
        <li>
          <Card link="https://www.facebook.com/KalinkaMexicali">
            Kalinka Mxli
          </Card>
        </li>        
        <li>
          <Card link="https://www.facebook.com/BLGranVia/">
            Blue Luna
          </Card>
        </li>        
        <li>
          <Card link="https://www.facebook.com/profile.php?id=100047052203544">
            Moulú
          </Card>
        </li>        
      </ul>
    </div>
  );
}
