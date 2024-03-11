//Component import
import DinosaurMap from "../components/Map";
import DietChart from "../components/PieChart";
import DinosaurTypeChart from '../components/DoughnutChart';

//Hooks import
import useGeoCoordinates from "../hooks/useGeoCoordinates";

//Test Data
//const geoCoordinates= [{lat:50.5039, lng:5.4699}, {lat:45.9432, lng:24.9668}, {lat:44.0165, lng:21.0059} ]

function HomePage() {
  //Load data for Maps= temporary location for the Map component in the home page
  const geoCoordinates = useGeoCoordinates(["Belgium", "France", "Luxembourg"]);

  //Temporary dataset for the diet pie chart
  const dietData = [
    { label: 'Herbivore', value: 50 },
    { label: 'Carnivore', value: 40 },
    { label: 'Omnivore', value: 10 },
  ];

  //Temporary dataset for the dinosaur type doughnut chart
  const dinosaurTypeData = [
    { label: 'prosauropod', value: 20 },
    { label: 'ceratopsian', value: 15 },
    { label: 'large therapod', value: 25 },
    { label: 'sauropod', value: 20 },
    { label: 'small ornithischian', value: 10 },
    { label: 'small therapod', value: 10 },
  ];
  
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

      <h4 className="text-center text-[16px] mt-5">Temporary Diet Distribution Chart</h4>
      <div>
        <DietChart dataset={dietData}  />
      </div>

      <h4 className="text-center text-[16px] mt-5">Temporary Dinosaur Type Distribution Chart</h4>
      <div>
        <DinosaurTypeChart dataset={dinosaurTypeData} />
      </div>
    </>
  );
}

export default HomePage;
