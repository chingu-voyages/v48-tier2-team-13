//React imports
import { useState } from "react";
import { Link } from "react-router-dom";

//Import assets
import defaultDinoImage from "../assets/img/default-dino-image.png";
import { EmptyHeart, SolidHeart } from "../assets/img/FavoritesIcons.jsx";

//utils imports
import updateLocalStorage from "../utils/updateLocalStorage.js";

function SearchItemPreview(previewDetails) {
  //Load props
  const { id, name, weight, imageSrc, length, foundIn, diet } =
    previewDetails.previewDetails.dinosaurItem;

  //Get favorites state from local storage
  const [favorite, setFavorite] = useState(localStorage.getItem(id));

  // Handle favorite function
  function toggleFavorite() {
    setFavorite(!favorite);
    updateLocalStorage(favorite, id, name);
  }

  return (
    <>
      <div className="relative border border-neutral-200 my-[5%] lg:my-0">
        <div>
          {imageSrc === "N/A" ? (
            <img
              className="rounded-[50%] h-[150px] w-[150px] mt-16 ml-[20%] mb-8 border-4 border-primary-500"
              src={defaultDinoImage}
              alt={name}
            />
          ) : (
            <img
              className="rounded-[50%] h-[150px] w-[150px] mt-16 ml-[20%] mb-8 border-4 border-primary-500"
              src={imageSrc}
              alt={name}
            />
          )}
        </div>
        <span className="absolute right-6 top-3">
          <Link onClick={toggleFavorite}>
            {favorite ? <SolidHeart /> : <EmptyHeart />}
          </Link>
        </span>

        <div className="text-text-light ml-[20%] mb-[20%]">
          <h1 className="font-primary text-xl mb-[8%] text-secondary-500">
            {name.toUpperCase()}
          </h1>
          <p className="font-secondary">
            Weight is {weight === "N/A" ? "unknown" : weight + " kg"}
          </p>
          <p className="font-secondary">
            Length is {length === "N/A" ? "unknown" : length + " m"}
          </p>
          <p className="font-secondary">
            Found in {foundIn === "N/A" ? "unknown" : foundIn}
          </p>
          <p className="font-secondary">
            Has a{"("}n{")"} {diet === "N/A" ? "unknown" : diet} diet{" "}
          </p>
        </div>
        <br></br>
        <br></br>
        <button className="font-primary absolute inset-x-14 bottom-8 h-12 bg-primary-500 text-text-dark cursor-pointer rounded-lg">
          <Link to={`/search/${id}`} state={{ idParameter: id }}>
            {" "}
            View more details
          </Link>
        </button>
      </div>
    </>
  );
}

export default SearchItemPreview;
