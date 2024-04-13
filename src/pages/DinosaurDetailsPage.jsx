//Component Imports
import Map from "../components/Map";
import { EmptyHeart, SolidHeart } from "../assets/img/FavoritesIcons";
import Navbar from "../components/Navbar.jsx";

//React imports
import { useParams, } from "react-router-dom";
import { useState, useContext, useEffect, useRef, } from "react";

//Image
import defaultDinoImage from "../assets/img/default-dino-image.png";

//Functions
import updateLocalStorage from "../utils/updateLocalStorage.js";

//App Context
import { AppContext } from "../App.jsx";


function DinosaurDetailsPage() {
  //Load context
  const { dinosaursData, setFavorites } = useContext(AppContext);
  //Load useParams to retrieve id
  const { idParameter } = useParams();


  const descriptionSectionRef = useRef(null);

  const {
    id ,
    name,
    imageSrc,
    description,
    typeOfDinosaur,
    whenLived,
    foundIn,
    namedBy,
    length,
    weight,
    diet,
    typeSpecies,
    taxonomy,
  } =  dinosaursData[idParameter-1] ;

  //The country is returned as a string from the Dinosaur API which is problematic when we deal with multiple countries
  //per item. We need to transform the list of countries from string to array
  const geoCoordinates = foundIn.split(",");

  //Get favorites state from local storage
  const [favorite, setFavorite] = useState(localStorage.getItem(id));

  // Handle favorite function
  function toggleFavorite() {
    setFavorite(!favorite);
    updateLocalStorage(favorite, dinosaursData[idParameter - 1]);
    setFavorites(Object.keys(localStorage));
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dietText = () => {
    switch (diet) {
      case "N/A":
        return "Unknown";
      case "herbivorous or omnivorous":
        return "Herbivore/Omnivore";
      default:
        return capitalize(diet);
    }
  };

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <>
      <Navbar activePage={"SEARCH_PAGE"} />
      <div className="container flex flex-col lg:flex-row lg:gap-5 text-text-light justify-center py-[90px]">
        <div className="flex-1 sm:p-5 relative">
          <span className="hidden sm:block bg-primary-600 w-[65px] h-[65px] absolute top-0 left-0 z-0"></span>
          <div className="bg-text-light overflow-hidden z-10 w-full">
            <img
              src={imageSrc === "N/A" ? defaultDinoImage : imageSrc}
              alt={name}
              className="h-[300px] 2xl:h-[350px] object-contain block mx-auto"
            />
          </div>
          <span className="hidden sm:block bg-secondary-400 w-[65px] h-[65px] absolute bottom-0 right-0 z-0"></span>
        </div>
        <div className="flex-1 pt-5 relative">
          <div className="flex items-center gap-4">
            <h1 className="font-black text-[37px]">{name}</h1>
            <div onClick={toggleFavorite}>
              {favorite ? (
                <SolidHeart dimensions={{ width: 38, height: 38 }} />
              ) : (
                <EmptyHeart dimensions={{ width: 38, height: 38 }} />
              )}
            </div>
          </div>
          <p className="font-bold mt-3 text-xl lg:max-w-[750px]">
            {`${name} is a ${typeSpecies} dinosaur that lived in ${whenLived}. They are a part of the ${taxonomy} classification. Its fossils have been found in ${foundIn}. ${name} was named by ${namedBy}.`}
          </p>
        </div>
      </div>
      <div className="bg-bg-secondary">
        <div className="container py-[45px] text-text-light">
          <h2 className="font-bold text-[25px]">Characteristics</h2>
          <div className="mt-5 text-[22px]">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-1 items-center justify-between bg-bg-primary p-3 font-bold">
                <div className="flex items-center gap-2">
                  <div className="w-[35px] h-[35px] bg-[url('../assets/img/weight.png')] bg-contain bg-center"></div>
                  <div>Weight:</div>
                </div>
                <div>{weight === "N/A" ? "Unknown" : weight + "kg"}</div>
              </div>

              <div className="flex flex-1 items-center justify-between bg-bg-primary p-3 font-bold">
                <div className="flex items-center gap-2">
                  <div className="w-[35px] h-[35px] bg-[url('../assets/img/length.png')] bg-contain bg-center"></div>
                  <div>Length:</div>
                </div>

                <div>{length === "N/A" ? "Unknown" : length + "m"}</div>
              </div>
            </div>

            <div className="flex gap-5 mt-5 flex-col md:flex-row">
              <div className="flex flex-1 items-center justify-between bg-bg-primary p-3 font-bold">
                <div className="flex items-center gap-2">
                  <div className="w-[35px] h-[35px] bg-[url('../assets/img/diet.png')] bg-contain bg-center"></div>
                  <div>Diet:</div>
                </div>
                <div>{dietText()}</div>
              </div>

              <div className="flex flex-1 items-center justify-between bg-bg-primary p-3 font-bold">
                <div className="flex items-center gap-2">
                  <div className="w-[35px] h-[35px] bg-[url('../assets/img/type.png')] bg-contain bg-center"></div>
                  <div>Type:</div>
                </div>

                <div>
                  {typeOfDinosaur === "N/A"
                    ? "Unknown"
                    : typeOfDinosaur
                        .split(" ")
                        .map((word) => capitalize(word))
                        .join(" ")}
                </div>
              </div>
            </div>
          </div>
          <h2
            ref={descriptionSectionRef}
            className="font-bold text-[25px] mt-[55px]"
          >
            Description
          </h2>
          <p className="bg-bg-primary p-5 font-bold text-[22px] mt-5">
            {description === "N/A"
              ? "There is no description for this dinosaur."
              : description}
          </p>
          <h2 className="font-bold text-[25px] mt-[55px]">
            Discovery Location
          </h2>
          <div className="mt-5">
            <Map key={id} geoCoordinates={geoCoordinates} />
          </div>
        </div>
       
      </div>
    </>
  );
}

export default DinosaurDetailsPage;
