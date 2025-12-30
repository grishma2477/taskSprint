import React from "react";
import { Routes, Route } from "react-router-dom";
import { Register } from "../pages/Register.jsx";
import { Login } from "../pages/Login.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import { AccountInfo } from "../pages/AccountInfo.jsx";
import { MyTasks } from "../pages/MyTasks.jsx";
import { VitalTask } from "../pages/VitalTask.jsx";
import { TaskCategories } from "../pages/TaskCategories.jsx";
import { CreateCategory } from "../pages/CreateCategory.jsx";
import { ViewTaskFull } from "../pages/ViewTaskFull.jsx";
import { ProtectedRoute } from "./ProtectedRoute.jsx";
import { PublicRoute } from "./PublicRoute.jsx"
import { MainLayout } from "../MainLayout.jsx";

export const AppRoutes = () => {
    return (
        <Routes>

            {/* PUBLIC ROUTES */}
            <Route element={<PublicRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>

            {/* PROTECTED ROUTES */}
            <Route element={<ProtectedRoute />}>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/account" element={<AccountInfo />} />
                    <Route path="/mytask" element={<MyTasks />} />
                    <Route path="/vital" element={<VitalTask />} />
                    <Route path="/categories" element={<TaskCategories />} />
                    <Route path="/create-category" element={<CreateCategory />} />
                    <Route path="/view-task" element={<ViewTaskFull />} />
                </Route>
            </Route>

        </Routes>
      

    );
};