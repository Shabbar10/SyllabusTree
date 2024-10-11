"use client"

import React from 'react'
import SectionHeading from './section-heading'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Fade } from "react-awesome-reveal"
import { useSectionInView } from '../lib/useInview'

const About = () => {
  const { ref } = useSectionInView("#about")
  return (
    <motion.section id='about' ref={ref} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }}
      className='max-w-[60rem] text-center mt-36 leading-8 mb-10 sm:mb-40 scroll-mt-28'>
      <div className='container mx-auto '>
        <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
          <SectionHeading>
            About
          </SectionHeading>
        </Fade>

      </div>

      <div className='grid lg:grid-cols-2 lg:text-start'>
        <div className='flex-1'>
          <div className='text-lg mt-5 xl:mt-3'>
            <div className='flex justify-start flex-col'>
              <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                <h3 className='font-bold text-2xl'>Welcome to SYLLABUSTREE</h3>
              </Fade>
              <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                <p className='mt-1 leading-relaxed text-sm text-gray-700 dark:text-white/70 '>Your personal learning companion for mastering engineering subjects. We believe that education should be personalized, accessible, and dynamic, which is why we've created this platform to deliver customized video recommendations tailored to your specific learning needs.</p>
                <p className='mt-1 leading-relaxed text-sm text-gray-700 dark:text-white/70 '>Whether you're just starting your engineering journey or preparing for final-year exams, SYLLABUSTREE covers it all. Our curated content spans topics from all four years of the engineering curriculum, giving you the flexibility to learn at your own pace. Our mission is to provide a seamless learning experience that helps you stay ahead, tackle challenging concepts, and ultimately achieve your academic goals.</p>
                <p className='mt-1 leading-relaxed text-sm text-gray-700 dark:text-white/70 '>Explore a wide range of subjects, stay updated with the latest content, and grow your knowledge tree with us. Let SYLLABUSTREE guide you to academic success.</p>
              </Fade>
            </div>
          </div>
        </div>

        <div>
          <Fade direction='right' delay={400} cascade damping={1e-1} triggerOnce={true}>
            <Image
              src="/about.png"
              alt="about image"
              width="600"
              height="600"
              quality="100"
              priority={true}
              className='rounded-full mt-8 object-cover' />
          </Fade>
        </div>

      </div>

    </motion.section>
  )
}

export default About