import React from 'react'
import { Routes, Route } from "react-router-dom"

import { Home, Khalidat } from "../Views/Index"

const MainRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/:id' element={<Khalidat />} />
        </Routes>
    )
}

export default MainRoutes