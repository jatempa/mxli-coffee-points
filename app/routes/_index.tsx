import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Mxli Coffee Points" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Recomendaciones</h1>
      <ul>
        <li>Cafenio</li>
        <li>
          <a
            target="_blank"
            href="https://www.facebook.com/cafelanegrita"
            rel="noreferrer"
          >
            Cafe la Negrita
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.facebook.com/revoltmxli"
            rel="noreferrer"
          >
            Revolt Café & Boutique Mexicali
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Chianti Cafe. Deli.
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.facebook.com/zafarirestaurantebar"
            rel="noreferrer"
          >
            Zafari Restaurante Bar
          </a>
        </li>        
        <li>
          <a
            target="_blank"
            href="https://www.facebook.com/Uno800BD"
            rel="noreferrer"
          >
            UNO 800 Brew Dispatch
          </a>
        </li>        
        <li>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100076334313413"
            rel="noreferrer"
          >
            Black Garden
          </a>
        </li>        
        <li>
          <a
            target="_blank"
            href="https://www.facebook.com/pages/Cafe-Tr3z/604309876613741"
            rel="noreferrer"
          >
            Cafe Tr3z
          </a>
        </li>        
        <li>
          <a
            target="_blank"
            href="https://www.facebook.com/KalinkaMexicali"
            rel="noreferrer"
          >
            Kalinka Mxli
          </a>
        </li>        
        <li>
          <a
            target="_blank"
            href="https://www.facebook.com/BLGranVia/"
            rel="noreferrer"
          >
            Blue Luna
          </a>
        </li>        
        <li>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100047052203544"
            rel="noreferrer"
          >
            Moulú
          </a>
        </li>        
      </ul>
    </div>
  );
}
