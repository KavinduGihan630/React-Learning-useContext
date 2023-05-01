import React, { useContext } from "react";
import { userContext } from "../userContext";

export default function About() {
  const { value, setValue } = useContext(userContext);
  return (
    <div>
      <h2>About</h2>
      <h2>{value}</h2>
    </div>
  );
}
