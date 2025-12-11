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

import { Button } from "@/components/ui/button";

/**
 * Assets
 */

import { SparkleIcon } from "lucide-react";

export const Hero = () => {
    return (
        <>
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer(0)}
                className="pt-20"
                id="hero"
            >
                <motion.p variants={fadeUp}
                    className="flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-32"
                >
                    <SparkleIcon size={15} /> <span>Introduction</span>
                </motion.p>
                <motion.h1
                    variants={fadeUp}
                    className="text-4xl md:text-5xl lg:text-6xl font-semibold capitalize mt-2 max-w-3xl md:leading-16"
                >
                    I'm <span className="text-primary">Akshat Mishra</span> MERN Stack Developer & Frontend Designer
                </motion.h1>
                <motion.div
                    variants={fadeUp}
                    className="mt-5 flex gap-3"
                >
                    <Button asChild>
                        <a href="#projects">My Projects</a>
                    </Button>

                    <Button variant='outline'>Download Resume</Button>

                </motion.div>

            </motion.section>
        </>
    )
}