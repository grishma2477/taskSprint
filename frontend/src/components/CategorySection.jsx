import React from "react";
import { CategoryRow } from "./CategoryRow";

export const CategorySection = ({ title, data, addLabel }) => {
    return (
        <div className="border rounded-xl p-6 bg-gray-50 shadow-sm">
            <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-gray-800 text-sm underline">{title}</h3>
                <button className="text-red-500 text-sm font-semibold hover:underline">
                    + {addLabel}
                </button>
            </div>

            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b">
                        <th className="py-2 text-left w-16">SN</th>
                        <th className="py-2 text-left">Task {title.replace("Task ", "")}</th>
                        <th className="py-2 text-center w-52">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item, index) => (
                        <CategoryRow key={item.id} item={item} index={index} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
