import { FaUser, FaLock, FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import * as authService from "../services/AuthService.js";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate, } from "react-router-dom";
import { Constant } from "../utils/Constant.js";
import { useAuth } from "../context/AuthContext.jsx";
import { Images } from "../assets/assets.js"


export const Login = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const auth = useAuth()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        console.log(formData);

        e.preventDefault();

        if (isSubmitting) return;

        if (!formData.email || !formData.password) {
            setError("All fields are required.");
            return;
        }

        setError(null);
        setIsSubmitting(true);
        setShowSpinner(true);

        try {
            const res = await authService.login(formData.email, formData.password);
            
            if (!res.success) {
                setError(res.message);
                toast.error(res.message);
            }
            toast.success(res.message);
            auth.markAsSuccessfulLogin(res.accessToken, res.refreshToken, res.data.role)

            await new Promise((r) => setTimeout(r, 1500));
            // perform navigation 
            navigate("/");

            setFormData({
                email: "",
                password: ""
            })
        } catch (error) {
            setError(error.response.data.message);
        } finally {
            setShowSpinner(false);
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-red-200 flex items-center justify-center p-6">

            {/* Card */}
            <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl flex overflow-hidden">

                {/* Left: Form */}
                <div className="w-full md:w-1/2 p-10 flex items-center justify-center">
                    <div className="w-full max-w-md">

                        <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>

                        <form className="space-y-5" onSubmit={handleLogin}>

                            {/* Email */}
                            <div className="relative">
                                <FaUser className="absolute left-3 top-3 text-gray-600" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter Email"
                                    className="w-full border rounded-lg pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
                                />
                            </div>

                            {/* Password */}
                            <div className="relative">
                                <FaLock className="absolute left-3 top-3 text-gray-600" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter Password"
                                    className="w-full border rounded-lg pl-10 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
                                />
                                <span
                                    className="absolute right-3 top-3 cursor-pointer text-gray-500"
                                    onClick={() => setShowPassword((p) => !p)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>

                            {error && <p className="text-red-500 text-sm">{error}</p>}

                            {/* Remember me */}
                            <div className="flex items-center gap-2">
                                <input type="checkbox" />
                                <label className="text-sm">Remember Me</label>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full bg-red-400 text-white py-2 rounded-lg font-semibold hover:bg-red-500 transition"
                            >
                                Login
                            </button>
                        </form>

                        {/* Social */}
                        <p className="text-sm mt-6 text-center">Or, Login with</p>
                        <div className="flex items-center justify-center gap-4 mt-2">
                            <FaFacebook className="text-blue-600 text-2xl cursor-pointer" />
                            <FaGoogle className="text-red-500 text-2xl cursor-pointer" />
                            <FaTwitter className="text-black text-2xl cursor-pointer" />
                        </div>

                        {/* Signup */}
                        <p className="text-sm mt-4 text-center">
                            Don’t have an account?
                            <a href="#" className="text-blue-600 ml-1">
                                Create One
                            </a>
                        </p>
                    </div>
                </div>

                {/* Right: Image */}
                <div
                    className="hidden md:block w-1/2 bg-cover bg-center"
                    style={{ backgroundImage: `url(${Images.signin})`}}
                />
            </div>

            {/* Spinner */}
            {showSpinner && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
                    <div className="w-14 h-14 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin"></div>
                </div>
            )}

            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};