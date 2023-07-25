import axios from "axios";
const BASE_URL = "https://northwind.vercel.app/api";

export const getCustomersData = async () => {
  let res = await axios(`${BASE_URL}/customers`);
  let data = res.data;
  return data;
};
export const deleteCustomer = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/customers/${id}`);
  } catch (error) {
    console.log(error);
  }
};
export const addCustomer = async (obj) => {
  try {
    await axios.post(`${BASE_URL}/customers/`, obj);
  } catch (error) {
    console.log(error);
  }
};
export const editCustomer = async (obj,id) => {
  try {
    await axios.patch(`${BASE_URL}/customers/${id}`, obj);
  } catch (error) {
    console.log(error);
  }
};
