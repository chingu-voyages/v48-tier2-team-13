//Import hooks
import { useContext, useState, useMemo, useRef } from "react"
import { AppContext } from "../App"



//test data for search results
const previewDetails= {
    name: "Tuojiangosaurus",
    weight: 1500,
    length: 7,
    diet: "herbivorous",
    country: "China",
    imageUrl: "https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/tuojiang.jpg"
}

import SearchItemPreview from "../components/Search-Item-Preview.component"

function SearchPage(){

    //Load dinosaurs api context
    const {dinosaursData} = useContext(AppContext)
    //Load state for search parameter
    const [query, setQuery]= useState("")

    //Filter dinosaur data based on query parameter
    const filteredDinosaurItems= useMemo(() => {
        return dinosaursData.filter(item=> 
            item.foundIn.toLowerCase().includes(query) ||
            item.name.toLowerCase().includes(query) ||
            item.diet.toLowerCase().includes(query)
            )
      }, [dinosaursData, query])


    return (
        <>
            <h1>Temporary placeholder for search page</h1>
        
       <div>
       <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="searchBar">Search by name, country and diet</label>
        <input 
        value= {query}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        type="search" 
        id="searchBar" 
        name="searchBar"
        onChange={(e)=> setQuery(e.target.value.toLowerCase())}
        />
       </div>
       <section>Additional filters</section>
       <br></br>
      <br></br>
       <br></br>
       <div>
                Search Results
            </div>
       <div className="grid grid-cols-3 gap-3">
        {
            filteredDinosaurItems.map(dinosaurItem => (
                <SearchItemPreview key= {dinosaurItem.id} previewDetails={{
                    name: dinosaurItem.name,
                    weight: dinosaurItem.weight,
                    length: dinosaurItem.length,
                    country: dinosaurItem.foundIn,
                    diet: dinosaurItem.diet,
                    imageUrl: dinosaurItem.imageSrc
                }}/>
            ) )
        }
        
       </div>


        </>
    )
  
}

export default SearchPage