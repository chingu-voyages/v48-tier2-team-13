//Component Imports
import Map from "../components/Map";
import { EmptyHeart, SolidHeart } from "../assets/img/FavoritesIcons";

//React imports
import { Link, useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";

//Image
import defaultDinoImage from "../assets/img/default-dino-image.png";

//Functions
import updateLocalStorage from "../utils/updateLocalStorage.js";

//Icons
import { BackIcon } from "../assets/img/BackIcon.jsx";
import { PlusIcon, MinusIcon } from "../assets/img/FullDetailsIcons.jsx";
import { PinIcon } from "../assets/img/PinIcon.jsx";

//App Context
import { AppContext } from "../App.jsx";
import { LayersIcon } from "../assets/img/LayersIcon.jsx";
import { LivedIn } from "../assets/img/LivedIn.jsx";
import { PersonIcon } from "../assets/img/PersonIcon.jsx";

function DinosaurDetailsPage() {
  //Load context
  const { dinosaursData } = useContext(AppContext);
  //Load useParams to retrieve id
  const { idParameter } = useParams();
  console.log(idParameter);

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
  } = dinosaursData[idParameter - 1];

  //The country is returned as a string from the Dinosaur API which is problematic when we deal with multiple countries
  //per item. We need to transform the list of countries from string to array
  const geoCoordinates = foundIn.split(",");

  //Get favorites state from local storage
  const [favorite, setFavorite] = useState(localStorage.getItem(id));

  // Handle favorite function
  function toggleFavorite() {
    setFavorite(!favorite);
    updateLocalStorage(favorite, id, name);
  }

  //Handle full details
  const [detailsVisibility, setDetailsVisibility] = useState(true);

  function handleFullDetails() {
    const hiddenDetails = (document.getElementById("fullDetails").hidden =
      !detailsVisibility);
    setDetailsVisibility(hiddenDetails);
  }

  //Handle location map

  const [mapVisibility, setMapVisibility] = useState(true);
  function handleLocationMap() {
    const hiddenMap = (document.getElementById("locationMap").hidden =
      !mapVisibility);
    setMapVisibility(hiddenMap);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="text-text-light h-full w-full overflow-hidden inset-0 items-center justify-center z-50 bg-bg-dark">
        <Link to="/search">
          <BackIcon />
        </Link>

        <div className=" lg:ml-[3%] ml-[13%]">
          <h1 className="font-primary text-2xl text-secondary-500">
            {name.toUpperCase()}
          </h1>
        </div>
        <div
          className="grid grid-cols-1 relative 
      lg:grid lg:grid-cols-2 place-items-center
      lg:w-[90%] lg:ml-[3%] mt-[1%] py-[3%] rounded-lg bg-blend-lighten lg:shadow-2xl lg:shadow-neutral-700"
        >
          <div id="image" className="lg:mb-[5%] my-[5%]">
            {imageSrc === "N/A" ? (
              <img
                className="mt-2 rounded-md w-80 h-80 object-contain"
                src={defaultDinoImage}
                alt="dinosaur pic"
              />
            ) : (
              <img
                className="mt-2 rounded-md w-80 h-80 object-contain"
                src={imageSrc}
                alt="dinosaur pic"
              />
            )}
          </div>

          <div
            className="bg-bg-dark w-80 lg:h-64 h-48 rounded-md pt-[10%] pl-[5%] text-text-light 
        shadow-lg  shadow-neutral-800"
          >
            <h3 className="font-secondary">
              Weight is {weight === "N/A" ? "unknown" : weight + " kg"}
            </h3>
            <h3 className="font-secondary">
              Length is {length === "N/A" ? "unknown" : length + " m"}
            </h3>
            <h3 className="font-secondary">
              Found in {foundIn === "N/A" ? "unknown" : foundIn}
            </h3>
            <h3 className="font-secondary">
              Has a{"("}n{")"} {diet === "N/A" ? "unknown" : diet} diet
            </h3>
          </div>

          <div className="absolute right-6 lg:top-2 top-0">
            <Link onClick={toggleFavorite}>
              {favorite ? <SolidHeart /> : <EmptyHeart />}
            </Link>
          </div>
        </div>
        <div className="relative lg:grid lg:grid-cols-2 lg:mt-[2%]">
          <div className="lg:ml-[5%] ml-[12%] lg:ml-[6%] pb-[5%] lg:pb-[10%] grid grid-cols-2">
            <h3 className="lg:w-[50%] text-secondary text-lg">Full details</h3>

            <div className="absolute lg:left-[10%] left-[85%] grid grid-cols-2 gap-1 lg:top-0.5 ">
              <div className="">
                <Link onClick={handleFullDetails}>
                  {detailsVisibility ? <PlusIcon /> : <MinusIcon />}
                </Link>
              </div>
            </div>
          </div>
          <div className="place-content-end lg:mt-0 mt-2 ">
            <div className="relative ml-[3%]">
              <h3 className="lg:ml-[65%] ml-[10%] w-[50%] text-secondary text-lg">
                Location map
              </h3>
              <div className="absolute top-[-20%] lg:right-[15%] right-[7%] lg:absolute lg:right-[15%] lg:top-[-15%]">
                <Link onClick={handleLocationMap}>
                  <PinIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-secondary text-lg lg:ml-[3%] ml-[13%] mt-[10%] lg:mt-0 mb-[5%]  ">
          {description !== "N/A" ? (
            <p className=" mr-[5%] lg:mr-[8%] leading-relaxed">
              {" "}
              {description}{" "}
            </p>
          ) : (
            <p>No description available.</p>
          )}
        </div>
        <div id="fullDetails" className="pb-[5%] lg:pb-1" hidden>
          <div className="grid lg:grid-cols-2 ml-[5%] lg:ml-[3%] lg:mb-[5%]">
            <div className=" rounded-lg shadow-lg  shadow-neutral-800 mr-[5%] h-full pt-[5%] pb-[5%] pl-[5%]">
              <h1 className="text-2xl text-secondary-500 font-primary">TYPE</h1>
              <section>{typeOfDinosaur}</section>
            </div>

            <div className=" rounded-lg shadow-lg  shadow-neutral-800 lg:mr-[15%] mr-[5%] h-full py-[5%] pl-[5%]">
              <h1 className="text-2xl  text-secondary-500 font-primary">
                SPECIES
              </h1>
              <section>{typeSpecies}</section>{" "}
            </div>
          </div>
          <div className="relative rounded-lg shadow-lg  shadow-neutral-800 mr-[15%] h-full w-[90%]  ml-[5%] lg:ml-[3%] pt-[3%] pb-[5%] pl-[5%] lg:pl-[2%]">
            <h1 className="text-2xl  text-secondary-500 font-primary lg:my-0 my-[5%]">
              TAXONOMY
            </h1>
            <div className="absolute lg:right-6 right-0 top-[10%] lg:top-6">
              <LayersIcon />
            </div>
            <section>{taxonomy}</section>
          </div>

          <div className="relative rounded-lg shadow-lg  shadow-neutral-800 mr-[15%] h-full w-[90%]  ml-[5%] lg:ml-[3%] pt-[3%] pb-[5%] pl-[5%] lg:pl-[2%]">
            <h1 className="text-2xl  text-secondary-500 font-primary lg:my-0 my-[5%]">
              LIVED IN
            </h1>
            <div className="absolute lg:right-6 right-0 top-[10%] lg:top-6">
              <LivedIn />
            </div>
            <section>{whenLived}</section>
          </div>

          <div className="relative rounded-lg shadow-lg  shadow-neutral-800 mr-[15%] h-full w-[90%] ml-[5%] lg:ml-[3%] pt-[3%] pb-[15%] lg:pb-[5%] pl-[5%] lg:pl-[2%]">
            <h1 className="text-2xl  text-secondary-500 font-primary">
              NAMED BY
            </h1>
            <div className="absolute right-6 top-6">
              <PersonIcon />
            </div>
            <section>{namedBy}</section>
          </div>
        </div>
      </div>

      <div
        id="locationMap"
        className=" ml-5 lg:ml-[3%] mr-5 w-[90%] mt-[10%] lg:mt-[5%] mb-[5%]"
        hidden
      >
        <Map key={id} geoCoordinates={geoCoordinates} />
      </div>
    </>
  );
}

export default DinosaurDetailsPage;
