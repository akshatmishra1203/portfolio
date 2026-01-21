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

import { fadeUp } from "@/lib/animation";

/**
 * Types
 */

import type { CertificateType } from "@/types";

export const CertificationCard = ({ 
    imgSrc ,
    tags,
    title,
} :  CertificateType ) =>{
    return (
        <motion.div
        variants={fadeUp}
        className="relative"
        >
            <figure className="overflow-hidden rounded-md">
                <img 
                src={imgSrc} 
                alt={title}
                className="rounded-md transition duration-500 hover:scale-115 w-full" 
                />
            </figure>
            
            <div
            className="absolute bottom-0 p-2 flex gap-2" 
            >
                {tags.map((tag:string, i:number)=>(
                    <span
                    key={i}
                    className="bg-background hover:bg-primary hover:text-black py-1 px-2 rounded-sm text-sm cursor-pointer"
                    >
                        {tag}
                    </span>
                ))}
            </div>

        </motion.div>
    )
}