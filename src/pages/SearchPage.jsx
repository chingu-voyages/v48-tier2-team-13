//Import hooks
import { useContext, useState, useMemo, useEffect } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

//Import components
import SearchItemPreview from "../components/SearchItemPreview";
import Loader from "../components/Loader";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { CloseIcon } from "../assets/img/CloseIcon";
import { FilterIcon } from "../assets/img/FilterIcon";
import Navbar from "../components/Navbar";

// Libs/Utils
import { v4 as uuidv4 } from "uuid";
import getFoundInCountries from "../utils/getFoundInCountries";

const SEARCH_PAGE = "SEARCH_PAGE";

function SearchPage() {
  //Load dinosaurs data from api context
  const { dinosaursData, loading } = useContext(AppContext);

  //Load state to keep track of which items to load on scrolling as well as the index to use to split the data array
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);
  //Calculate screen size in order to upload first 5 (mobile) or 10(desktop) results and then the next 5 or 10 more
  const indexToUse = window.innerWidth < 960 ? 5 : 10;

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
      const isBottom = scrollHeight - scrollTop <= clientHeight;
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

  //Fetch suggestion based on search query (on name)
  useEffect(() => {
    const fetchSuggestions = (searchText) => {
      setSuggestions(
        filteredDinosaurItems.filter((name) =>
          name.name.toLowerCase().startsWith(searchText)
        )
      );
    };

    if (searchText.trim === "") {
      setSuggestions([]);
    } else {
      fetchSuggestions(searchText);
    }
  }, [searchText, filteredDinosaurItems]);
  // Set suggestions list based on search query

  //Remove search Icon when searching, display the default close Icon
  const [closeIcon, setCloseIconVisibility] = useState(true);
  function handleSearch(e) {
    setSearchText(e.toLowerCase());
    setCloseIconVisibility(!closeIcon);
  }

  function handleSelect(e) {
    setSearchText(e.name.toLowerCase());
    setSuggestions([]);
  }

  function handleCloseIcon() {
    setCloseIconVisibility(!closeIcon);
    setSearchText("");
  }

  //Filters
  const [hidden, setHidden] = useState(true);
  function handleFilterDisplay() {
    document.getElementById("filters").hidden = !hidden;
    setHidden(document.getElementById("filters").hidden);
  }

  return (
    <>
      <Navbar activePage={SEARCH_PAGE} />
      <div className="bg-bg-primary mt-[100px] lg:mx-[10%] sm:mx-[5%]">
        <div className="relative">
          <div id="searchBar" className="cursor-pointer">
            <ReactSearchAutocomplete
              inputSearchString={searchText}
              items={suggestions}
              onSearch={(e) => handleSearch(e)}
              onSelect={(e) => handleSelect(e)}
              placeholder="Search by dinosaur name..."
              showIcon={false}
              showClear={false}
              onClear={() => setSuggestions([])}
              styling={{
                backgroundColor: "#454545",
                border: "none",
                placeholderColor: "#E7E7E7",
                color: "#E7E7E7",
                hoverBackgroundColor: "#6D6D6D",
                fontFamily: "Inter",
                zIndex: 3,
              }}
            />
          </div>
          <div
            id="closeIcon"
            className="absolute right-6 top-3 mr-[10%] lg:mr-[3%] z-40"
          >
            {closeIcon ? (
              ""
            ) : (
              <Link onClick={handleCloseIcon}>
                <CloseIcon />{" "}
              </Link>
            )}
          </div>
          <div id="filterIcon" className="absolute right-6 top-2 z-40">
            <Link
              className="hover:brightness-150"
              onClick={handleFilterDisplay}
            >
              <FilterIcon></FilterIcon>
            </Link>
          </div>
        </div>
        <div id="filters" className="mx-[5%] lg:m-0" hidden={true}>
          <div className="grid md:grid-cols-4 md:gap-x-6 mb-[5%]">
            {/**DIET */}
            <div>
              <label htmlFor="diet" className="sr-only ">
                Diet Select
              </label>
              <select
                name="diet"
                id="diet"
                onChange={(e) => setDietFilter(e.target.value)}
                className="
            py-2.5 px-0 
            w-full text-sm 
            text-text-light 
            bg-bg-primary 
            border-b-2 
            border-secondary-400 
            outline-none
            focus:outline-none 
            focus:ring-0
            dark:outline-none
            cursor-pointer
          
            "
              >
                <option value="">Diet</option>
                {/* <option value="">None</option> */}
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
            </div>
            {/**COUNTRY */}
            <div className="">
              <label htmlFor="country" className="sr-only">
                Country
              </label>
              <select
                name="country"
                id="country"
                onChange={(e) => setCountryFilter(e.target.value)}
                className="
            py-2.5 px-0 
            w-full text-sm 
            text-text-light 
            bg-bg-primary 
            border-0 border-b-2 
            border-secondary-400 
            focus:outline-none 
            "
              >
                <option value="">Country</option>
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
            </div>

            {/**WEIGHT */}
            <div className="">
              <label htmlFor="weight" className="sr-only">
                Weight Range
              </label>
              <select
                name="weight"
                id="weight"
                onChange={(e) => handleWeightInput(e)}
                className="
            py-2.5 px-0 
            w-full text-sm 
            text-text-light 
            bg-bg-primary 
            border-0 border-b-2 
            border-secondary-400 
            focus:outline-none 
            "
              >
                <option value="None">Weight Range</option>
                <option value="0-5000">0 - 5.000kg</option>
                <option value="5000-10000">5.000 - 10.000kg</option>
                <option value="10000-15000">10.000 - 15.000kg</option>
                <option value="15000-Infinity">&gt;15.000kg</option>
              </select>
            </div>

            {/**LENGTH */}
            <div className="">
              <label htmlFor="length" className="sr-only">
                Length Range
              </label>

              <select
                name="length"
                id="length"
                onChange={(e) => handleLengthInput(e)}
                className="
            py-2.5 px-0 
            w-full text-sm 
            text-text-light 
            bg-bg-primary 
            border-0 border-b-2 
            border-secondary-400 
            focus:outline-none 
            "
              >
                <option value="None">Length Range</option>
                <option value="0-1">&lt;1m</option>
                <option value="1-20">1 - 20m</option>
                <option value="20-40">20 - 40m</option>
                <option value="40-Infinity">&gt;40m</option>
              </select>
            </div>
          </div>
        </div>

        {loading ? (
          <Loader />
        ) : filteredDinosaurItems.length === 0 ? (
          <div>Your search didn&apos;t return any results.</div>
        ) : (
          <div className="mx-[5%] lg:mx-0 lg:w-full lg:max-w-full lg:grid lg:grid-cols-4 lg:gap-3 mt-3">
            {items.map((dinosaurItem) => (
              <SearchItemPreview
                key={uuidv4()}
                previewDetails={{
                  dinosaurItem,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchPage;
