import { LinksFunction } from '@remix-run/node';
import { PropsWithChildren } from 'react'
import styles from "~/styles/card.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];


export default function Card(props: PropsWithChildren) {
  const { children } = props;
  return (
    <article className="card">
      <header>{children}</header>
    </article>
  );
}
