import React from 'react'
import { Link } from "react-router-dom";

import logo from "../Images/logo.png"

const Navbar = () => {
    return (
        <header>
            <div className='container'>
                <div className='row space-between'>
                    <div className='logo'>
                        <Link to='/'>
                            <img  src={`${logo}`} height="50px" width="auto" alt="..." />
                        </Link>
                    </div>
                    <div className='title'>Testing Skills</div>
                </div>
            </div>
        </header>
    )
}

export default Navbar