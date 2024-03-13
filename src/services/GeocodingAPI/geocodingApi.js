import retrieveCountryGeoCoordinates from "../../utils/retrieveCountryGeoCoordinates";

async function httpGetGeoCoordinates(countryName) {
  try {
    const response = await fetch(
      "https://api.geoapify.com/v1/geocode/search?country=" +
        countryName +
        "&api_key=" +
        import.meta.env.VITE_GEOAPIFY_API_KEY
    );
    const data = await response.json();
    return retrieveCountryGeoCoordinates(data);
  } catch (error) {
    console.log("There was an error fetching your request.");
  }
}

export default httpGetGeoCoordinates;
