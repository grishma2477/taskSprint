import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import {Constant} from "../utils/Constant.js"



const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    // insitally we mark isLoading true, because it may required time to get the token and check user if logged in already or not 
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem(Constant.ACCESS_TOKEN)
        setIsAuthenticated(!!token) // --> !! means if token exist true if not exist false. basicaly it convert valid value into booleans
        setIsLoading(false) 
    },[])

    const markAsSuccessfulLogin = (accessToken, refreshToken, role)=>{
        localStorage.setItem(Constant.ACCESS_TOKEN, accessToken)
        localStorage.setItem(Constant.REFRESH_TOKEN, refreshToken)
        localStorage.setItem(Constant.ROLE, role)
        setIsAuthenticated(true)
    }

    const logout = ()=> {
        localStorage.removeItem(Constant.ACCESS_TOKEN)
        localStorage.removeItem(Constant.REFRESH_TOKEN)
        localStorage.removeItem(Constant.ROLE)
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, markAsSuccessfulLogin, logout, isLoading}}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext)
