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
                scale: 0.8,
            }}
            whileInView={{
                opacity: 1,
                scale: 1,
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