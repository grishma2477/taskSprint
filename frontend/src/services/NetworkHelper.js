import axios from "axios";
import {Constant} from "../utils/Constant.js";

const axiosInstance = axios.create({
    baseURL:Constant.API_BASE_URL,
    timeout:10000,
    headers:{
        "Content-Type": "application/json"
    }
})

export default axiosInstance;