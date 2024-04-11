//React imports
import { useCallback, useEffect, useState } from "react";

//Service imports
import httpGetGeoCoordinates from "../services/GeocodingAPI/geocodingApi";

function useGeoCoordinates(countryNames) {

  //Load state for coordinates
  const [geoCoordinates, setGeoCoordinates] = useState([]);

  const getGeoCoordinates = useCallback(async () => {
    const list = [];
    for (const country of countryNames) {
      if (country !== 'N/A')
      {
        const fetchedGeoCoordinate = await httpGetGeoCoordinates(country);
      list.push(fetchedGeoCoordinate);
    }
    }
    setGeoCoordinates(list);
  }, [countryNames]);

  useEffect(() => {
    getGeoCoordinates();
  }, []);

  return geoCoordinates;
}

export default useGeoCoordinates;
