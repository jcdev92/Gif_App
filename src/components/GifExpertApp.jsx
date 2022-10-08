import React, { useState } from "react";
console.log("".length);

function GifExpertApp(props) {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  const submitCategory = (e) => {
    e.preventDefault();
    setCategories([...categories, e.target.category.value]);
    // clear input
    e.target.category.value = "";
    // reset state
  };

  return (
    <div>
      <h1>GifExpertApp</h1>
      <form onSubmit={submitCategory}>
        <input type="text" name="category" />
        <button type="submit">Add</button>
      </form>
      <ol>
        {categories.map((category) => {
          const randomKey =
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15);
          return <li key={randomKey}>{category}</li>;
        })}
      </ol>
    </div>
  );
}

export default GifExpertApp;
