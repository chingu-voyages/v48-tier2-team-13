import filterNews from "../../utils/filterNews";

const URL = `https://newsapi.org/v2/everything?q=dinosaur OR dinosaurs -management -batman -forza -toys -devil -chickens -versand -(dinosaur)&searchIn=title&apiKey=${
  import.meta.env.VITE_NEWS_API_KEY
}`;

async function fetchDinosaursNews() {
  try {
    const response = await fetch(URL, { mode: "cors" });
    if (!response.ok) {
      throw new Error("Error: Service error");
    }
    const data = await response.json();
    const filteredNews = filterNews(data.articles);
    return filteredNews;
  } catch (error) {
    console.error(error);
  }
}

export default fetchDinosaursNews;
