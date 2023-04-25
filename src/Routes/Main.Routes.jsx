import React from 'react'
import { Routes, Route } from "react-router-dom"

import { Home, Khalidat } from "../Views/Index"

const MainRoutes = () => {

    const ImageDetails = {
        width: 524,
        height: 650,
    };

    return (
        <Routes>
            <Route exact path='/' element={<Home ImageDetails={ImageDetails} />} />
            <Route path='/:id' element={<Khalidat ImageDetails={ImageDetails} />} />
        </Routes>
    )
}

export default MainRoutes