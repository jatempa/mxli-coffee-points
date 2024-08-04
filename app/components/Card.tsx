import { LinksFunction } from '@remix-run/node';
import { PropsWithChildren } from 'react'
import styles from "~/styles/card.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

type CardProps = {
  link?: string
}

export default function Card(props: PropsWithChildren<CardProps>) {
  const { children, link } = props;
  return (
    <div className="card">
      {link ?
        <a target="_blank" href={link} rel="noreferrer">
          {children}
        </a>
        : <span>{children}</span>
      }
    </div>
  );
}
