import React,{useState} from "react";

export const AddTaskModal = ({ taskData, setTaskData, onClose, onSubmit }) => {
    const [error, setError] = useState(null);
    const handleChange = (e) => {
        setTaskData({ ...taskData, [e.target.name]: e.target.value });
    }

    const handlePriorityChange = (value) => {
        setTaskData({ ...taskData, priority: value });
    }

    const handleSubmit = () => {
        if (!taskData.title || !taskData.date || !taskData.priority || !taskData.description || !taskData.image) {
            return setError("Required missing fields.")
        }
        onSubmit(taskData);
        onClose()

    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-white w-11/12 md:w-4/5 lg:w-3/4 rounded-xl shadow-2xl p-8">

                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">
                        Add New Task
                        <div className="w-24 border-b-4 border-red-500 mt-1"></div>
                    </h2>

                    <button onClick={onClose} className="font-semibold underline text-sm">
                        Go Back
                    </button>
                </div>

                {/* Form Container */}
                <div className="border border-gray-300 rounded-lg p-6 space-y-5">

                    {/* Title */}
                    <div>
                        <label className="font-medium">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={taskData.title}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg mt-1"
                        />
                    </div>

                    {/* Date */}
                    <div>
                        <label className="font-medium">Date</label>
                        <input
                            type="date"
                            name="date"
                            value={taskData.date}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg mt-1"
                        />
                    </div>

                    {/* Priority */}
                    <div>
                        <label className="font-medium">Priority</label>
                        <div className="flex gap-6 mt-2 items-center">
                            <label className="flex items-center gap-2">
                                <span className="text-red-600 text-lg">●</span>
                                <input type="checkbox"
                                    name="extreme"
                                    checked={taskData.priority === "extreme"}
                                    onChange={() => handlePriorityChange("extreme")}
                                />
                                <span>Extreme</span>
                            </label>

                            <label className="flex items-center gap-2">
                                <span className="text-blue-600 text-lg">●</span>
                                <input type="checkbox"
                                    name="moderate"
                                    checked={taskData.priority === "moderate"}
                                    onChange={() => handlePriorityChange("moderate")}
                                />
                                <span>Moderate</span>
                            </label>

                            <label className="flex items-center gap-2">
                                <span className="text-green-600 text-lg">●</span>
                                <input type="checkbox"
                                    name="low"
                                    checked={taskData.priority === "low"}
                                    onChange={() => handlePriorityChange("low")}
                                />
                                <span>Low</span>
                            </label>
                        </div>
                    </div>

                    {/* Description & Upload */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        {/* Description Box */}
                        <div>
                            <label className="font-medium">Task Description</label>
                            <textarea
                                className="w-full min-h-40 border p-3 rounded-lg mt-1"
                                placeholder="Start writing here..."
                                name="description"
                                value={taskData.description}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Upload Box */}
                        <div>
                            <label className="font-medium">Upload Image</label>

                            <div className="w-full min-h-40 mt-1 border border-gray-300 rounded-lg 
                  flex flex-col items-center justify-center text-center">

                                <p className="text-gray-400">Drag & Drop files here</p>
                                <p className="text-gray-500 my-2">or</p>

                                {/* Hidden file input */}
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="task-image"
                                    className="hidden"
                                    onChange={(e) =>
                                        setTaskData((prev) => ({
                                            ...prev,
                                            image: e.target.files[0],
                                        }))
                                    }
                                />

                                {/* Browse button */}
                                <label
                                    htmlFor="task-image"
                                    className="bg-gray-200 px-5 py-2 rounded-lg hover:bg-gray-300 cursor-pointer"
                                >
                                    Browse
                                </label>

                                {/* Preview filename */}
                                {taskData.image && (
                                    <p className="text-sm text-gray-600 mt-2">
                                        {taskData.image.name}
                                    </p>
                                )}
                            </div>
                        </div>


                    </div>
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                {/* Footer */}
                <div className="mt-6 flex justify-start">
                    <button
                        onClick={handleSubmit}
                        className="bg-red-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-600">
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
};
