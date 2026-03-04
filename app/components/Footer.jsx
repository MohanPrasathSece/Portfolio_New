"use client";
import Image from "next/image";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <div className="bg-[#fffff1] relative border-t pt-15 md:pt-25 overflow-hidden">
      <div>
        <div className="relative w-full h-[35vw]">
          <Image src="/brands/mohan_text-removebg-preview.png" alt="Mohan Prasath" fill />
        </div>
      </div>

      <div className="py-6">
        <div>
          <div className="relative z-5 mt-[10vh] [&_div]:bg-white [&_div]:font-roc-Grotesk-Condensed-bold [&_div]:uppercase [&_div]:mx-auto [&_div]:w-80 [&_div]:text-center [&_div]:pt-3 [&_div]:py-1 [&_div]:border [&_div]:text-2xl flex flex-col gap-10">
            <a
              href="mailto:mohanprasath563@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
                className="-rotate-2"
              >
                Mohan Prasath S — Full Stack Developer
              </motion.div>
            </a>
          </div>
        </div>

        <div>
          <div className="relative z-5 flex w-full justify-between px-5 mt-40 [&_div_div]:bg-white [&_div_div]:border [&_div_div]:text-center [&_div_div]:uppercase [&_div_div]:font-roc-Grotesk-Condensed-bold [&_div_div]:px-4 [&_div]:flex [&_div]:flex-col [&_div]:gap-4 md:[&_div]:w-full md:[&_div]:flex-row md:[&_div]:justify-between md:[&_div_div]:w-fit md:gap-[20vw]">
            <div>
              <a
                href="https://www.linkedin.com/in/mohan-prasath-s-fullstackdeveloper/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>LinkedIn</div>
              </a>
              <a
                href="https://leetcode.com/u/MohanPrasathSece/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>LeetCode</div>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/MohanPrasathSece"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>Github</div>
              </a>
              <a
                href="https://wa.me/+919025421149"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>Whatsapp</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 h-full w-full">
        <div className="relative w-full h-[80vw] md:h-[55vw] lg:h-[65vw] mt-[14rem] md:mt-[25rem]">
            <Image src="/footer.avif" alt="footer" className="object-top object-contain" fill />
        </div>
      </div>
    </div>
  );
};

export default Footer;
