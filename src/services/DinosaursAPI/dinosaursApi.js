const URL = "https://chinguapi.onrender.com/dinosaurs";

async function fetchDinosaursData() {
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

async function fetchDinosaursDataById(id){
  try {
    const modifiedUrl= URL + "/"+id
    const response = await fetch(modifiedUrl, { mode: "cors" });
    if (!response.ok) {
      throw new Error("Error: Service error");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export {fetchDinosaursData, fetchDinosaursDataById};
