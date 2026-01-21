/**
 * @copyright 2025 Akshat Mishra
 * @license Apache-2.0
 */

/**
 * Components
 */

import { Button } from "@/components/ui/button";

/**
 * Constants
 */

import { socialLinks } from "@/constants";

export const Profile = () => {
    return (
        <aside className="max-w-3xl border m-6 border-neutral-600 bg-neutral-900 text-white p-6 rounded-lg lg:sticky lg:left-0 lg:top-6 lg:w-96">
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-x-10">
                    <h1 className="text-3xl font-bold">Akshat Mishra</h1>

                    <p className="text-sm">MERN Stack Developer & Frontend Designer</p>
                </div>
                <img
                    src="/avatar.jpg"
                    alt="Akshat Mishra"
                    className="lg:w-96 rounded-2xl object-cover"
                />

                <div className="mt-6">
                    <p className="text-sm text-neutral-300">Specialization: </p>

                    <p className="text-lg capitalize">UI/UX designer and frontend developer </p>
                </div>
                <div className="mt-6">
                    <p className="text-sm text-neutral-300">About Myself: </p>

                    <p className="text-lg capitalize">Entry-level Full-Stack Developer with expertise in React, Node.js, Express, MongoDB, and JavaScript, along with strong frontend and UI/UX design skills. Experienced in building responsive user interfaces, REST APIs, and deploying scalable web applications.</p>
                </div>
                <div className="flex gap-3 pt-2 text-neutral-500">
                    {socialLinks.map((social , i)=>{
                        const Icon = social.icon;
                        return(
                            <a 
                            key={i}
                            href={social.link}
                            className="hover:text-primary border-2 border-neutral-500 p-2 rounded-full hover:border-primary transition duration-200"
                            >
                                <Icon className="size-6" />
                            </a>
                        )
                    })}
                </div>

                <Button
                className="mt-2"
                size="lg"
                >
                    <a href="https://drive.google.com/file/d/1PvIuWMEaBQoHuNO8RMO_n9Gsy9bUGr5Z/view?usp=sharing" target="_blank">View Resume!</a>
                </Button>
                <Button
                className="mt-2"
                size="lg"
                >
                    <a href="https://drive.google.com/drive/folders/1qPssiXA-YaxxSB2AGFEvGAUp84poJOYw?usp=sharing" target="_blank">View Certifications!</a>
                </Button>
            </div>
        </aside>
    )
}