import React , { useEffect , useState } from "react";
import { getGifs }                      from "../helpers/getGif.js";

export const GridGif = ({ category, key }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const images = await getGifs(category);
    setImages(images);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h2>{category}</h2>
      <div className="card-grid">
        {images.map(({id, title, url}) => (
          <div key={id} className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
          </div>
        ))}
      </div>
    </>
  );
};
