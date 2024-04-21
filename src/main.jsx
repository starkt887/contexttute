import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import App2 from './App2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* change App to App2 to see context with custom hook */}
    <App />
  </React.StrictMode>,
)
