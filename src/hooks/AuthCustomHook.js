import { useState } from "react";


export function useAuthHook() {

    const [authStatus, setAuthStatus] = useState(false)

    const login = (username, password) => {
        if (username === "testuser" && password === "test@123") {
            console.log("Logged in success!");
            setAuthStatus(true)
        }
        else {
            console.log("Logged in failed!");
        }
    }

    const logout = () => {
        setAuthStatus(false)
    }

    return { authStatus, login, logout }
}