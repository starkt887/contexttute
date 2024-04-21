import { createContext } from "react"

const userAuth = {
    isAuth: false,
    login: (username, password) => { },
    logout: () => { }
}
const AuthContext = createContext(userAuth)

export default AuthContext

export const AuthProvider = AuthContext.Provider

