import React, { useContext } from "react";
import { userContext } from "../userContext";

export default function Index() {
  const { value, setValue } = useContext(userContext);
  return (
    <div>
      <h2>Home</h2>
      <h3>{value}</h3>
      <button onClick={() => setValue("hey mf")}>click</button>
    </div>
  );
}
