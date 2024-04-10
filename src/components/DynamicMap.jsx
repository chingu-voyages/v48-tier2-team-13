//Import components for rending a Google Map using react
import {
  APIProvider,
  Map as GoogleMap,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

import PropTypes from "prop-types";

//Hooks import
import { useState} from "react";
import useGeoCoordinates from "../hooks/useGeoCoordinates";

//Id generator
import { v4 as uuidv4 } from "uuid";


export default function DynamicMap({geoCoordinates}) {

  const [open, setOpen] = useState(false);

  // Translate the country names into coordinates.
  const countries = geoCoordinates.map(item => item.country);
  const unfilteredPositions = useGeoCoordinates(countries);

  // Create a new positions array and filter out the null and undefined results (some coordinates were null because the dinosaurs API also generates some non-countries) because these null coordinates resulted in showing wrong country names in the InfoWindows. 
  // I also filtered out the coordinates of North Africa (This is not a country, so these coordinates are wrongly mistaken with North Korea by the GeocodingAPI)
  const northAfricaCoordinates = { lat: 40.248916, lng: 126.699424 };  

  const positions = unfilteredPositions.map((subArray, index) => {
    if (subArray && subArray[0] && !(subArray[0].lat === northAfricaCoordinates.lat && subArray[0].lng === northAfricaCoordinates.lng)) {
      const uuid = uuidv4();
      return {
        lat: subArray[0].lat,
        lng: subArray[0].lng,
        country: geoCoordinates[index].country,  
        dinosaurs: geoCoordinates[index].dinosaurs,
        uuid: uuid
      };
    }
  }).filter(Boolean);
  
    console.log(positions)

  // This is the default position of the map (chosen as France)
  const defaultPosition = { lat: 46.2276, lng: 2.2137 };

   return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className="relative w-full h-[550px]">
        <GoogleMap defaultZoom={1.7} defaultCenter={defaultPosition} mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}>

          {positions.map((location) => (
            <div key={location.uuid}>
              <AdvancedMarker key={location.uuid} position={location} onClick={() => {console.log('Clicked marker uuid:', location.uuid); setOpen(location.uuid)}}>
                <Pin background={"red"} borderColor={"white"} glyphColor={"white"} />
              </AdvancedMarker>
              {open  && (
                <InfoWindow position={location} onCloseClick={() => setOpen(null)}>
                  {console.log('Rendering InfoWindow for uuid:', location.uuid)}
                  <p className="font-bold">Dinosaurs in {location.country}:</p>
                  <ul>
                    {location.dinosaurs.map((dinosaur, index) => (
                      <li key={index}>{dinosaur}</li>
                    ))}
                  </ul>
                </InfoWindow>
              )}
            </div>
          ))}

        </GoogleMap>
      </div>
    </APIProvider>
  ); 
}

DynamicMap.propTypes = {
  geoCoordinates: PropTypes.any,
};
