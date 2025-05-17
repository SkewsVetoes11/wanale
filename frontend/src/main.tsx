import React from 'react'
import { createRoot } from 'react-dom/client'
// import './style.css'
import App from './App.js'
import Foo from './Foo.js'
import { BrowserRouter, Routes, Route } from "react-router";
const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/foo" element={<Foo />} />
        </Routes>
    </BrowserRouter>
)
