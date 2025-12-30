import { Constant } from "../utils/Constant.js";
import axios from "./NetworkHelper.js";

const token = localStorage.getItem(Constant.ACCESS_TOKEN);

export const getMyProfile = async () => {
    const accessToken = localStorage.getItem(Constant.ACCESS_TOKEN);
    const res = await axios.get(Constant.USER_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${token}`
        }

    })
console.log(res);

    return res.data;
}