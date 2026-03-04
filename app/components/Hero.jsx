"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import Copy from "./Copy";
import {motion} from "motion/react"
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef();
  const heroImgRef1 = useRef();
  const isMobile = useMediaQuery({maxWidth: 768})

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: isMobile ? "center top" : "bottom top",
        scrub: true,
      },
    });

    tl.fromTo(
      heroImgRef1.current,
      {
        y: isMobile ? 80 : 120,
      },
      {
        y: 40,
        ease: "none",
      }
    );
  }, []);

  return (
    <div ref={heroRef} className="w-full px-4">
      <div className="pt-40 md:pt-30 lg:pt-45">
        <div className="headline text-right">
          <h1>Hello, I’m</h1>
          <h1 className="md:text-left">Mohan.</h1>
        </div>
      </div>

      <div className="relative flex md:justify-center gap-2 md:-mr-25">
        <div className="w-full md:w-[55vw] relative">
          <div id="hero_img_wrapper_1">
            <div className="relative hero_img_1 h-[28rem] md:h-[55vw] overflow-hidden">
              <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }} ref={heroImgRef1} className="relative w-full h-full">
                <Image
                  src={"/newpfp.jpeg"}
                  alt="Mohan Prasath"
                  className="object-cover object-top scale-90 md:scale-85"
                  style={{ objectPosition: 'top 0%' }}
                  fill
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:justify-start px-4">
        <div className="relative w-90 md:w-[30vw]">
          <Copy>
            <h1 className="sub-headline">
              I create modern web experiences. Performance, clarity,
              and clean UI aren't just goals—they're standards.
            </h1>
          </Copy>
        </div>
      </div>
    </div>
  );
};

export default Hero;
