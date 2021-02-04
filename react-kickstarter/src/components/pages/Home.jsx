import React from "react";
import Input from "../input/Input";
export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <h2>Application</h2>
      <span>Application</span>
      <fieldset>
        <Input name="nome" onChange={(e) => console.log(e.target.value)} />
        <Input name="valor" type="number" />
      </fieldset>
    </main>
  );
}
