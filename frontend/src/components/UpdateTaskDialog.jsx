import React, { useState } from "react";

export const UpdateTaskDialog = ({
    isOpen,
    title,
    taskTitle,
    options,
    currentValue,
    onConfirm,
    onCancel,
}) => {
    const [value, setValue] = useState(currentValue);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">

                {/* Title */}
                <h2 className="text-xl font-semibold mb-1">{title}</h2>

                {/* Description */}
                <p className="text-sm text-gray-500 mb-4">
                    Task: <span className="font-medium">{taskTitle}</span>
                </p>

                {/* Dropdown */}
                <select
                    className="w-full border rounded-lg px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                >
                    {options.map((opt) => (
                        <option
                            key={opt}
                            value={opt}
                            disabled={opt === currentValue}
                        >
                            {opt}
                        </option>
                    ))}
                </select>

                {/* Actions */}
                <div className="flex justify-end gap-3">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={() => onConfirm(value)}
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};
