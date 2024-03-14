//Component Imports
import DinosaurMap from "../components/Map";
import { EmptyHeart, SolidHeart } from "../assets/img/FavoritesIcons";

//React imports
import { Link } from "react-router-dom";

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

  return (
    <div
      onClick={() => handleClose()}
      className="grid grid-cols-3 gap-3 fixed h-full w-full  inset-0 flex items-center justify-center z-50 bg-[#000000cc] "
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
        {details.imageSrc === "N/A" ? (
          <img
            className="mt-2 rounded-lg"
            src={defaultDinoImage}
            alt="dinosaur pic"
          />
        ) : (
          <img
            className="mt-2 rounded-lg"
            src={details.imageSrc}
            alt="dinosaur pic"
          />
        )}

        <div>
          <Link onClick={toggleFavorite}>
            {favorite ? <SolidHeart /> : <EmptyHeart />}
          </Link>
        </div>
        <div>
          <div className="text-lg font-semibold mb-4">{details.name}</div>

          {details.description !== "N/A" ? (
            <div className=""> {details.description} </div>
          ) : (
            ""
          )}

          <div>Type: {details.typeOfDinosaur}</div>
          <div>Species: {details.typeSpecies}</div>
          <div>Taxonomy: {details.taxonomy}</div>
          <div>Lived: {details.whenLived}</div>
          <div className=" mr-[10px] text-[black] bg-[#ebebf2] px-4 py-2 mx-2 my-8 text-[1.3rem] rounded-[5px] font-semibold">
            <h3>Found in: {details.foundIn}</h3>
            <h3>Named by: {details.namedBy}</h3>
          </div>

          <div className="mr-[10px] text-[black] bg-[#ebebf2] px-4 py-2 mx-2 my-8 text-[1.3rem] rounded-[5px] font-semibold">
            <h3>Length: {details.length} m</h3>
            <h3>Weight: {details.weight} kg</h3>
            <h3>Diet: {details.diet}</h3>
          </div>

          <div className="mt-[100px] mr-[150px]">
            <DinosaurMap key={details.id} geoCoordinates={geoCoordinates} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DinosaurDetailView;
