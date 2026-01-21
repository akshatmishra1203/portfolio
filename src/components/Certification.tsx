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

import { staggerContainer } from "@/lib/animation";

/**
 * Components
 */

import { SectionHeader } from "@/components/SectionHeader";
import { CertificationCard } from "@/components/CertificationCard";


/**
 * Constants
 */

import { certification } from "@/constants";


export const Certification = () => {
    return (
        <>
            <motion.section
                initial="hidden"
                whileInView="visible"   
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer(0)}
                className="mt-30 scroll-mt-10"
                id="certification"
            >
                <SectionHeader 
                subtitle="Certification"
                title="My Certifications"
                />

                <motion.div
                className="grid md:grid-cols-2 gap-10 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer(0.5)}
                >
                    {certification.map((certi , i) => (
                        <CertificationCard  
                        key={i}
                        imgSrc={certi.imgSrc}
                        CertiLink={certi.CertiLink}
                        tags={certi.tags}
                        title={certi.title}
                        />
                    ))}

                </motion.div>
                And Many More...
            </motion.section>
        </>
    )
}