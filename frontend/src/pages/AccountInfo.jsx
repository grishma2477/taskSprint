import React from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar.jsx";
import { Navbar } from "../components/Navbar.jsx";

export const AccountInfo = () => {
    const navigate = useNavigate();

    return (

        <div>
            <div className="bg-white rounded-2xl shadow-md p-8 w-full ml-0 md:ml-8">

                {/* Header Row */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">
                        Account Information
                        <span className="block w-32 h-1 bg-red-400 mt-1 rounded-full" />
                    </h2>

                    <button
                        onClick={() => navigate(-1)}
                        className="text-sm font-semibold underline text-gray-700"
                    >
                        Go Back
                    </button>
                </div>

                {/* Profile Info */}
                <div className="flex items-center gap-4 mb-6">
                    <img
                        src="/user.png"
                        alt="profile"
                        className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="text-lg font-semibold">Sundar Gurung</h3>
                        <p className="text-sm text-gray-500">
                            sundargurung360@gmail.com
                        </p>
                    </div>
                </div>

                {/* Form */}
                <div className="border rounded-xl p-6 bg-gray-50">
                    <form className="space-y-5">

                        {/* First Name */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-700">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="mt-1 border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-400"
                            />
                        </div>

                        {/* Last Name */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-700">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="mt-1 border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-400"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="mt-1 border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-400"
                            />
                        </div>

                        {/* Contact */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-700">
                                Contact Number
                            </label>
                            <input
                                type="text"
                                className="mt-1 border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-400"
                            />
                        </div>

                        {/* Position */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-700">
                                Position
                            </label>
                            <input
                                type="text"
                                className="mt-1 border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-400"
                            />
                        </div>

                        {/* BUTTONS */}
                        <div className="flex justify-end gap-3 pt-4">
                            <button
                                type="button"
                                className="px-6 py-2 rounded-md bg-gray-300 text-sm font-semibold"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-6 py-2 rounded-md bg-red-500 text-white text-sm font-semibold hover:bg-red-600"
                            >
                                Save Changes
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </div>

    );
};
``