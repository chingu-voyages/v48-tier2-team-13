const URL = `https://newsapi.org/v2/everything?q=dinosaur&apiKey=${
  import.meta.env.VITE_NEWS_API_KEY
}`;

async function fetchDinosaursNews() {
  try {
    const response = await fetch(URL, { mode: "cors" });
    if (!response.ok) {
      throw new Error("Error: Service error");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default fetchDinosaursNews;
