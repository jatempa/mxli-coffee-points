import { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import type { MetaFunction } from "@netlify/remix-runtime";
import Card, { links as cardStyles } from "~/components/Card";
import { CoffeeShop, getCoffeeShops } from "~/data/getCoffeeShops";

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

function compare(a: CoffeeShop, b: CoffeeShop) {
    if ( a.name.toUpperCase() < b.name.toUpperCase() ){
      return -1;
    }
    if ( a.name.toUpperCase() > b.name.toUpperCase() ){
      return 1;
    }
    return 0;
}

export default function Index() {
  const coffeeShops: CoffeeShop[] = getCoffeeShops();

  // custom sort function
  coffeeShops.sort(compare);

  return (
    <div>
      <ul id="coffeeShopsContainer">
        {coffeeShops
          .filter((coffeeShop) => coffeeShop.link)
          .map((coffeeShop) => (
            <li key={coffeeShop.id}>
              <Link to={coffeeShop.link!} prefetch="intent" preventScrollReset>
                <Card>
                  {coffeeShop.name}
                </Card>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
