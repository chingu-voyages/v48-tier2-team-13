//React imports
import { useState } from "react";
import { Link } from "react-router-dom";

//Import assets
import defaultDinoImage from "../assets/img/default-dino-image.png";
import { EmptyHeart, SolidHeart } from "../assets/img/FavoritesIcons.jsx";

//Component imports
import DinosaurDetailView from "../components/DinosaurDetailView";

//utils imports
import updateLocalStorage from "../utils/updateLocalStorage.js";

function SearchItemPreview(previewDetails) {
  //Load props
  const { id, name, weight, imageSrc, length, foundIn, diet } =
    previewDetails.previewDetails.dinosaurItem;
  //Set modal state
  const [showModal, setShowModal] = useState(false);
  //Get favorites state from local storage
  const [favorite, setFavorite] = useState(localStorage.getItem(id));

  //Close Modal function
  function handleClose() {
    setShowModal(false);
  }
  // Handle favorite function
  function toggleFavorite() {
    setFavorite(!favorite);
    updateLocalStorage(favorite, id, name);
  }

  return (
    <>
      <div className="border-4">
        <div>
          {imageSrc === "N/A" ? (
            <img
              className="rounded-[50%] h-[100px] w-[100px] mt-16 mx-[0] mb-8"
              src={defaultDinoImage}
              alt={name}
            />
          ) : (
            <img
              className="rounded-[50%] h-[100px] w-[100px] mt-16 mx-[0] mb-8"
              src={imageSrc}
              alt={name}
            />
          )}
        </div>
        <div>
          <Link onClick={toggleFavorite}>
            {favorite ? <SolidHeart /> : <EmptyHeart />}
          </Link>
        </div>

        <div>
          <h2>Name: {name}</h2>
          <p>Weight: {weight === "N/A" ? "unknown" : weight + " kg"}</p>
          <p>Length: {length === "N/A" ? "unknown" : length + " m"}</p>
          <p>Country: {foundIn === "N/A" ? "unknown" : foundIn}</p>
          <p>Diet: {diet === "N/A" ? "unknown" : diet}</p>
        </div>
        <br></br>
        <br></br>
        <button className="cursor-pointer" onClick={() => setShowModal(true)}>
          View more details
        </button>
      </div>
      {showModal && (
        <DinosaurDetailView
          details={previewDetails.previewDetails.dinosaurItem}
          handleClose={handleClose}
          favorite={favorite}
          toggleFavorite={toggleFavorite}
        />
      )}
    </>
  );
}

export default SearchItemPreview;
