import { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import type { MetaFunction } from "@netlify/remix-runtime";
import Card, { links as cardStyles } from "~/components/Card";
import { getCoffeeShops } from "~/data/getCoffeeShops";

import styles from "~/styles/index.css?url";

export const meta: MetaFunction = () => {
  return [
    { title: "Mxli Coffee Shop Points" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...cardStyles(),
];

export default function Index() {
  const coffeeShops = getCoffeeShops();

  return (
    <div>
      <ul id="coffeeShopsContainer">
        {coffeeShops.map((coffeeShop) => (
          <li key={coffeeShop.id}>
            <Link to={coffeeShop.link!} prefetch="intent" preventScrollReset>
              <Card>
                {coffeeShop.name}
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
