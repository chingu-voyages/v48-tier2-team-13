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
      <section className="mb-[85px] mt-[85px] sm:mt-[100px] bg-bg-primary flex flex-col items-center text-text-light">
        <h1 className="font-black text-[37px] md:text-[54px] xl:text-[60px]">Overview Map</h1>
        <h2 className="text-[15px] md:text-[16px] xl:text-[17px] text-center px-3 md:max-w-[800px] block">
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
