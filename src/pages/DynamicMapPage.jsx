import Navbar from "../components/Navbar.jsx";
import DynamicMap from "../components/DynamicMap.jsx";
import { useContext, useEffect } from "react";
import { AppContext } from "../App.jsx";
import Loader from "../components/Loader.jsx";

const DYNAMIC_MAP_PAGE = "DYNAMIC_MAP_PAGE";

function DynamicMapPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {dinosaursData, loadingDinosaursData, errorDinosaursData} = useContext(AppContext);
  if (loadingDinosaursData) {
    return <Loader />;
  }
  if (errorDinosaursData) {
    return (
      <div className="text-center mt-8">
        <p>Error: There was an error loading the map.</p>
      </div>
    );
  }


  const dinosaursByCountry = {};
  dinosaursData.map((dinosaur) => {
      const { name, foundIn } = dinosaur;
      const countries = foundIn.split(","); 
      countries.forEach((country) => {
          const trimmedCountry = country.trim();
          if (dinosaursByCountry[trimmedCountry]) {
              dinosaursByCountry[trimmedCountry].push(name);
          } else {
              dinosaursByCountry[trimmedCountry] = [name];
          }
      });
  });
  const countriesArray = Object.keys(dinosaursByCountry);
  const dinosaursArray = Object.values(dinosaursByCountry);
/*  console.log(dinosaursByCountry)
    console.log(countriesArray)
    console.log(dinosaursArray)
*/

//const geoCoordinates = countriesArray;
const geoCoordinates = countriesArray.map((country, index) => {
  return {
    country: country,
    dinosaurs: dinosaursArray[index]
  };
});

console.log(geoCoordinates);

  return (
    <>
      <Navbar activePage={DYNAMIC_MAP_PAGE} />
      <section className="pt-[100px] w-screen text-center">
        <h1 className="text-xl font-bold text-text-light">OVERVIEW MAP</h1>
        <h2 className="text-text-light block mx-auto mb-4 lg:max-w-[50%]">
          This is a map where you can check all the dinosaur locations.
          If you click on a pin, you will get a list of all dinosaurs found in that particular location. 
          Wait a few seconds for the map to load.
        </h2>
      </section>
      <DynamicMap geoCoordinates = {geoCoordinates}/>
    </>
  );
}

export default DynamicMapPage;
