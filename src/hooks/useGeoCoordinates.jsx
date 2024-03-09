import { useCallback, useEffect, useState } from "react";

import httpGetGeoCoordinates from "../services/GeocodingAPI/geocodingApi";

function useGeoCoordinates(countryName) {
  const [geoCoordinates, saveGeoCoordinates] = useState([]);

  const getGeoCoordinates = useCallback(async () => {
    const fetchedGeoCoordinates = await httpGetGeoCoordinates(countryName);
    saveGeoCoordinates(fetchedGeoCoordinates);
  }, []);

  useEffect(() => {
    getGeoCoordinates();
  }, [getGeoCoordinates]);

  return geoCoordinates;
}

export default useGeoCoordinates;