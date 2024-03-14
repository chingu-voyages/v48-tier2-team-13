//Import hooks
import { useContext, useState, useMemo } from "react";
import { AppContext } from "../App";

//Import components
import SearchItemPreview from "../components/SearchItemPreview";
import Loader from "../components/Loader";

function SearchPage() {
  //Load dinosaurs api context
  const { dinosaursData, loading } = useContext(AppContext);

  //Load state for search parameter
  const [query, setQuery] = useState("");

  //Filter dinosaur data based on query parameter
  const filteredDinosaurItems = useMemo(() => {
    switch (query) {
      case "0 - 5.000 kg":
        return dinosaursData.filter(
          (item) => item.weight > 0 && item.weight <= 5000
        );
      case "5.000 - 10.000 kg":
        return dinosaursData.filter(
          (item) => item.weight > 5000 && item.weight <= 10000
        );
      case "10.000 - 15.000 kg":
        return dinosaursData.filter(
          (item) => item.weight > 10000 && item.weight <= 15000
        );
      case "> 15.000 kg":
        return dinosaursData.filter((item) => item.weight > 15000);
      case "< 1m":
        return dinosaursData.filter(
          (item) => item.length > 0 && item.length <= 1
        );
      case "1 - 20m":
        return dinosaursData.filter(
          (item) => item.length > 1 && item.length <= 20
        );
      case "20 - 40m":
        return dinosaursData.filter(
          (item) => item.length > 20 && item.length <= 40
        );
      case "> 40m":
        return dinosaursData.filter((item) => item.length > 40);
      default:
        return dinosaursData.filter(
          (item) =>
            item.foundIn.toLowerCase().includes(query) ||
            item.name.toLowerCase().includes(query) ||
            item.diet.toLowerCase().includes(query)
        );
    }
  }, [dinosaursData, query]);

  return (
    <>
      <h1>Temporary placeholder for search page</h1>

      <div>
        <label
          className="block mb-2 text-sm font-medium text-gray-900"
          htmlFor="searchBar"
        >
          Search by name, country and diet
        </label>
        <input
          value={query}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="search"
          id="searchBar"
          name="searchBar"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </div>

      <br></br>
      <br></br>
      <br></br>
      <div>Search Results</div>
      <label htmlFor="weight">Filter by weight:</label>
      <select
        name="weight"
        id="weight"
        onChange={(e) => setQuery(e.target.value)}
      >
        <option value=""></option>
        <option value="0 - 5.000 kg">0 - 5.000 kg</option>
        <option value="5.000 - 10.000 kg">5.000 - 10.000 kg</option>
        <option value="10.000 - 15.000 kg">10.000 - 15.000 kg</option>
        <option value="> 15.000 kg">&gt;15.000 kg</option>
      </select>
      <label htmlFor="length">Filter by length:</label>
      <select
        name="length"
        id="length"
        onChange={(e) => setQuery(e.target.value)}
      >
        <option value=""></option>
        <option value="< 1m"> &lt; 1m </option>
        <option value="1 - 20m">1 - 20m</option>
        <option value="20 - 40m">20 - 40m</option>
        <option value="> 40m">&gt;40m</option>
      </select>

      {loading ? (
        <Loader />
      ) : filteredDinosaurItems.length === 0 ? (
        <div>Your search didn&apos;t return any results.</div>
      ) : (
        <div className="grid grid-cols-5 gap-3">
          {filteredDinosaurItems.map((dinosaurItem) => (
            <>
              <SearchItemPreview
                key={dinosaurItem.id}
                previewDetails={{
                  dinosaurItem,
                }}
              />
            </>
          ))}
        </div>
      )}
    </>
  );
}

export default SearchPage;
