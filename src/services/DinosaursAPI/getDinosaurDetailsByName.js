/*
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
*/


import dinosaursData from '../../utils/dinosaurs.json';

async function fetchDinosaurDetailByName(id) {
  try {
    const data = await new Promise((resolve) => {
      setTimeout(() => {
        const dinosaur = dinosaursData.find(dino => dino.id === id);
        resolve(dinosaur);
      }, 100);
    });
    if (!data) {
      throw new Error("Error: Dinosaur not found");
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default fetchDinosaurDetailByName;
