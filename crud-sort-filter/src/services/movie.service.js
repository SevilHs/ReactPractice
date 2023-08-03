import axios from "axios";
const BASE_URL = "http://localhost:8080";

export const getData = async () => {
  try {
    let res = await axios(`${BASE_URL}/movies`);
    let data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addMovie = async (obj) => {
  try {
    await axios.post(`${BASE_URL}/movies`, obj);
  } catch (error) {
    console.log(error);
  }
};

export const deleteMovie = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/movies/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const updateMovie = async (id, obj) => {
  try {
    await axios.patch(`${BASE_URL}/movies/${id}`, obj);
  } catch (error) {
    console.log(error);
  }
};
