import * as React from "react";
import { NewTabLink } from "./NewTabLink";

export const CounterButton = () => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <div className="text-red-500">Hello {count}</div>
      <NewTabLink href="https://turbo.build/repo">Turborepo</NewTabLink>
    </>
  );
};
