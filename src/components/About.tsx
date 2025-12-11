/**
 * @copyright 2025 Akshat Mishra
 * @license Apache-2.0
 */

/**
 * Node Modules
 */

import { motion } from "motion/react";

/**
 * Custom Modules
 */

import { fadeUp, staggerContainer } from "@/lib/animation";

/**
 * Components
 */

import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";

export const About = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0)}
            className="mt-30 scroll-mt-10"
            id="about"
        >
            <SectionHeader
                subtitle="About"
                title="Code Create Optimize"
            />

            <motion.p
                variants={fadeUp}
                className="mt-4 text-neutral-300"
            >
                I’m a developer who enjoys transforming ideas into clean, purposeful, and intuitive digital experiences. With hands-on work across 20+ projects and a strong command of multiple technologies, I focus on writing efficient code and building solutions that feel seamless to users. Curiosity drives my learning, and creativity shapes my approach. I value clarity, problem-solving, and the satisfaction of turning complexity into something beautifully simple.
            </motion.p>
            <motion.p
                variants={fadeUp}
                className="mt-2 text-neutral-300"
            >
                My core strength lies in crafting responsive, visually refined interfaces using HTML, CSS, JavaScript, React, and Tailwind. I focus on performance, accessibility, and smooth user interactions while maintaining clean component structure and modern UI principles.
            </motion.p>

            <motion.div
            variants={fadeUp}
            transition={{delay: 0.2}}
            >
                <Button 
                className="mt-5"
                >
                    Contact Me
                </Button>
            </motion.div>
        </motion.section>
    )
}