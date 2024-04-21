import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import { AuthProvider } from './context/AuthContext'
import { useAuthHook } from './hooks/AuthCustomHook'

//Function component
function App2() {
  const { authStatus, login, logout } = useAuthHook()
  return (
    <AuthProvider value={{ isAuth: authStatus, login, logout }}>
      <h5>App2</h5>
      {authStatus ?
        <Home /> :
        <Login />}
    </AuthProvider>
  )
}

export default App2
