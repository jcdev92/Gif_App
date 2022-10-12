
import { GifItem }      from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs.js";

export const GridGif = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h2>{category}</h2>
        {isLoading && <p>Loading...</p>}
      <div className="card-grid">
        {images.map((image) => (
            <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
