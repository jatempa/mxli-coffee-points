import type { MetaFunction } from "@netlify/remix-runtime";
import Card from "~/components/Card";

export const meta: MetaFunction = () => {
  return [
    { title: "Mxli Coffee Points" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <ul className="list-container">
        <li><Card>Cafenio</Card></li>
        <li>
          <Card>
            <a
              target="_blank"
              href="https://www.facebook.com/cafelanegrita"
              rel="noreferrer"
            >
              Cafe la Negrita
            </a>
          </Card>
        </li>
        <li>
          <Card>
            <a
              target="_blank"
              href="https://www.facebook.com/revoltmxli"
              rel="noreferrer"
            >
              Revolt Café & Boutique Mexicali
            </a>
          </Card>
        </li>
        <li>
          <Card>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Chianti Cafe. Deli.
            </a>
          </Card>
        </li>
        <li>
          <Card>
            <a
              target="_blank"
              href="https://www.facebook.com/zafarirestaurantebar"
              rel="noreferrer"
            >
              Zafari Restaurante Bar
            </a>
          </Card>
        </li>        
        <li>
          <Card>
            <a
              target="_blank"
              href="https://www.facebook.com/Uno800BD"
              rel="noreferrer"
            >
              UNO 800 Brew Dispatch
            </a>
          </Card>
        </li>        
        <li>
          <Card>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100076334313413"
              rel="noreferrer"
            >
              Black Garden
            </a>
          </Card>
        </li>        
        <li>
          <Card>
            <a
              target="_blank"
              href="https://www.facebook.com/pages/Cafe-Tr3z/604309876613741"
              rel="noreferrer"
            >
              Cafe Tr3z
            </a>
          </Card>
        </li>        
        <li>
          <Card>
            <a
              target="_blank"
              href="https://www.facebook.com/KalinkaMexicali"
              rel="noreferrer"
            >
              Kalinka Mxli
            </a>
          </Card>
        </li>        
        <li>
          <Card>
            <a
              target="_blank"
              href="https://www.facebook.com/BLGranVia/"
              rel="noreferrer"
            >
              Blue Luna
            </a>
          </Card>
        </li>        
        <li>
          <Card>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100047052203544"
              rel="noreferrer"
            >
              Moulú
            </a>
          </Card>
        </li>        
      </ul>
    </div>
  );
}
