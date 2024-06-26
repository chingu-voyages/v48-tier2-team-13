import { useEffect, useState, createContext } from "react";
import Router from "./components/Router";
import fetchDinosaursData from "./services/DinosaursAPI/dinosaursApi";
import fetchDinosaursNews from "./services/NewsAPI/newsApi";

export const AppContext = createContext({
  dinosaursData: [],
  dinosaursNews: [],
  loadingDinosaursData: true,
  loadingDinosaursNews: true,
  errorDinosaursData: null,
  errorDinosaursNews: null,
});

function App() {
  const [dinosaursData, setDinosaursData] = useState([]);
  const [loadingDinosaursData, setLoadingDinosaursData] = useState(true);
  const [errorDinosaursData, setErrorDinosaursData] = useState(null);

  const [dinosaursNews, setDinosaursNews] = useState([]);
  const [loadingDinosaursNews, setLoadingDinosaursNews] = useState(true);
  const [errorDinosaursNews, setErrorDinosaursNews] = useState(null);

  //Favorites state comes from local storage => use as context since 2 components are using it
  const [favorites, setFavorites] = useState(Object.keys(localStorage));

  useEffect(() => {
    fetchDinosaursData()
      .then((data) => {
        setDinosaursData(data);
      })
      .catch((error) => {
        setErrorDinosaursData(error);
      })
      .finally(() => setLoadingDinosaursData(false));
  }, []);

  useEffect(() => {
    fetchDinosaursNews()
      .then((data) => {
        setDinosaursNews(data);
      })
      .catch((error) => {
        setErrorDinosaursNews(error);
      })
      .finally(() => setLoadingDinosaursNews(false));
  }, []);

  return (
    <AppContext.Provider
      value={{
        favorites, 
        setFavorites,
        dinosaursData,
        dinosaursNews,
        loadingDinosaursData,
        loadingDinosaursNews,
        errorDinosaursData,
        errorDinosaursNews,
      }}
    >
      <Router />
    </AppContext.Provider>
  );
}

export default App;
