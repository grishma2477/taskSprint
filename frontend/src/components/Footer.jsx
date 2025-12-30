import React from "react";

export const Footer=()=> {
    return (
        <footer className="bg-gray-200 text-gray-700 p-4 text-center text-sm mt-4">
            &copy; {new Date().getFullYear()} My Todo App. All rights reserved.
        </footer>
    );
}
