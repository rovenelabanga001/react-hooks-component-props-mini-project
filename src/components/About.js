import React from "react";

export default function About({
  image = "https://via.placeholder.com/215",
  about,
}) {
  return (
    <main>
      <aside>
        <img src={image} alt="blog logo"></img>
        <p>{about}</p>
      </aside>
    </main>
  );
}
