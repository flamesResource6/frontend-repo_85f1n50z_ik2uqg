import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppRouter from './pages/Router'
import Test from './Test'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
