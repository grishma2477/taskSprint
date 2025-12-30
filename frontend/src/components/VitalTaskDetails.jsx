import React from "react";
import { FaEdit, FaTrashAlt, FaHeartBroken, FaEye } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import * as tasksService from "../services/TasksService.js"
import { useState } from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/DateFormatter.js";

export const VitalTaskDetails = ({ selectedVital }) => {
    if (!selectedVital) {
        return (
            <div className="col-span-2 bg-white rounded-2xl shadow-md p-6 flex justify-center items-center text-gray-400">
                Select a Vital Task to view details
            </div>
        );
    }

    const handleSubmit = async () => {
        try {
            const res = await tasksService.toggleVitalTask(selectedVital._id);
            if (!res.success) {
              toast.error(res.message);
                return;
            }
            toast.success(res.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    return (
        <div className="col-span-2 bg-white rounded-2xl shadow-md p-6">
            <img src={selectedVital.img} alt="" className="w-48 h-32 rounded-md mb-4 object-cover" />

            <h2 className="text-xl font-semibold">{selectedVital.title}</h2>
            <p className="text-sm mt-2"><strong>Priority:</strong> {selectedVital.priority}</p>
            <p className="text-sm"><strong>Status:</strong> {selectedVital.status}</p>
            <p className="text-sm"><strong>Due:</strong> {formatDate(selectedVital.dueDate)}</p>

            <div className="mt-4 space-y-2 text-sm text-gray-700">
                <p>{selectedVital.longDescription}</p>

              {Array.isArray(selectedVital.points) && ( // i added this and it means if it is an array then render the array and if it isn't an array, render nothing and don't crash.
                <ul className="list-decimal ml-6 space-y-1">
                    {selectedVital.points.map((p, index) => (
                        <li key={index}>{p}</li>
                    ))}
                </ul>
              )}
            </div>

            <div className="flex justify-end gap-3 mt-6">
                <button className="p-3 bg-red-500 text-white rounded-lg"
                    onClick={handleSubmit}
                >
                    <FaHeartBroken />
                </button>
                <button className="p-3 bg-blue-500 text-white rounded-lg">
                    <Link to={`/view-task/${selectedVital._id}`}>
                        <FaEye />
                    </Link>
                </button>
                <button className="p-3 bg-red-500 text-white rounded-lg">
                    <FaEdit />
                </button>
                <button className="p-3 bg-gray-600 text-white rounded-lg">
                    <FaTrashAlt />
                </button>
            </div>
            {/* Toast Container */}
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};
