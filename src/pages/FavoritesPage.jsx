//React imports
import { useContext, useEffect } from "react";

// Component Imports
import Navbar from "../components/Navbar";
import SearchItemPreview from "../components/SearchItemPreview";
import Footer from "../components/Footer";

//Id generator
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../App";

const FAVORITES_PAGE = "FAVORITES_PAGE";

function FavoritesPage() {
  const { favorites } = useContext(AppContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar activePage={FAVORITES_PAGE} />
      <section className="mb-[85px] mt-[85px] sm:mt-[100px] bg-bg-primary flex flex-col items-center text-text-light">
        <h1 className="font-black text-[37px] md:text-[54px] xl:text-[60px]">
          Favorites
        </h1>
        <h1 className="text-[15px] md:text-[16px] xl:text-[17px] text-center">
          Here is the list of dinosaurs you saved as favorites.
        </h1>
      </section>

      <div className="bg-bg-secondary">
        <div className="container bg-bg-secondary pb-[10%]">
          <div className="text-text-light text-2xl font-bold pt-[40px] pb-2">
            Favorite Dinosaurs <span>({favorites.length})</span>
          </div>
          <div>
            {favorites.length >= 1 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-5">
                {favorites.map((key) => (
                  <SearchItemPreview
                    key={uuidv4()}
                    dinosaurItem={JSON.parse(localStorage.getItem(key))}
                  ></SearchItemPreview>
                ))}
              </div>
            ) : (
              <h2 className="mt-0 text-text-light">
                You have no favorite dinosaurs saved to your list.
              </h2>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FavoritesPage;
