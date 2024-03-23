//React imports
import { useState } from "react";

// Component Imports
import Navbar from "../components/Navbar";

//Import functions
import updateLocalStorage from "../utils/updateLocalStorage";

//Id generator
import { v4 as uuidv4 } from "uuid";

const FAVORITES_PAGE = "FAVORITES_PAGE";

function FavoritesPage() {
  const [favorites, setFavorites] = useState(Object.keys(localStorage));

  function handleDelete(e) {
    updateLocalStorage(true, e.target.id);
    setFavorites(Object.keys(localStorage));
  }

  return (
    <>
      <Navbar activePage={FAVORITES_PAGE} />
      <section className="pt-[100px] text-text-light w-screen text-center">
        <h1 className="text-xl font-bold text-text-light">FAVORITES PAGE</h1>
        <h1 className="font-bold">
          Here is a list of dinosaurs you saved as favorites:
        </h1>
        <div>
          {favorites.length >= 1 ? (
            <div>
              {favorites.map((key) => (
                <div key={uuidv4()}>
                  {JSON.parse(localStorage.getItem(key))}
                  <button id={key} onClick={(e) => handleDelete(e)}>
                    DELETE
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <h2>You have no favorite dinosaurs saved to your list.</h2>
          )}
        </div>
      </section>
    </>
  );
}

export default FavoritesPage;
