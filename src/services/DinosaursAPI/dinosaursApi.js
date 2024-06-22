/* const URL = "https://chinguapi.onrender.com/dinosaurs";

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

export default fetchDinosaursData; */


import dinosaursData from '../../utils/dinosaurs.json';

async function fetchDinosaursData() {
  try {
    const data = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(dinosaursData);
      }, 100); 
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default fetchDinosaursData;

