import "./App.css";
import React, { useState } from "react";
import { AddCategory, GridGif } from "./components";

export function GifExpertApp() {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <div className="App">
      <AddCategory onAddCategory={onAddCategory} />
      <hr />
      {categories.map((category) => (
        <GridGif key={category} category={category} />
      ))}
    </div>
  );
}
