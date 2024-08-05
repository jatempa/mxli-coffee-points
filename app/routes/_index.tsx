import { LinksFunction, json } from "@remix-run/node";
import type { MetaFunction } from "@netlify/remix-runtime";
import { useLoaderData } from "@remix-run/react";
import Card, { links as cardStyles } from "~/components/Card";
import coffeeShops from "~/data/coffee-shops.json";

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

export const loader = async () => {
  return json({coffeeShops});
};

export default function Index() {
  const { coffeeShops } = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <ul className="list-container">
        {coffeeShops.map((coffeeShop) => (
            <li key={coffeeShop.id}>
              <Card link={coffeeShop.link!}>{coffeeShop.name}</Card>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
