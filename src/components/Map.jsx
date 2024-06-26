//Import components for rending a Google Map using react
import {
  APIProvider,
  Map as GoogleMap,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

import PropTypes from "prop-types";

//Hooks import
import useGeoCoordinates from "../hooks/useGeoCoordinates";

//Id generator
import { v4 as uuidv4 } from "uuid";

//Test data examples
//const position= [{lat:50.5039, lng:5.4699}, {lat:45.9432, lng:24.9668}, {lat:44.0165, lng:21.0059} ]

export default function Map({ geoCoordinates }) {
  const unfilteredPosition = useGeoCoordinates(geoCoordinates);
// Filter out the null and undedined results, as well as coordinates for North Africa (which is not a country).
  const northAfricaCoordinates = { lat: 40.248916, lng: 126.699424 };
  const position = unfilteredPosition.filter((coordinate) => {
    return (
      coordinate !== null &&
      coordinate !== undefined &&
      !(coordinate[0].lat === northAfricaCoordinates.lat && coordinate[0].lng === northAfricaCoordinates.lng)
    );
  });

  //Default coordinates for centering the map (I chose France)
  const defaultPosition = { lat: 46.2276, lng: 2.2137 };

  //API provider wraps the map by connecting to the Google Maps API
  //Map component provides the map defaults and the style defined in the Google Cloud Console
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      {/*Temporary responsive div style for testing purpose*/}
      <div className="relative w-full h-[550px] map">
        <GoogleMap
          key={uuidv4()}
          defaultZoom={1.7}
          defaultCenter={defaultPosition}
          mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
          style={{
            background: "black",
          }}
        >
          {position.map((location) => (
            <AdvancedMarker key={uuidv4()} position={location[0]}>
              <Pin
                key={uuidv4()}
                background={"red"}
                borderColor={"white"}
                glyphColor={"white"}
              ></Pin>
            </AdvancedMarker>
          ))}
        </GoogleMap>
      </div>
    </APIProvider>
  );
}

Map.propTypes = {
  geoCoordinates: PropTypes.any,
};
