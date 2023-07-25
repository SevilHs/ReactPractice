import axios from "axios"
import { BASE_URL } from "../utils/api"

export const getProductsData=async()=>{
    let res=await axios(`${BASE_URL}/products`)
    let data=await res.data
    return data
}