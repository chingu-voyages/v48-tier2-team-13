import retrieveCountryGeoCoordinates from "../../utils/retrieveCountryGeoCoordinates"

async function httpGetGeoCoordinates(countryName){
    try{
        const response= await fetch("https://geocode.maps.co/search?q="+ countryName+ "&api_key="+ import.meta.env.VITE_GEOCODE_API_KEY)
        const data= await response.json()
        return retrieveCountryGeoCoordinates(countryName, data)
    
    } catch (error) {
        console.log("There was an error fetching your request.")

    }

}

export default httpGetGeoCoordinates