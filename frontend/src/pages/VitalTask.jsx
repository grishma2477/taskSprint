import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { VitalTaskList } from "../components/VitalTaskList.jsx";
import { VitalTaskDetails } from "../components/VitalTaskDetails.jsx";
import {getVitalTasks} from "../services/TasksService.js";


export const VitalTask = () => {
    const [selectedVital, setSelectedVital] = useState(null);
    const [vitalTasks, setVitalTasks] = useState([]);
    const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

    //? TODO: #2 Get All vital task details using useeffect, taskService

    useEffect(()=> {
        fetchVitalTasks();
    }, []);

    const fetchVitalTasks = async () => {
        try {
            const res = await getVitalTasks();

           if (!res.success){
                   setError(res.message);
                   toast.error(res.message);
                   return;
                 }
                setVitalTasks(res.data); 
        } catch (error) {
            setError(error.response.data.message || "Failed to load tasks");
        }finally{
            setLoading(false);
        }
    }

    if (loading) {
        return <div className="p-6">Loading vital tasks...</div>;
    }

    if (error) {
        return <div className="p-6 text-red-500">{error}</div>;
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                <VitalTaskList 
                vitalTasks= {vitalTasks}
                setSelectedVital={setSelectedVital} 
                />
                <VitalTaskDetails selectedVital={selectedVital} />
            </div>
        </>
    );
};