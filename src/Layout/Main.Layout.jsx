import React from "react";
import { AnimatePresence } from "framer-motion";

import { Navbar } from "../Components/Index"
import MainRoutes from "../Routes/Main.Routes";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <AnimatePresence initial={false} exitBeforeEnter>
                <MainRoutes />
            </AnimatePresence>
        </>
    )
}

export default MainLayout