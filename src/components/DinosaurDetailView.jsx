//Component Imports
import Map from "../components/Map";
import { EmptyHeart, SolidHeart } from "../assets/img/FavoritesIcons";

//React imports
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//Image
import defaultDinoImage from "../assets/img/default-dino-image.png";

function DinosaurDetailView({
  details,
  handleClose,
  favorite,
  toggleFavorite,
}) {
  //The country is returned as a string from the Dinosaur API which is problematic when we deal with multiple countries
  //per item. We need to transform the list of countries from string to array
  const geoCoordinates = details.foundIn.split(",");

  //Destructuring the props details object
  const {
    id,
    name,
    imageSrc,
    description,
    typeOfDinosaur,
    typeSpecies,
    taxonomy,
    whenLived,
    foundIn,
    namedBy,
    length,
    weight,
    diet,
  } = details;

  return (
    <div
      onClick={() => handleClose()}
      className="grid grid-cols-3 gap-3 fixed h-full w-full  inset-0 items-center justify-center z-50 bg-[#000000cc] "
    >
      <div>
        <button
          className="bg-blue-500 text-white rounded p-2 mt-4"
          onClick={() => handleClose()}
        >
          X Close
        </button>
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative overflow-y-auto p-4 bg-white rounded shadow-lg w-full h-full max-h-[90%]"
      >
        {imageSrc === "N/A" ? (
          <img
            className="mt-2 rounded-lg"
            src={defaultDinoImage}
            alt="dinosaur pic"
          />
        ) : (
          <img
            className="mt-2 rounded-lg"
            src={imageSrc}
            alt="dinosaur pic"
          />
        )}

        <div>
          <Link onClick={toggleFavorite}>
            {favorite ? <SolidHeart /> : <EmptyHeart />}
          </Link>
        </div>
        <div>
          <div className="text-lg font-semibold mb-4">{name}</div>

          {description !== "N/A" ? (
            <div className=""> {description} </div>
          ) : (
            ""
          )}

          <div>Type: {typeOfDinosaur}</div>
          <div>Species: {typeSpecies}</div>
          <div>Taxonomy: {taxonomy}</div>
          <div>Lived: {whenLived}</div>
          <div className=" mr-[10px] text-[black] bg-[#ebebf2] px-4 py-2 mx-2 my-8 text-[1.3rem] rounded-[5px] font-semibold">
            <h3>Found in: {foundIn}</h3>
            <h3>Named by: {namedBy}</h3>
          </div>

          <div className="mr-[10px] text-[black] bg-[#ebebf2] px-4 py-2 mx-2 my-8 text-[1.3rem] rounded-[5px] font-semibold">
            <h3>Length: {length} m</h3>
            <h3>Weight: {weight} kg</h3>
            <h3>Diet: {diet}</h3>
          </div>

          <div className="mt-[100px] mr-[150px]">
            <Map key={id} geoCoordinates={geoCoordinates} />
          </div>
        </div>
      </div>
    </div>
  );
}

DinosaurDetailView.propTypes = {
  details: PropTypes.any,
  handleClose: PropTypes.func,
  favorite: PropTypes.any,
  toggleFavorite: PropTypes.func,
};

export default DinosaurDetailView;
