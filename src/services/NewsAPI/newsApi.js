const URL = `https://gnews.io/api/v4/search?q=dinosaurs&in=title&apikey=${
  import.meta.env.VITE_NEWS_API_KEY
}`;

async function fetchDinosaursNews() {
  try {
    const response = await fetch(URL, { mode: "cors" });
    if (!response.ok) {
      throw new Error("Error: Service error");
    }
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error(error);
  }
}

export default fetchDinosaursNews;
