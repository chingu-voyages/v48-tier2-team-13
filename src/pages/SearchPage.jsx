//Import hooks
import { useContext, useState, useMemo, useEffect } from "react";
import { AppContext } from "../App";

//Import components
import SearchItemPreview from "../components/SearchItemPreview";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

// Libs/Utils
import { v4 as uuidv4 } from "uuid";
import getFoundInCountries from "../utils/getFoundInCountries";
import Footer from "../components/Footer";

const SEARCH_PAGE = "SEARCH_PAGE";

function SearchPage() {
  //Load dinosaurs data from api context
  const { dinosaursData, loadingDinosaursData } = useContext(AppContext);
  //Calculate screen size in order to upload first 5 (mobile) or 10(desktop) results and then the next 5 or 10 more
  const indexToUse = window.innerWidth < 960 ? 5 : 10;

  //Load state to keep track of which items to load on scrolling as well as the index to use to split the data array
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(indexToUse);

  // Get all countries that dinosaurs have been found in
  const dinosaursCountries = getFoundInCountries(dinosaursData);

  // Search queries
  const [searchText, setSearchText] = useState("");
  const [weightFilter, setWeightFilter] = useState([]);
  const [lengthFilter, setLengthFilter] = useState([]);
  const [dietFilter, setDietFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");

  // Load state for suggestions
  const [suggestions, setSuggestions] = useState([]);

  // Filter dinosaur data based on query parameters
  const filteredDinosaurItems = useMemo(() => {
    const searchTextLowerCase = searchText.toLowerCase();
    const weightFilterMin = weightFilter[0];
    const weightFilterMax = weightFilter[1];
    const lengthFilterMin = lengthFilter[0];
    const lengthFilterMax = lengthFilter[1];
    const isWeightNone = weightFilter.length === 0;
    const isLengthNone = lengthFilter.length === 0;

    //Replaced the return with a const in order to update the state of items
    const data = dinosaursData.filter((item) => {
      // Check if the dinosaur's name matches the search text
      const nameMatches =
        !searchTextLowerCase ||
        item.name.toLowerCase().includes(searchTextLowerCase);
      // Check if the dinosaur's weight falls within the specified range
      const weightMatches =
        isWeightNone ||
        (item.weight >= weightFilterMin && item.weight <= weightFilterMax);
      // Check if the dinosaur's length falls within the specified range
      const lengthMatches =
        isLengthNone ||
        (item.length >= lengthFilterMin && item.length <= lengthFilterMax);
      // Check if the dinosaur's diet matches the selected diet filter
      const dietMatches = !dietFilter || item.diet === dietFilter;
      // Check if the dinosaur is found in the selected country
      const countryMatches =
        !countryFilter || item.foundIn.split(",").includes(countryFilter);
      // Apply filtering for all values that have filtering condition
      return (
        nameMatches &&
        weightMatches &&
        lengthMatches &&
        dietMatches &&
        countryMatches
      );
    });
    setItems(data);
    return data;
  }, [
    dinosaursData,
    searchText,
    weightFilter,
    lengthFilter,
    dietFilter,
    countryFilter,
  ]);

  //After dinosaurs are filtered
  // we update the items to load with the first x results (based on screen size) and update index;
  useEffect(() => {
    setItems(filteredDinosaurItems.slice(0, indexToUse));
    setIndex(indexToUse);
  }, [filteredDinosaurItems, indexToUse]);

  //Handle scrolling and loading on scroll
  useEffect(() => {
    const fetchMoreDinosaurData = () => {
      setItems((prevItems) => [
        ...prevItems,
        ...filteredDinosaurItems.slice(index, index + indexToUse),
      ]);
      setIndex((prevIndex) => prevIndex + indexToUse);
    };

    function handleScroll(e) {
      const { scrollHeight, scrollTop, clientHeight } =
        e.target.scrollingElement;
      const isBottom = Math.abs(scrollHeight - (scrollTop + clientHeight)) <= 1;

      if (isBottom) {
        fetchMoreDinosaurData();
      }
    }

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll);
  }, [items, filteredDinosaurItems, index, indexToUse]);

  // Extract weight range value
  function handleWeightInput(e) {
    const value = e.target.value;
    if (value === "None") {
      setWeightFilter([]);
      return;
    }
    const range = value.split("-").map((num) => Number(num));
    setWeightFilter(range);
  }

  // Extract length range value
  function handleLengthInput(e) {
    const value = e.target.value;
    if (value === "None") {
      setLengthFilter([]);
      return;
    }
    const range = value.split("-").map((num) => Number(num));
    setLengthFilter(range);
  }

  //Get suggestion based on search query (on name)
  useEffect(() => {
    const getSuggestions = (searchText) => {
      setSuggestions(
        filteredDinosaurItems.filter((name) =>
          name.name.toLowerCase().startsWith(searchText)
        )
      );
    };

    if (searchText.trim === "") {
      setSuggestions([]);
    } else {
      getSuggestions(searchText);
    }
  }, [searchText, filteredDinosaurItems]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [showButton, setShowButton] = useState(true);
  const [scrollUpButton, setShowScrollUpButton]= useState(false)

  useEffect(() => {
    const handleScrollIcon = () => {
      if (items.length < filteredDinosaurItems.length) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScrollIcon);
    return () => window.removeEventListener("scroll", handleScrollIcon);
  }, [items.length, filteredDinosaurItems.length]);


  useEffect (()=> {
    const handleScrollButtonVisibility = ()=> {
      window.scrollY >300? setShowScrollUpButton(true): setShowScrollUpButton(false)
    }

    window.addEventListener("scroll", handleScrollButtonVisibility);
    return () => window.removeEventListener("scroll", handleScrollButtonVisibility);

  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({top:0, behavior: 'smooth'})
  }

  return (
    <>
      <Navbar activePage={SEARCH_PAGE} />
      <div className="container">
      
        <div className="mt-[85px] sm:mt-[100px] bg-bg-primary">
          <div className="flex flex-col items-center text-text-light">
            <div className="flex flex-col items-center mb-[22px]">
              <h1 className="text-center font-black text-[37px] md:text-[54px] xl:text-[60px]">
                Browse Dinosaurs
              </h1>
              <p className="text-[15px] md:text-[16px] xl:text-[17px] text-center">
                Browse dinosaurs by their name, country they’re found in, diet,
                size, and weight.
              </p>
            </div>

            <div className="mb-[40px] w-full max-w-[800px] relative flex flex-col items-center">
              <input
                type="search"
                className={`bg-bg-secondary text-text-light py-2 px-4 rounded-t-[10px] w-full focus:outline-none focus:shadow-md ${
                  searchText === ""
                    ? "rounded-b-[10px] border-b-[1px] border-b-transparent"
                    : "rounded-b-[0px] border-b-[1px] border-neutral-700"
                }`}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search by name..."
              />

              <div className="rounded-b-[10px] w-full bg-bg-secondary max-h-[100px] overflow-y-scroll search-scroll-bar absolute top-[41px] z-10">
                {suggestions.length > 0 &&
                  searchText !== "" &&
                  suggestions.map((item) => (
                    <div
                      key={item.id}
                      className="px-3 py-1 hover:bg-neutral-800 cursor-pointer"
                      onClick={() => setSearchText(item.name)}
                    >
                      {item.name}
                    </div>
                  ))}
              </div>
            </div>

            <div className="w-full max-w-[1200px] grid md:grid-cols-4 mb-[50px] gap-6 sm:mb-[85px]">
              {/**DIET */}
              <select
                name="diet"
                id="diet"
                value={dietFilter}
                onChange={(e) => setDietFilter(e.target.value)}
                className="
            py-2.5 px-0 
            w-full text-sm 
            text-text-light 
            bg-bg-primary 
            border-b-4 
            border-bg-secondary 
            outline-none
            focus:outline-none 
            focus:ring-0
            dark:outline-none
            font-bold
            "
              >
                <option value="">Diet (None)</option>
                <option value="herbivorous" className="hover:bg-primary">
                  Herbivorous
                </option>
                <option value="carnivorous">Carnivorous</option>
                <option value="omnivorous">Omnivorous</option>
                <option value="herbivorous or omnivorous">
                  Herbivorous or Omnivorous
                </option>
                <option value="unknown">Unknown</option>
              </select>

              {/**COUNTRY */}
              <select
                name="country"
                id="country"
                value={countryFilter}
                onChange={(e) => setCountryFilter(e.target.value)}
                className="
            py-2.5 px-0 
            w-full text-sm 
            text-text-light 
            bg-bg-primary 
            border-0 border-b-4 
            border-bg-secondary 
            focus:outline-none 
            font-bold
            "
              >
                <option value="">Country (None)</option>
                {dinosaursCountries &&
                  dinosaursCountries.length > 0 &&
                  dinosaursCountries.map((country) => {
                    return (
                      <option key={uuidv4()} value={country}>
                        {country}
                      </option>
                    );
                  })}
              </select>

              {/**WEIGHT */}
              <select
                name="weight"
                id="weight"
                onChange={(e) => handleWeightInput(e)}
                className="
            py-2.5 px-0 
            w-full text-sm 
            text-text-light 
            bg-bg-primary 
            border-0 border-b-4 
            border-bg-secondary 
            focus:outline-none 
            font-bold
            "
              >
                <option value="None">Weight (None)</option>
                <option value="0-5000">0 - 5,000kg</option>
                <option value="5000-10000">5,000 - 10,000kg</option>
                <option value="10000-15000">10,000 - 15,000kg</option>
                <option value="15000-Infinity">Greater than 15.000kg</option>
              </select>

              {/**LENGTH */}
              <select
                name="length"
                id="length"
                onChange={(e) => handleLengthInput(e)}
                className="
            py-2.5 px-0 
            w-full text-sm 
            text-text-light 
            bg-bg-primary 
            border-0 border-b-4 
            border-bg-secondary 
            focus:outline-none 
            font-bold
            "
              >
                <option value="None">Length (None)</option>
                <option value="0-1">Less than 1m</option>
                <option value="1-20">1 - 20m</option>
                <option value="20-40">20 - 40m</option>
                <option value="40-Infinity">Greater than 40m</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bg-secondary">
        <div className="fixed bottom-0 z-50">
        {showButton && <button className=" text-text-light">SCROLL</button>}
        </div>
      
        <div className="container bg-bg-secondary py-[40px]">
          <div>
            {loadingDinosaursData ? (
              <Loader />
            ) : filteredDinosaurItems.length === 0 ? (
              <div className="text-text-light text-center font-bold py-[50px] text-[20px]">
                Your search didn&apos;t return any results.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                {items.map((dinosaurItem) => (
                  <SearchItemPreview
                    key={uuidv4()}
                    dinosaurItem={dinosaurItem}
                  />
                ))}
               
                
              </div>
               
            )}
          
          </div>
          <div className="fixed bottom-0 right-0 z-50">
        {scrollUpButton && <button onClick={handleScrollToTop} className=" text-text-light">SCROLL UP</button>}
        </div>
        </div>
      </div>
      
      {filteredDinosaurItems.length === 0 && <Footer />}
    </>
  );
}

export default SearchPage;
