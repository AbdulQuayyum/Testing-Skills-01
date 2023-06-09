import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";

import Testing from "../Images/testing.jpg"

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
                                <Link to={`/Testing`}>
                                    <ProgressiveImage
                                        src={`${Testing}`}
                                        placeholder='Testing'>
                                        {(src) => (
                                            <motion.img
                                                src={src}
                                                alt='Testing'
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
                            {/* <div className='title'>Testing</div>
                            <div className='loTestingion'>
                                <span>28.538336</span>
                                <span>-81.379234</span>
                            </div> */}
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home