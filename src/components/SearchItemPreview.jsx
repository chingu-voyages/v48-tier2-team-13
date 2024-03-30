//React imports
import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//Import assets
import defaultDinoImage from "../assets/img/default-dino-image.png";
import { EmptyHeart, SolidHeart } from "../assets/img/FavoritesIcons.jsx";

//utils imports
import updateLocalStorage from "../utils/updateLocalStorage.js";
import { AppContext } from "../App.jsx";

function SearchItemPreview({ dinosaurItem }) {
  //Load props
  const { id, name, weight, imageSrc, length, foundIn, diet } = dinosaurItem;

  //Get favorites state from local storage
  const [favorite, setFavorite] = useState(localStorage.getItem(id));
  const {setFavorites}= useContext(AppContext)

  // Handle favorite function
  function toggleFavorite() {
    setFavorite(!favorite);
    updateLocalStorage(favorite, dinosaurItem);
    setFavorites(Object.keys(localStorage))
  }

  return (
    <div className="relative text-text-light">
      <div className="bg-text-light overflow-hidden">
        <img
          src={imageSrc === "N/A" ? defaultDinoImage : imageSrc}
          alt={name}
          className="h-[200px] object-contain block mx-auto"
        />
      </div>
      <div className="bg-bg-primary py-3 px-4 text-[15px]">
        <div className="flex items-center justify-between mb-3">
          <div className="font-bold text-[21px] flex-1">{name}</div>
          <div onClick={toggleFavorite}>
            {favorite ? <SolidHeart /> : <EmptyHeart />}
          </div>
        </div>
        <div>
          Found In:{" "}
          <span className="font-bold">
            {foundIn === "N/A" ? "Unknown" : foundIn}
          </span>
        </div>
        <div>
          Diet:{" "}
          <span className="font-bold">{diet === "N/A" ? "Unknown" : diet}</span>
        </div>
        <div>
          Length:{" "}
          <span className="font-bold">
            {length === "N/A" ? "Unknown" : length + "m"}
          </span>
        </div>
        <div>
          Weight:{" "}
          <span className="font-bold">
            {weight === "N/A" ? "Unknown" : weight + "kg"}
          </span>
        </div>

        <Link to={`/search/${id}`}>
          <button className="w-full bg-primary-600 p-2 font-bold mt-5 rounded-md mb-1">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

SearchItemPreview.propTypes = {
  dinosaurItem: PropTypes.object.isRequired,
};

export default SearchItemPreview;
