/**
 * @copyright 2025 codewithsadee
 * @license Apache-2.0
 */

/**
 * Types
 */
import type {
    ExperienceType,
    LinksType,
    ProjectType,
    ServiceType,
    StatsType,
    CertificateType,
    ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
    Briefcase,
    FileText,
    Globe,
    Home,
    Instagram,
    Layers,
    Mail,
    MessageCircle,
    Palette,
    Rocket,
    Settings,
    Smartphone,
    User,
    Github,
} from 'lucide-react';

const navLinks: LinksType[] = [
    { label: 'Home', link: '#hero', icon: Home },
    {
        label: 'Projects',
        link: '#projects',
        icon: Briefcase,
    },
    { label: 'About', link: '#about', icon: User },
    {
        label: 'Services',
        link: '#services',
        icon: Settings,
    },
    { label: 'Resume', link: '#resume', icon: FileText },
    {
        label: 'Certification',
        link: '#certification',
        icon: MessageCircle,
    },
    { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
    {
        icon: Instagram,
        label: 'Instagram',
        link: '/#',
    },
    {
        icon: Github,
        label: 'Github',
        link: '/#',
    },
    {
        icon: Mail,
        label: 'Mail',
        link: '/#',
    },
];

const projectsData: ProjectType[] = [
    {
        imgSrc: '/images/Music.png',
        title: 'Resso - A Music App',
        tags: ['React.js', 'MongoDB', 'TypeScript', 'API'],
        projectLink: 'https://resso.onrender.com/',
    },
    {
        imgSrc: '/images/EMS.png',
        title: 'Employee Management System',
        tags: ['React.js', 'Local Storage'],
        projectLink: '#NIL',
    },
    {
        imgSrc: '/images/portfolio.png',
        title: 'Portfolio Website',
        tags: ['React.js', 'TypeScript', 'TailwindCSS'],
        projectLink: '#NIL',
    },
    {
        imgSrc: '/images/twitter.png',
        title: 'Twitter - A Clone App',
        tags: ['API', 'Next.js'],
        projectLink: '#',
    },
    {
        imgSrc: '/images/UBER.png',
        title: 'CarRide - A Car Rental App',
        tags: ['API', 'Next.js', 'MicroServices'],
        projectLink: '#',
    },
    {
        imgSrc: '/images/Zomato.png',
        title: 'FoodDelivery App with Reel integrated Feature',
        tags: ['API', 'Next.js', 'MicroServices'],
        projectLink: '#',
    },

];

const education: ExperienceType[] = [
    {
        year: '2018 - 2019',
        title: ' 10th (High School) ',
        institute: ' Maa Durga Ji Senior Secondary Vidayalaya ',
        company: '',
        desc: '  ',
    },
    {
        year: '2020 - 2021',
        title: ' 12th (Senior Secondary) ',
        institute: ' Maa Durga Ji Senior Secondary Vidayalaya  ',
        company: '',
        desc: '  ',
    },
    {
        year: '2021 - 2025',
        title: 'Bachelor Of Technology ( B.Tech) ',
        institute: ' Oriental Institute Of Science and Technology ',
        company: '',
        desc: ' Electronics and Communication Engineering ',
    },
];

const experience: ExperienceType[] = [
    {
        year: 'Aug 2024 – October 2024',
        title: 'Frontend Developer Intern',
        institute: '',
        company: 'Skill Chase India',
        desc: 'Built and optimized responsive websites, collaborating closely with designers and backend teams.',
    },

    {
        year: 'November 2024 – May 2025',
        title: 'Frontend Developer Intern',
        institute: 'Freelance',
        company: 'Willkings HealthCare Pvt. Ltd.',
        desc: 'Built and optimized responsive websites, collaborating closely with designers and backend teams.',
    },
    {
        year: '2025 – Present',
        title: 'UI Engineer',
        institute: 'Freelance',
        company: 'Remote Work',
        desc: 'Designed and developed web interfaces for SaaS startups using React, Tailwind, and Figma.',
    },
];

const tools: ToolsType[] = [
    {
        label: 'Figma',
        imgSrc: '/images/tools/figma.svg',
    },
    {
        label: 'CSS',
        imgSrc: '/images/tools/css3.svg',
    },
    {
        label: 'Tailwind CSS',
        imgSrc: '/images/tools/tailwindcss.svg',
    },
    {
        label: 'React',
        imgSrc: '/images/tools/react.svg',
    },
    {
        label: 'JavaScript',
        imgSrc: '/images/tools/javascript.svg',
    },
    {
        label: 'Node.js',
        imgSrc: '/images/tools/nodejs.svg',
    },
    {
        label: 'Express.js',
        imgSrc: '/images/tools/expressjs.svg',
    },
    {
        label: 'Mongodb',
        imgSrc: '/images/tools/mongodb.svg',
    },
    {
        label: 'HTML5',
        imgSrc: '/images/tools/html.svg'
    },
    {
        label: 'Git',
        imgSrc: '/images/tools/git.svg'
    },
    {
        label: 'Github',
        imgSrc: '/images/tools/github.svg'
    },
    {
        label: 'Auth0',
        imgSrc: '/images/tools/auth0.svg'
    },
    {
        label: 'Threejs',
        imgSrc: '/images/tools/threejs.svg'
    },
    {
        label: 'Api',
        imgSrc: '/images/tools/api.svg'
    },
    {
        label: 'BootStrap',
        imgSrc: '/images/tools/bootstrap.svg'
    },
    {
        label: 'Next.js',
        imgSrc: '/images/tools/nextjs.svg'
    },
    {
        label: 'postman',
        imgSrc: '/images/tools/postman.svg'
    },
    {
        label: 'Vercel',
        imgSrc: '/images/tools/vercel.svg'
    },
    {
        label: 'VSCode',
        imgSrc: '/images/tools/vscode.svg'
    }
];

const services: ServiceType[] = [
    {
        title: 'Frontend Development (React.js)',
        desc: 'I build fast, interactive, and component-driven user interfaces using React.js. My focus is clean code, optimal performance, and seamless user experiences that make web applications feel dynamic, modern, and easy to use.',
        projects: '12 Projects',
        icon: <Palette className='h-6 w-6 text-green-400' />,
    },
    {
        title: 'UI/UX Design',
        desc: 'I craft intuitive, visually appealing user experiences focused on clarity, usability, and seamless interaction. My designs combine user research, wireframes, and modern aesthetics to create interfaces that enhance engagement and make applications effortless to navigate.',
        projects: '07 Projects',
        icon: <Layers className='h-6 w-6 text-green-400' />,
    },
    {
        title: 'Full-Stack MERN Development',
        desc: 'I develop complete web applications using MongoDB, Express, React, and Node.js. From frontend interfaces to backend logic, I deliver scalable, secure, and fully functional solutions tailored to business needs.',
        projects: '18 Projects',
        icon: <Globe className='h-6 w-6 text-green-400' />,
    },
    {
        title: 'Responsive Web Design',
        desc: 'I create modern, mobile-friendly websites that automatically adjust to every screen size, delivering smooth navigation, clean layouts, and fast performance. This ensures a consistent, high-quality user experience on all devices.',
        projects: '21 Projects',
        icon: <Smartphone className='h-6 w-6 text-green-400' />,
    },
    {
        title: 'Custom Web Application Development',
        desc: 'I build tailored web applications designed to match unique business requirements. My solutions focus on functionality, scalability, and performance to deliver reliable digital tools for growth and automation.',
        projects: '05 Projects',
        icon: <Rocket className='h-6 w-6 text-green-400' />,
    },
];

const statsData: StatsType[] = [
    {
        number: '10+',
        label: 'Technologies Mastered',
    },
    {
        number: '05+',
        label: 'Technical Certification',
    },
    {
        number: '20+',
        label: 'Projects Done',
    },
];

const certification: CertificateType[] = [
    {
        imgSrc: "/AWS.png",
        title: "AWS Cloud Technical Essentials",
        tags: ["AWS","Cloud Computing","Basics"],
        CertiLink: "https://drive.google.com/file/d/1iKgXgb47SOQFymrxK2PYQMCE7n7r7j97/view?usp=sharing"
    },
    {
        imgSrc: "/C++.png",
        title: "C++ Programming",
        tags: ["C++", "Programming"],
        CertiLink: "#"
    },
    {
        imgSrc: "FEC.png",
        title: "Front-End Development",
        tags: ["HTML", "CSS", "JavaScript"],
        CertiLink: "#"
    },
    {
        imgSrc: "Html.png",
        title: "HTML5 Programming",
        tags: ["HTML5", "Programming"],
        CertiLink: "#"
    },
    {
        imgSrc:"Intern.jpeg",
        title: "Frontend Developer Intern",
        tags: ["Frontend", "Internship"],
        CertiLink: "#"
    },
    {
        imgSrc : "React.png",
        title: "React.js Development",
        tags: ["React.js", "Frontend"],
        CertiLink: "#"
    },
    {
        imgSrc: "JSE.png",
        title: "JavaScript Programming",
        tags: ["JavaScript", "Programming" , "Expert"],
        CertiLink: "#"
    },
    {
        imgSrc: "Oracle.png",
        title: "Oracle Database SQL Certified",
        tags: ["SQL", "Database"],
        CertiLink: "#"
    },
];

export {
    socialLinks,
    projectsData,
    education,
    experience,
    tools,
    services,
    navLinks,
    statsData,
    certification,
};