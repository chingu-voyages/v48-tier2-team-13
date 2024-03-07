import { useEffect, useState, createContext } from "react";
import Router from "./components/Router";
import fetchDinosaursData from "./services/DinosaursAPI/dinosaursApi";

export const AppContext = createContext({
  dinosaursData: [],
  loading: true,
  error: null,
});

function App() {
  const [dinosaursData, setDinosaursData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDinosaursData()
      .then((data) => {
        setDinosaursData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <AppContext.Provider value={{ dinosaursData, loading, error }}>
      <Router />
    </AppContext.Provider>
  );
}

export default App;
