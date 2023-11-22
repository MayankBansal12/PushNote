import * as React from "react";
import { NewTabLink } from "./NewTabLink";

const backend = process.env.REACT_APP_SERVER;

export const CounterButton = () => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <div className="text-red-500">Hello {count}</div>
      <NewTabLink href="https://turbo.build/repo">Turborepo</NewTabLink>
      <p>Url for backend: {backend}</p>
      <p>{process.env.REACT_APP_VARIABLE}</p>
    </>
  );
};
