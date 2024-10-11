"use client"
import Image from 'next/image'
import Link from 'next/link'
import { BsLinkedin } from 'react-icons/bs'
import { Mail } from 'lucide-react'
import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Fade } from 'react-awesome-reveal'
import { useSectionInView } from '../lib/useInview'
import { useActiveSectionContext } from '../containers/active-section'
import { LuArrowRightCircle } from "react-icons/lu";



const Intro = () => {
    const {ref} = useSectionInView("#home", 0.5)
    const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();
    return (
        <section ref={ref} className='mb-28 max-w-[75rem] text-center sm:mb-0'>
            
            <div className='flex items-center justify-center'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 125,
                        damping: 10,
                        duration: 0.2,
                    }}>
                    <Image
                        src="/logo_no_bg.png"
                        width="400"
                        height="400"
                        alt='logo'
                        quality="100"
                        className='rounded-full shadow-xl object-cover' />
                </motion.div>
            </div>
            <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>

            <h1 className='mb-5 mt-4 text-2xl sm:text-4xl'>
                <span className='font-medium !leading-[1.5]'>Your Engineering Journey, Visualized"</span>{" "}
            </h1>
            </Fade>
            <motion.div
                className='flex sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay:0.1,}}>
                <Link href={`/Login`} className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition'>
                    Sign In <LuArrowRightCircle color={"#9ca3af"} size={24}/>
                </Link> 

            </motion.div>
        </section >
    )
}

export default Intro