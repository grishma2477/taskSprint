import React, { useEffect, useState } from "react";
import { TaskList } from "../components/TaskList.jsx";
import { TaskDetails } from "../components/TaskDetails.jsx";
import { AddTaskModal } from "../components/AddTaskModal.jsx";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";  // <-- IMPORTANT
import * as taskService from "../services/TasksService.js";
import { FiPlus } from "react-icons/fi";

export const MyTasks = () => {
    const [taskData, setTaskData] = useState({
        title: "",
        date: "",
        priority: "",     // "extreme" | "moderate" | "low"
        description: "",
        image: null,      // File object
    });
    const [selectedTask, setSelectedTask] = useState(null);
    const [openTaskModal, setOpenTaskModal] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //? TODO: #1 Get All task details using useeffect, taskService

    useEffect(()=>{
        fetchTasks();
    }, []);

    const addTask = async (data) => {
        try {
            const res = await taskService.addTasks(data);
            if (!res.success) {
                setError(res.message);
                return;
            }
            toast.success(res.message);

        } catch (error) {
            setError(error.response.data.message);
        }
    }

    const fetchTasks = async () => {
        try {
            const res = await taskService.getAllTasks();
            
            if (!res.success){
                setError(res.message);
                return;
            }

            setTasks(res.data);

        } catch (error) {
            setError(error.response.data.message || "Failed to load tasks");

        }finally{
            setLoading(false); 
        }
    }

    if (loading) {
        return <div className="p-6">Loading tasks...</div>;
    }

    if (error) {
        return <div className="p-6 text-red-500">{error}</div>;
    }

    return (
        <>
            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                <TaskList
                    tasks={tasks}
                    setSelectedTask={setSelectedTask}
                />
                <TaskDetails selectedTask={selectedTask} />
            </div>

            {/* Floating Add Task Button */}
            <button
                onClick={() => setOpenTaskModal(true)}
                className="fixed bottom-6 right-12 z-50
               w-14 h-14 rounded-full
               bg-red-500 text-white
               flex items-center justify-center
               shadow-lg hover:bg-red-600
               transition-transform hover:scale-105"
                aria-label="Add Task"
            >
                <FiPlus size={26} />
            </button>

            {openTaskModal && (
                <AddTaskModal onClose={() => setOpenTaskModal(false)} 
                    taskData={taskData}
                    setTaskData={setTaskData}
                    onSubmit={(data)=>{
                        console.log("My input data -->",data);
                        addTask(data);
                        
                    }} />
                )}
            {/* Toast Container */}
            <ToastContainer position="top-right" autoClose={3000} />
        </>


    );
};
