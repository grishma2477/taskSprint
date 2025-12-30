import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export const CategoryRow = ({ item, index }) => {
    return (
        <tr className="border-t text-sm">
            <td className="py-3">{index + 1}</td>
            <td className="py-3">{item.name}</td>

            <td className="py-3 flex justify-center gap-3">
                <button className="px-3 py-1 bg-red-500 text-white rounded-md flex items-center gap-1 text-xs">
                    <FaEdit size={12} /> Edit
                </button>
                <button className="px-3 py-1 bg-gray-700 text-white rounded-md flex items-center gap-1 text-xs">
                    <FaTrashAlt size={12} /> Delete
                </button>
            </td>
        </tr>
    );
};
