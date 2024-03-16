//Import hooks
import { useContext, useState, useMemo } from "react";
import { AppContext } from "../App";

//Import components
import SearchItemPreview from "../components/SearchItemPreview";
import Loader from "../components/Loader";

// Libs/Utils
import { v4 as uuidv4 } from "uuid";
import getFoundInCountries from "../utils/getFoundInCountries";

function SearchPage() {
  //Load dinosaurs api context
  const { dinosaursData, loading } = useContext(AppContext);

  // Get all countries that dinosaurs have been found in
  const dinosaursCountries = getFoundInCountries(dinosaursData);

  // Search queries
  const [searchText, setSearchText] = useState("");
  const [weightFilter, setWeightFilter] = useState([]);
  const [lengthFilter, setLengthFilter] = useState([]);
  const [dietFilter, setDietFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");

  // Filter dinosaur data based on query parameters
  const filteredDinosaurItems = useMemo(() => {
    return dinosaursData.filter((item) => {
      // Check if the dinosaur's name matches the search text
      //if it's empty return true otherwise make filtering condition
      const nameMatches =
        !searchText || item.name.toLowerCase().includes(searchText);

      // Check if the dinosaur's weight falls within the specified range
      //if it's empty return true otherwise make filtering condition
      const weightMatches =
        weightFilter.length === 0 ||
        (item.weight >= weightFilter[0] && item.weight <= weightFilter[1]);

      // Check if the dinosaur's length falls within the specified range
      //if it's empty return true otherwise make filtering condition
      const lengthMatches =
        lengthFilter.length === 0 ||
        (item.length >= lengthFilter[0] && item.length <= lengthFilter[1]);

      // Check if the dinosaur's diet matches the selected diet filter
      //if it's empty return true otherwise make filtering condition
      const dietMatches = !dietFilter || item.diet === dietFilter;

      // Check if the dinosaur is found in the selected country
      //if it's empty return true otherwise make filtering condition
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
  }, [
    dinosaursData,
    searchText,
    weightFilter,
    lengthFilter,
    dietFilter,
    countryFilter,
  ]);

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

  return (
    <>
      <h1>Temporary placeholder for search page</h1>

      <div className="my-5">
        <label
          className="block text-sm font-medium text-gray-900"
          htmlFor="searchBar"
        >
          Search by Name
        </label>
        <input
          value={searchText}
          className="border-2 border-black"
          type="search"
          id="searchBar"
          name="searchBar"
          onChange={(e) => setSearchText(e.target.value.toLowerCase())}
        />
      </div>

      <label htmlFor="diet">Filter by diet:</label>
      <select
        name="diet"
        id="diet"
        onChange={(e) => setDietFilter(e.target.value)}
      >
        <option value="">None</option>
        <option value="herbivorous">Herbivorous</option>
        <option value="carnivorous">Carnivorous</option>
        <option value="omnivorous">Omnivorous</option>
        <option value="herbivorous or omnivorous">
          Herbivorous or Omnivorous
        </option>
        <option value="unknown">Unknown</option>
      </select>

      <label htmlFor="country">Found In:</label>
      <select
        value={countryFilter}
        name="country"
        id="country"
        onChange={(e) => setCountryFilter(e.target.value)}
      >
        <option value="">None</option>
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

      <label htmlFor="weight">Filter by weight:</label>
      <select name="weight" id="weight" onChange={(e) => handleWeightInput(e)}>
        <option value="None">None</option>
        <option value="0-5000">0 - 5.000kg</option>
        <option value="5000-10000">5.000 - 10.000kg</option>
        <option value="10000-15000">10.000 - 15.000kg</option>
        <option value="15000-Infinity">&gt;15.000kg</option>
      </select>

      <label htmlFor="length">Filter by length:</label>
      <select name="length" id="length" onChange={(e) => handleLengthInput(e)}>
        <option value="None">None</option>
        <option value="0-1">&lt;1m</option>
        <option value="1-20">1 - 20m</option>
        <option value="20-40">20 - 40m</option>
        <option value="40-Infinity">&gt;40m</option>
      </select>

      {loading ? (
        <Loader />
      ) : filteredDinosaurItems.length === 0 ? (
        <div>Your search didn&apos;t return any results.</div>
      ) : (
        <div className="grid grid-cols-5 gap-3 mt-5">
          {filteredDinosaurItems.map((dinosaurItem) => (
            <SearchItemPreview
              key={dinosaurItem.id}
              previewDetails={{
                dinosaurItem,
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default SearchPage;
