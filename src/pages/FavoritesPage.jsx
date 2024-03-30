//React imports
import { useContext} from "react";

// Component Imports
import Navbar from "../components/Navbar";
import SearchItemPreview from '../components/SearchItemPreview'


//Id generator
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../App";

const FAVORITES_PAGE = "FAVORITES_PAGE";

function FavoritesPage() {
  const {favorites} = useContext(AppContext)

  return (
    <>
      <Navbar activePage={FAVORITES_PAGE} />
      <section className="pt-[25%] lg:pt-[8%] lg:mb-[5%] mb-[10%] text-text-light w-screen text-center">
        <h1 className="text-3xl font-bold text-text-light mb-[1%]">Favorites</h1>
        <h1 className="font-xs text-xs">
          Here is the list of dinosaurs you saved as favorites.
        </h1>
        </section>
       
        <div className="container bg-bg-secondary pb-[10%]">
        <div className="text-text-light text-lg font-bold lg:py-[2%] py-[5%]">Favorite Dinosaurs <span>({favorites.length})</span></div>
        <div >
        {favorites.length >= 1 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
              {favorites.map((key) => (
                  <SearchItemPreview 
                   key={uuidv4()} 
                   dinosaurItem={JSON.parse(localStorage.getItem(key))}></SearchItemPreview>
                  
              ))}
            </div>
          ) : (
            <h2 className="mt-0 text-text-light">You have no favorite dinosaurs saved to your list.</h2>
          )}

        </div>
          
        </div>
    </>
  );
}

export default FavoritesPage;
