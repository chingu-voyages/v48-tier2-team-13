//Component Imports
import Map from "../components/Map";
import { EmptyHeart, SolidHeart } from "../assets/img/FavoritesIcons";
import Navbar from "../components/Navbar.jsx";

//React imports
import { Link, useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";

//Image
import defaultDinoImage from "../assets/img/default-dino-image.png";

//Functions
import updateLocalStorage from "../utils/updateLocalStorage.js";

//Icons
import { BackIcon } from "../assets/img/BackIcon.jsx";


//App Context
import { AppContext } from "../App.jsx";


function DinosaurDetailsPage() {
  //Load context
  const { dinosaursData } = useContext(AppContext);
  //Load useParams to retrieve id
  const { idParameter } = useParams();

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Navbar />
      <div className=" bg-bg-secondary">

        <div className=" container bg-bg-primary">
        <div id="backButton" className="mt-32">
        <Link to="/search" className="absolute right-20 ">
            <BackIcon />
          </Link>
        </div>

        <div id="header" className="lg:grid lg:grid-flow-col auto-cols-auto pt-14 pb-10 pr-0">

          <div className="rounded-lg">
            
             {imageSrc === "N/A" ? (
                   <img
                     className="rounded-lg w-80 h-80 object-contain"
                     src={defaultDinoImage}
                     alt="dinosaur pic"
                   />
                 ) : (
                   <img
                     className="rounded-lg w-80 h-80 object-contain"
                     src={imageSrc}
                     alt="dinosaur pic"
                   />
                 )}
               </div>
         

          <div id="shortDescription" className="ml-10 pt-8 relative">
            <div className="text-text-light text-4xl font-bold">
              {name}
              <div className="absolute left-72 top-10">
                <Link onClick={toggleFavorite}>
                  {favorite ? <SolidHeart /> : <EmptyHeart />}
                </Link>
              </div>
            </div>
              
            <div className="text-text-light ">
              <p className="text-wrap mt-4">
              {name} is a {typeSpecies} dinosaur within the {taxonomy} classification. 
              </p>
              <p className="text-wrap mt-4">
              They lived during {whenLived}. It&apos;s fossils were found in {foundIn}.
              
              </p>
              <p className="text-wrap mt-4">
                It was named by {namedBy}.
              
              </p>
             
            </div>

          </div>
        </div>

        </div>
      
              <div id="" className="container">
                <h1 className="text-text-light text-xl font-bold">Characteristics</h1>

                <div>Cards</div>

                <h1 className="text-text-light text-xl font-bold">Description</h1>

                <div id="description" className="text-text-light w-full bg-bg-primary mt-8 py-6 px-6">
                {
                description
                }
          
              </div>

              <h1 className="text-text-light text-xl font-bold mt-6">Discovery location</h1>

              <div
        id="locationMap"
        className=" mt-[10%] lg:mt-[3%] mb-[5%]"
        
      >
        <Map key={id} geoCoordinates={geoCoordinates} />
      </div>


              </div>

             
              
      </div>


      

    </>
  );
}

export default DinosaurDetailsPage;
