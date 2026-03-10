"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import Copy from "./Copy";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const LogoCarousel = ({ title = "Brands We've Empowered" }) => {
    const brandLogos = [
        { name: "404", src: "/brands/404-logo-removebg-preview.png" },
        { name: "BCLogo", src: "/brands/BCLogo.png" },
        { name: "Ajanta", src: "/brands/ajanta.png" },
        { name: "Crowdverse", src: "/brands/crowdverse.png" },
        { name: "Ecom", src: "/brands/ecom.png" },
        { name: "Elevate", src: "/brands/elevate.png" },
        { name: "Femtricks", src: "/brands/femtricks.png" },
        { name: "Lumi", src: "/brands/lumi.png" },
        { name: "Seek Buy Love", src: "/brands/seekbuylove.png" },
        { name: "Sevakai", src: "/brands/sevakai black.png" },
        { name: "Sky Logo", src: "/brands/skylogo.png" },
        { name: "Stoneleaf", src: "/brands/stoneleaf.png" },
    ];

    // Duplicate the array for seamless infinite scroll
    const duplicatedLogos = [...brandLogos, ...brandLogos];

    return (
        <div className="py-20 px-4">
            <div>
                <div className="headline">
                    <div className="md:flex md:gap-4 lg:gap-6 xl:gap-8 md:justify-end">
                        <h1>brands</h1>
                        <h1 className="">we've</h1>
                    </div>
                    <div className="md:flex">
                        <h1>empowered</h1>
                        <h1 className="text-right"></h1>
                    </div>
                </div>
            </div>

            <div className="md:relative md:-mt-[5vw] md:flex md:gap-5 flex flex-col gap-4">
                <div className="flex justify-center md:justify-end">
                    <div className="relative w-90 md:w-[30vw] md:mt-[14vw]">
                        <Copy>
                            <h1 className="sub-headline text-center">
                                I work with brands that demand excellence in digital solutions.
                            </h1>
                        </Copy>
                    </div>
                </div>

                <div className="md:w-[70vw]">
                    <div id="brand_img_wrapper_1">
                        <div className="relative brand_img_1 h-[75vw] md:h-[35vw] overflow-hidden">
                            <div className="relative w-full h-full overflow-hidden px-1 pt-2 pb-2 md:py-12">
                                <div className="flex gap-12 md:gap-24 items-center justify-center min-h-[220px] md:min-h-[400px] animate-brands">
                                    {[...brandLogos, ...brandLogos].map((brand, index) => (
                                        <BrandLogo key={`${brand.name}-${index}`} brand={brand} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const BrandLogo = ({ brand }) => {
    return (
        <div className="flex items-center justify-center transition-all duration-300 hover:scale-110">
            <img
                src={brand.src}
                alt={brand.name}
                className="h-28 md:h-40 w-auto object-contain max-w-[200px] md:max-w-[300px]"
                title={brand.name}
                loading="lazy"
            />
        </div>
    );
};
