export default function (listOfGeoCoordinates){
    //Create a list of geocoordinates by retrieving only the latitude and longitute of the provided input parameter

    const listResponse = []
    //Transforming the value in number in case it is returned as string since Google Maps API requires floats
    listResponse.push({lat: Number(listOfGeoCoordinates.features[0].properties.lat), lng:Number(listOfGeoCoordinates.features[0].properties.lon) })

    console.log(listResponse)
    return listResponse
        
      
}