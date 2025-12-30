import axios from "../services/NetworkHelper.js";

export const login = async(email, password)=>{
const res = await axios.post("/auth/login", {email, password});
return res.data;
}

export const register = async (firstName, lastName, userName, email, password) => {
  const res = await axios.post("/auth/register", {
    firstName,
    lastName,
    userName,
    email,
    password,
  });
  return res.data;
};

