import { Constant } from "../utils/Constant.js";
import axios from "./NetworkHelper.js";


export const getAllTasks = async () => {
    const token = localStorage.getItem(Constant.ACCESS_TOKEN);
    const res = await axios.get(Constant.TASKS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return res.data;
    
}

export const getVitalTasks = async () => {
    const token = localStorage.getItem(Constant.ACCESS_TOKEN);
    const res = await axios.get(`${Constant.TASKS_ENDPOINT}/vitals`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return res.data;
    
}

export const addVitalTask = async () => {
    const token = localStorage.getItem(Constant.ACCESS_TOKEN);
    const res = await axios.post(`${Constant.TASKS_ENDPOINT}/vitals`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    console.log((res));

    return res.data;
    
}

export const addTasks = async (taskData) => {
      const token = localStorage.getItem(Constant.ACCESS_TOKEN);
    const res = await axios.post(`${Constant.TASKS_ENDPOINT}/`,{
        title:taskData.title,
         description: taskData.description,
         priority: taskData.priority,
        status: "Not Started",
         dueDate: taskData.date,
         image: ""
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    console.log((res));

    return res.data;
    
}

export const toggleVitalTask = async (taskId) => {
    const token = localStorage.getItem(Constant.ACCESS_TOKEN);
     const res = await axios.patch(`${Constant.TASKS_ENDPOINT}/vitals/toggle/${taskId}`,{

    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res.data;
}

export const getTasksStats = async () => {
    const token = localStorage.getItem(Constant.ACCESS_TOKEN);
     const res = await axios.get(`${Constant.TASKS_ENDPOINT}/stats`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res.data;
}