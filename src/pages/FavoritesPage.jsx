//React imports
import { useState } from "react";

//Import functions
import updateLocalStorage from "../utils/updateLocalStorage";

//Id generator
import { v4 as uuidv4 } from "uuid";

function FavoritesPage() {
  const [favorites, setFavorites] = useState(Object.keys(localStorage));

  function handleDelete(e) {
    updateLocalStorage(true, e.target.id);
    setFavorites(Object.keys(localStorage));
  }

  return (
    <div>
      <h1>Here is a list of dinosaurs you saved as favorites:</h1>
      <div>
        {favorites.length >= 1 ? (
          <div>
            {favorites.map((key) => (
  
                <div key={uuidv4()}>
                  {JSON.parse(localStorage.getItem(key))}
                  <button id={key} onClick={(e) => handleDelete(e)}>
                      DELETE{" "}
                  </button>
                </div>
    
            ))}
          </div>
        ) : (
          <h2>You have no favorite dinosaurs saved to your list.</h2>
        )}
      </div>
    </div>
  );
}

export default FavoritesPage;
