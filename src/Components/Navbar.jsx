import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className='container'>
                <div className='row space-between'>
                    <div className='logo'>
                        <Link to='/'>
                            <div className='title'>Skhalidesigns</div>
                        </Link>
                    </div>
                    <div className='title'>Khalidat Sulyman</div>
                </div>
            </div>
        </header>
    )
}

export default Navbar