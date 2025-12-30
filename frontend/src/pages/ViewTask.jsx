import React, { useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { UpdateTaskDialog } from "../components/UpdateTaskDialog.jsx";
import * as taskService from "../services/TasksService.js"
import { useParams } from "react-router-dom";
import { Images } from "../assets/assets.js";
import { formatDate } from "../utils/DateFormatter.js";

const STATUS_OPTIONS = ["Not Started", "In Progress", "Completed"];
const PRIORITY_OPTIONS = ["Low", "Moderate", "High", "Extreme"];

export const ViewTask = () => {
    const {id} = useParams();
    const [task, setTask] = useState({
        title: '',
        description: "",
        priority: "",
        status: "",
        dueDate: "",
        isVital: false
    });
    const [showStatusDialog, setShowStatusDialog] = useState(false);
    const [showPriorityDialog, setShowPriorityDialog] = useState(false);

    useEffect(() => {
        fetchTasksById();
    }, []);
    
    const getStatusColor = (taskStatus)=>{
        if (taskStatus === "Completed"){
            return "green";
        }else if (taskStatus === "In Progress"){
            return "orange";
        }
        else{
            return "red";
        }
    }

    const fetchTasksById = async () => {
        try {
            const res = await taskService.getTasksById(id);

            if (!res.success) {
                toast.error(res.message);
                return;
            }
            setTask(res.data);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    return (
        <div className="flex-1 flex flex-col p-6">
            <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200">

                {/* Top row: title + Go Back */}
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-semibold">
                        {task.title}
                    </h2>
                    <button className="underline text-sm font-medium">Go Back</button>
                </div>

                {/* Card area */}
                <div className="relative bg-[#f8fafc] rounded-2xl border border-gray-200 p-6">

                    {/* Edit Button inside card box */}
                    <button className="absolute top-4 right-4 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        <FaEdit />
                    </button>

                    <div className="flex gap-6 items-start">
                        <img
                            src="https://via.placeholder.com/140"
                            alt="task"
                            className="w-40 h-32 rounded-xl object-cover"
                        />
                        <div>
                            <h3 className="text-xl font-semibold mb-1 flex items-center gap-2">
                                {task.title}

                                {task.isVital && (
                                    <img
                                        src={Images.vital_badge}
                                        alt="vital-badge"
                                        className="w-12 h-auto"
                                    />

                                )}
                            </h3>


                            <p className="text-sm">
                                <span className="font-semibold">Priority: </span>
                                <span className="text-blue-600 font-medium">{task.priority}</span>
                            </p>

                            <p className="text-sm mt-1">
                                <span className="font-semibold">Status: </span>
                                <span className={`text-${getStatusColor(task.status)}-600 font-medium`}>{task.status}</span>
                            </p>

                            <p className="text-sm mt-1 text-gray-500">
                                Due: {formatDate(task.dueDate)}
                            </p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mt-6 text-gray-700 leading-relaxed">
                        {task.description}
                    </div>



                    <div className="absolute bottom-4 right-4 flex gap-3">
                        <button
                            onClick={() => setShowPriorityDialog(true)}
                            className="px-4 py-2 text-sm bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
                        >
                            Update Priority
                        </button>

                        <button
                            onClick={() => setShowStatusDialog(true)}
                            className="px-4 py-2 text-sm bg-emerald-500 text-white rounded-lg hover:bg-emerald-600"
                        >
                            Update Status
                        </button>
                    </div>
                </div>

                {/* Update Status Dialog */}
                <UpdateTaskDialog
                    isOpen={showStatusDialog}
                    title="Update Task Status"
                    taskTitle={task.title}
                    currentValue={task.status}
                    options={STATUS_OPTIONS}
                    onCancel={() => setShowStatusDialog(false)}
                    onConfirm={(value) => {
                        console.log("New Status:", value);
                        setShowStatusDialog(false);
                    }}
                />

                {/* Update Priority Dialog */}
                <UpdateTaskDialog
                    isOpen={showPriorityDialog}
                    title="Update Task Priority"
                    taskTitle={task.title}
                    currentValue={task.priority}
                    options={PRIORITY_OPTIONS}
                    onCancel={() => setShowPriorityDialog(false)}
                    onConfirm={(value) => {
                        console.log("New Priority:", value);
                        setShowPriorityDialog(false);
                    }}
                />

            </div>
        </div>
    );
};
