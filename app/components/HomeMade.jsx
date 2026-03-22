"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { useRef } from "react";
import Copy from "./Copy";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeMade = () => {
  const homemadeRef = useRef();
  const heroImgRef3 = useRef();
  const isMobile = useMediaQuery({ maxWidth: 768 })

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: homemadeRef.current,
        start: "top center",
        end: isMobile ? "center top" : "bottom top",
        scrub: true,
      },
    });

    tl.fromTo(
      heroImgRef3.current,
      {
        y: isMobile ? 40 : 160,
      },
      {
        y: isMobile ? -20 : -40,
        ease: "none",
      }
    )
  }, []);

  return (
    <div ref={homemadeRef} className="py-10 px-4">
      <div className="">
        <div className="headline text-center md:text-right">
          <h2 className="">about</h2>
          <h2 className="md:text-center md:ml-[10vw]">my</h2>
          <h2 className="md:text-center md:mr-[8vw]">work</h2>
        </div>

        <div className="md:relative md:-mt-[5vw] md:flex md:flex-row-reverse md:gap-5">
          <div className="md:w-[70vw]">
            <div id="hero_img_wrapper_3">
              <div className="relative hero_img_3 h-[55vw] md:h-[35vw] overflow-hidden">
                <motion.div
                  ref={heroImgRef3}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={"/header-img-3.avif"}
                    alt="Mohan Prasath - Showcasing Full Stack Development Expertise and Creative Digital Solutions"
                    className="object-cover object-top scale-110 md:scale-125 md:-rotate-12"
                    fill
                  />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-start">
            <div className="relative w-90 md:w-[30vw] md:mt-[14vw]">
              <Copy>
                <p className="sub-headline text-center">
                  As a dedicated Full Stack Developer, Mohan Prasath engineers exceptional web experiences that set the standard for performance, clarity, and quality in modern digital products.
                </p>
              </Copy>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMade;
