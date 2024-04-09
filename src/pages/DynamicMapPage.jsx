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
  
  const geoCoordinates = countriesArray;


/*
  Object.keys(dinosaursByCountry).forEach((country) => {
    console.log(`Dinosaurs in ${country}:`, dinosaursByCountry[country]);
});

*/


  return (
    <>
      <Navbar activePage={DYNAMIC_MAP_PAGE} />
      <section className="pt-[100px] w-screen text-center">
        <h1 className="text-xl font-bold text-text-light">DYNAMIC MAP PAGE</h1>
        <h2 className="text-text-light">
          This is a page for the dynamic map:
        </h2>
      </section>
      <DynamicMap geoCoordinates={geoCoordinates} />
    </>
  );
}

export default DynamicMapPage;
