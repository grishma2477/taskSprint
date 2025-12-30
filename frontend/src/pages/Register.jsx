import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import * as authService from "../services/AuthService.js";

export const Register = ()=> {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName:"",
    userName:"",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>{
  setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(formData);
    
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.userName || 
      !formData.confirmPassword
    ){
      setError("All fields are required.");
      return;
    }
    if (formData.password !== formData.confirmPassword){
      setError("Password doesn't match.");
      return;
    }

    setError(null);
    setIsRegistering(true);
    setShowSpinner(true);

    try {
      const res = await authService.register(
        formData.firstName,
        formData.lastName,
        formData.userName,
        formData.email,
        formData.password
      );
      console.log(res);
      await new Promise((r)=> setTimeout(r, 1500));
      if (!res.success){
        setError(res.message);
        toast.error(res.message);
      }
      toast.success(res.message);


      // perform navigation
      navigate("/login");

      setFormData({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });

    } catch (error) {
      setError(error.response.data.message);
    }finally{
      setShowSpinner(false);
      setIsRegistering(false);
    }
  }
  return (
    <div className="min-h-screen bg-red-200 flex items-center justify-center p-6">
   <div className="bg-white shadow-xl rounded-xl flex w-full max-w-5xl overflow-hidden">

        {/* Left side Image */}
        <div className="hidden md:block w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('/signup.png')" }}>
        </div>

        {/* Right side Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>

            {/* First Name */}
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border rounded-lg pl-10 pr-3 py-2 focus:outline-none"
              />
            </div>

            {/* Last Name */}
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border rounded-lg pl-10 pr-3 py-2 focus:outline-none"
              />
            </div>

            {/* Username */}
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                placeholder="Enter Username"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                className="w-full border rounded-lg pl-10 pr-3 py-2 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg pl-10 pr-3 py-2 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-500" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border rounded-lg pl-10 pr-3 py-2 focus:outline-none"
              />
              <span
                className="absolute right-2 top-2 cursor-pointer text-gray-500"
                onClick={() => setShowPassword((p) => !p)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-500" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border rounded-lg pl-10 pr-3 py-2 focus:outline-none"
              />
              <span
                className="absolute right-2 top-2 cursor-pointer text-gray-500"
                onClick={() => setShowPassword((p) => !p)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Checkbox */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4" />
              <label className="text-sm">I agree to all terms</label>
            </div>

            {/* Register Button */}
            <button className="w-full bg-red-400 text-white py-2 rounded-lg font-semibold hover:bg-red-500">
              Register
            </button>
          </form>

          <p className="text-center text-sm mt-3">
            Already have an account?
            <a href="#" className="text-blue-600 ml-1">Sign In</a>
          </p>
        </div>
      </div>
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
