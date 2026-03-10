"use client";
import { motion } from "framer-motion";

const Ticker = () => {
    const skills = [
        "MERN",
        "JAVA", 
        "UI/UX",
        "CANVA",
        "WORDPRESS",
        "REACT",
        "NODE.JS",
        "MONGODB",
        "EXPRESS",
        "NEXT.JS",
        "TAILWIND",
        "GSAP",
        "FIGMA",
        "TYPESCRIPT",
        "MYSQL",
        "GIT",
        "DOCKER"
    ];

    const skillsText = skills.join(" • ") + " • ";

    return (
        <div className="w-full overflow-hidden bg-black py-8">
            <div className="flex whitespace-nowrap">
                <div className="flex gap-2 animate-ticker">
                    {[...Array(8)].map((_, i) => (
                        <span
                            key={i}
                            className="text-5xl md:text-6xl lg:text-7xl font-serif text-white font-bold px-2 uppercase"
                            style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                            {skillsText}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Ticker;
