import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";

import Khalidat from "../Images/khalidah.jpg"

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = ({ ImageDetails, image }) => {
    return (
        <main>
            <div className='container'>
                <div className='row center'>
                    <div className='image-container'>
                        <div
                            className='thumbnail'
                            ref={image}
                            style={{
                                width: ImageDetails.width,
                                height: ImageDetails.height,
                            }}>
                            <div className='frame'>
                                <Link to={`/Khalidat`}>
                                    <ProgressiveImage
                                        src={`${Khalidat}`}
                                        placeholder='Khalidat Sulyman'>
                                        {(src) => (
                                            <motion.img
                                                src={src}
                                                alt='Khalidat Sulyman'
                                                whileHover={{ scale: 1.1 }}
                                                transition={transition}
                                            />
                                        )}
                                    </ProgressiveImage>
                                </Link>
                            </div>
                        </div>
                        <motion.div
                            exit={{ opacity: 0 }}
                            transition={transition}
                            className='information'>
                            <div className='title'>Khalidat Sulyman</div>
                            <div className='location'>
                                <span>28.538336</span>
                                <span>-81.379234</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home