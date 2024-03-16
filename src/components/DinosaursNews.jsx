import { useState, useEffect } from "react";
import fetchDinosaursNews from "../services/NewsAPI/newsApi";
import NewsArticle from "./NewsArticle";
import Loader from "./Loader";
import { v4 as uuidv4 } from "uuid";

function DinosaursNews() {
  const [dinosaursNews, setDinosaursNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDinosaursNews()
      .then((data) => {
        setDinosaursNews(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: There was an error with news data.</div>;
  }

  return (
    <>
      {dinosaursNews.length > 0 &&
        dinosaursNews.map((article) => (
          <NewsArticle key={uuidv4()} article={article} />
        ))}
    </>
  );
}

export default DinosaursNews;
