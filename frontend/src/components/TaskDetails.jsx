import React from "react";
import { FaEye, FaTrashAlt, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import * as taskService from "../services/TasksService.js";

export const TaskDetails = ({ selectedTask }) => {

    if (!selectedTask) {
        return (
            <div className="col-span-2 bg-white rounded-2xl shadow-md p-6 flex justify-center items-center text-gray-400">
                Select a task to view details
            </div>
        );
    }

    const handleSubmit = async ()=>{
        try {
            const res = await taskService.toggleVitalTask(selectedTask._id);

            if (!res.success){
                toast.error(res.message);
                return;
            }
            toast.success(res.message);
        } catch (error) {
            console.log(error);
            
            toast.error(error.response.data.message);
        }
    }

    return (
        <div className="col-span-2 bg-white rounded-2xl shadow-md p-6">
            <img src={selectedTask.img} alt="" className="w-48 h-32 rounded-md mb-4 object-cover" />
            <h2 className="text-xl font-semibold">{selectedTask.title}</h2>

            <p className="text-sm mt-2"><strong>Priority:</strong> {selectedTask.priority}</p>
            <p className="text-sm"><strong>Status:</strong> {selectedTask.status}</p>
            <p className="text-sm"><strong>Due:</strong> {selectedTask.dueDate}</p>

            <div className="mt-4">
                <h3 className="font-semibold">Task Description:</h3>
                <p className="text-sm text-gray-700 mt-1">
                    {selectedTask.description}
                </p>
            </div>

            <div className="flex justify-end gap-3 mt-6">
                <button className="p-3 bg-red-500 text-white rounded-lg"
                    onClick={handleSubmit}
                >
                    
                        <FaHeart />
                   
                </button>

                <button className="p-3 bg-blue-500 text-white rounded-lg">
                    <Link to={`/view-task/${selectedTask._id}`}>
                    <FaEye />
                    </Link>
                </button>
                
                <button className="p-3 bg-gray-700 text-white rounded-lg">
                    <FaTrashAlt />
                </button>
            </div>
        </div>
    );
};
