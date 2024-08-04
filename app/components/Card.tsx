export default function Card(props: any) {
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