import { LinksFunction } from "@remix-run/node";
import type { MetaFunction } from "@netlify/remix-runtime";
import Card, { links as cardStyles } from "~/components/Card";
import { getCoffeeShops } from "~/data/getCoffeeShops";

export const meta: MetaFunction = () => {
  return [
    { title: "Mxli Coffee Shop Points" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

import styles from "~/styles/index.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...cardStyles(),
];

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <ul className="list-container">
        {getCoffeeShops().map((coffeeShop) => (
            <li key={coffeeShop.id}>
              <Card link={coffeeShop.link!}>{coffeeShop.name}</Card>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
