import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import { ScrollForMore } from "../Components/Index"
import { FirstName, LastName, Letter, Transition } from "../Utilities/Index";

import TestingImage from "../Images/testing.jpg"

const Testing = ({ ImageDetails }) => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

    const [canScroll, setCanScroll] = useState(false);

    useEffect(() => {
        if (canScroll === false) {
            document.querySelector("body").classList.add("no-scroll");
        } else {
            document.querySelector("body").classList.remove("no-scroll");
        }
    }, [canScroll]);

    return (
        <motion.div
            onAnimationComplete={() => setCanScroll(true)}
            className='single'
            initial='initial'
            animate='animate'
            exit='exit'>
            <div className='container fluid'>
                <div className='row center top-row'>
                    <div className='top'>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 1.2, ...Transition },
                            }}
                            className='details'>
                            <div className='loTestingion'>
                                <span>Routing blending with</span>
                            </div>
                            <div className='mua'>
                              <a href="https://ng.linkedin.com/in/Testing-sulyman-3542191a1">Framer Motion</a>
                                </div>
                        </motion.div>
                        <motion.div className='model'>
                            <motion.span className='first' variants={FirstName}>
                                <motion.span variants={Letter}>T</motion.span>
                                <motion.span variants={Letter}>e</motion.span>
                                <motion.span variants={Letter}>s</motion.span>
                                <motion.span variants={Letter}>t</motion.span>
                                <motion.span variants={Letter}>i</motion.span>
                                <motion.span variants={Letter}>n</motion.span>
                                <motion.span variants={Letter}>g</motion.span>
                            </motion.span>
                            <motion.span className='last' variants={LastName}>
                                <motion.span variants={Letter}>S</motion.span>
                                <motion.span variants={Letter}>k</motion.span>
                                <motion.span variants={Letter}>i</motion.span>
                                <motion.span variants={Letter}>l</motion.span>
                                <motion.span variants={Letter}>l</motion.span>
                                <motion.span variants={Letter}>s</motion.span>
                            </motion.span>
                        </motion.div>
                    </div>
                </div>
                <div className='row bottom-row'>
                    <div className='bottom'>
                        <motion.div className='image-container-single'>
                            <motion.div
                                initial={{
                                    y: "-50%",
                                    width: ImageDetails.width,
                                    height: ImageDetails.height,
                                }}
                                animate={{
                                    y: 0,
                                    width: "100%",
                                    height: window.innerWidth > 1440 ? 800 : 400,
                                    transition: { delay: 0.2, ...Transition },
                                }}
                                className='thumbnail-single'>
                                <motion.div
                                    className='frame-single'
                                    whileHover='hover'
                                    transition={Transition}>
                                    <motion.img
                                        // src={require("../Images/copy.jpg")}
                                         src={`${TestingImage}`}
                                        alt='an image'
                                        style={{ scale: scale }}
                                        initial={{ scale: 1.0 }}
                                        animate={{
                                            transition: { delay: 0.2, ...Transition },
                                            y: window.innerWidth > 1440 ? -1200 : -600,
                                        }}
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                    <ScrollForMore />
                </div>
            </div>
            <div className='detailed-information'>
                <div className='container'>
                    <div className='row'>
                        <h2 className='title'>
                            The insiration behind the artwork & <br /> what it means.
                        </h2>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia, looked up one of
                            the more obscure Latin words, consectetur, from a Lorem Ipsum
                            passage, and going through the cites of the word in classical
                            literature, discovered the undoubtable source. Lorem Ipsum comes
                            from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                            Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
                            BC. This book is a treatise on the theory of ethics, very popular
                            during the Renaissance. The first line of Lorem Ipsum, "Lorem
                            ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Testing