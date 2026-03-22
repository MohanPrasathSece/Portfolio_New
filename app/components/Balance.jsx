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

const Balance = () => {
  const balanceRef = useRef();
  const balImgRef = useRef();
  const balImgRef2 = useRef();
  const isMobile = useMediaQuery({ maxWidth: 768 })


  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: balanceRef.current,
        start: "top center",
        end: isMobile ? "bottom top" : "bottom top",
        scrub: true,
      },
    });

    tl.fromTo(
      balImgRef.current,
      {
        y: isMobile ? 40 : "-0vw",
      },
      {
        y: isMobile ? -40 : "-20vw",
        ease: "none",
      }
    ).fromTo(
      balImgRef2.current,
      {
        y: isMobile ? -200 : "-20vw",
      },
      {
        y: isMobile ? -260 : "-60vw",
        ease: "none",
      },
      "<"
    )
  }, []);

  const projects = [
    {
      title: "Amzcoz",
      image: "/projects/amzcoz.png",
      codeUrl: "https://github.com/MohanPrasathSece",
      liveUrl: "https://www.amzcoz.com/",
    },
    {
      title: "Launch & Close",
      image: "/projects/launch.png",
      codeUrl: "https://github.com/MohanPrasathSece",
      liveUrl: "https://www.launchandclose.com/",
    },
    {
      title: "Nirvana Pain Clinic",
      image: "/projects/nirvanapainclinic.png",
      codeUrl: "https://github.com/MohanPrasathSece",
      liveUrl: "https://www.nirvanapainclinic.com/",
    },
    {
      title: "Precision RCT",
      image: "/projects/precision.png",
      codeUrl: "https://github.com/MohanPrasathSece",
      liveUrl: "https://www.precisionrct.co.uk/",
    },
    {
      title: "Xivi",
      image: "/projects/xivi.png",
      codeUrl: "https://github.com/MohanPrasathSece",
      liveUrl: "https://www.xivi.in/",
    },
    {
      title: "Vakalt",
      image: "/projects/vakalt.png",
      codeUrl: "https://github.com/MohanPrasathSece",
      liveUrl: "https://vakalt-firm.vercel.app/",
    },
  ];

  return (
    <div ref={balanceRef} className="py-10 px-4 overflow-hidden">
      <div>
        <div className="headline">
          <h2 className="md:text-right">my</h2>
          <h2 className="text-center">projects</h2>
        </div>
      </div>

      <div className="flex justify-center md:justify-start">
        <div className="relative w-90 md:w-[30vw]">
          <Copy>
            <p className="sub-headline text-center">
              A curated selection of high-performance web applications and digital solutions that showcase my expertise in modern development.
            </p>
          </Copy>
        </div>
      </div>

      <div className="mt-16">
        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-projects" style={{ width: "max-content" }}>
            {[...projects, ...projects].map((project, idx) => (
              <div
                key={`${project.title}-${idx}`}
                className="min-w-[80vw] md:min-w-[50vw] lg:min-w-[38vw] flex-shrink-0"
              >
                <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl shadow-2xl">
                  <div className="relative w-full h-52 md:h-[380px] overflow-hidden rounded-xl">
                    <Image
                      src={project.image}
                      alt={`Mohan Prasath Portfolio Project - ${project.title} | Modern Web Experience`}
                      className="object-cover object-center"
                      fill
                    />
                  </div>

                  <div className="mt-8">
                    <h3 className="font-roc-Grotesk-Condensed-bold uppercase text-4xl md:text-5xl">
                      {project.title}
                    </h3>
                    <div className="mt-6 flex gap-6 [&_a]:bg-white [&_a]:border-2 [&_a]:border-gray-800 [&_a]:uppercase [&_a]:font-roc-Grotesk-Condensed-bold [&_a]:px-8 [&_a]:py-4 [&_a]:text-xl [&_a]:hover:bg-gray-800 [&_a]:hover:text-white [&_a]:transition-all">
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        source code
                      </a>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        live site
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
