import React from "react";
import Article from "./Article";

export default function ArticleList() {
  return (
    <main>
      <Article title="Components 101" date="December 15, 2020" preview="Setting up the building blocks of your site"/>
      <Article  title= "React Data Flow" date="December 11, 2020" preview="Passing props is never passé"/>
      <Article title="Function vs Class Components" preview="React, meet OOJS."/>
    </main>
  );
}
