import React     from "react";
import {getGifs} from "../helpers/getGif.js";


export const GridGif = ({ category, key }) => {

  getGifs(category);

  return (
    <>
      <div key={key}>
        <h2>{category}</h2>
      </div>
    </>
  );
};
