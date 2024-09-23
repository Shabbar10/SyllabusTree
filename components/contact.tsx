"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import SubmitBtn from "./submit-btn"
import { Fade } from "react-awesome-reveal"
import { useSectionInView } from "../lib/useInview"


export default function Contact() {
    const { ref } = useSectionInView("#contact")

    return (

        <section
            id="contact"
            ref={ref}>
            <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>

                <SectionHeading>
                    {"Contact Us"}
                </SectionHeading>
            </Fade>
            <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce={true}>
                    <p className="text-gray-700 -mt-6 dark:text-white/80 ">
                        {"Feel free to contact us with this form"}</p>
            </Fade>

            <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>
                <form className="mt-10 flex flex-col dark:text-black">
                    <input className="h-14 px-4 rounded-lg outline-none dark:bg-white"
                        name="senderEmail"
                        type="email"
                        required
                        placeholder="Your Email" />
                    <textarea className="h-52 my-3 resize-none px-4 rounded-lg outline-none dark:bg-white"
                        name="message"
                        required
                        placeholder="Message" />
                    <SubmitBtn text={"Submit"} />

                </form>
            </Fade>


        </section>
    )
}