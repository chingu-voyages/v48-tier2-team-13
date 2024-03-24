

async function fetchDinosaurDetailByName(id) {
  try {
    const URL = `https://chinguapi.onrender.com/dinosaurs/${id}`
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

export default fetchDinosaurDetailByName;