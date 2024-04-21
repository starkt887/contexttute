import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import { AuthProvider } from './context/AuthContext'

//Function component
function App() {
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

  return (
    <AuthProvider value={{ isAuth: authStatus, login, logout }}>
       <h5>App1</h5>
      {authStatus ?
        <Home /> :
        <Login />}
    </AuthProvider>
  )
}

export default App
