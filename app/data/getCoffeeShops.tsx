import coffeeShops from "~/data/coffee-shops.json";

export type CoffeeShop = {
    id: string;
    name: string;
    link: string | null;
    address: string | null;
}

export function getCoffeeShops(): CoffeeShop[] {
  return coffeeShops;
}