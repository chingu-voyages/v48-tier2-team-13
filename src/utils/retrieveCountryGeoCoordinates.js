export default function (countryName, listOfGeoCoordinates){
    //Iterate through array of geocoordinates and retain only the geoocoordinates where the searched position is a Country
    //Based on the Geocode API doc https://geocode.maps.co/, the first item in the return list corresponds to the 
    //country and display_name parameter in response = official name of the country
    //The values of latitude and longi

    const listResponse = []
    listOfGeoCoordinates.forEach(item => {
        if (item.display_name === countryName){
            {/**The values of latitutde and longitude are provided as strings but Google API needs floats */}
            listResponse.push({lat: parseFloat(item.lat), lng: parseFloat(item.lon) })
        } 

    })
    return listResponse
        
      
}