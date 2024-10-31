import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import logo from "../assets/logo";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Underreacted" image={logo} />
      <About about="A blog about learning React" />
      <ArticleList />
    </div>
  );
}

export default App;
