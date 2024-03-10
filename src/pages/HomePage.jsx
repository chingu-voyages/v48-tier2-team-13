//Component import
import DinosaurMap from "../components/Map.component";

//Hooks import
import useGeoCoordinates from "../hooks/useGeoCoordinates";

//Test Data
//const geoCoordinates= [{lat:50.5039, lng:5.4699}, {lat:45.9432, lng:24.9668}, {lat:44.0165, lng:21.0059} ]

function HomePage() {
  //Load data for Maps= temporary location for the Map component in the home page
  const geoCoordinates = useGeoCoordinates(["N/A", "USA", "Luxembourg"]);
  return (
    <>
      <h1 className="text-[55px] font-bold text-center mt-[50px]">
        DINOSAURUS APP
      </h1>
      <h2 className="text-center font-bold text-[30px]">
        Voyage 48 | Tier2 | Team 13
      </h2>
      <h3 className="text-center text-[20px] mt-3">Home Page</h3>

      <h4> Temporary placeholder for MAP COMPONENT</h4>
      <DinosaurMap geoCoordinates={geoCoordinates}></DinosaurMap>
    </>
  );
}

export default HomePage;
