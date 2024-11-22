'use client'
import { motion } from "framer-motion";
import { ReactNode } from 'react';

const Scroll = ( { children }: { children: ReactNode }) => {
    return (
        <>
        <motion.div 
            className="shadow-lg"
            initial={{
                opacity: 0.5,
                scale: 0.9,
                y: 500,
            }}
            whileInView={{
                opacity: 1,
                scale: 1,
                y:0,
                transition: {
                    duration: 1.5
                }
            }}
            viewport={{
                once: true
            }}
            >
                { children }
            </motion.div>
            </>
    )

}
export default Scroll;