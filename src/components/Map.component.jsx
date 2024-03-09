//Import components for rending a Google Map using react
import { APIProvider, Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";



export default function DinosaurMap(geoCoordinates){

    const position= geoCoordinates.geoCoordinates
    //Test data examples
    //const position= [{lat:50.5039, lng:5.4699}, {lat:45.9432, lng:24.9668}, {lat:44.0165, lng:21.0059} ]

    //Default coordinates for centering the map (I chose France)
    const defaultPosition= {lat:46.2276, lng:2.2137}

    //API provider wraps the map by connecting to the Google Maps API
    //Map component provides the map defaults and the style defined in the Google Cloud Console
    return <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        {/*Temporary responsive div style for testing purpose*/}
        <div className="relative w-full h-96" >
            <Map
            defaultZoom= {5}
            defaultCenter={defaultPosition}
            mapId={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                {
                    position.map((location, index) => (
                        <>
                       {/* Advanced Marker marks the coordinates position on the map*/}
                         <AdvancedMarker key={index} position={location[0]}>
                            {/*Pin is used to define the styling of the pin on the map*/}
                        <Pin 
                        background={'yellow'} 
                        borderColor={"blue"} 
                        glyphColor={"red"}>
                        </Pin>
                    </AdvancedMarker>

                        </>

                    ))

                }
            

            </Map>
        </div>
    </APIProvider>
}