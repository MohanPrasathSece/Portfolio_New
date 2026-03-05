"use client";
import React from "react";
import Image from "next/image";
import Copy from "./Copy";

const ZyraDigitals = () => {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="md:relative md:-mt-[5vw] md:flex md:gap-5 flex flex-col gap-4">
        <div className="flex justify-center md:justify-end">
          <div className="relative w-90 md:w-[30vw] md:mt-[14vw]">
            <Copy>
              <h1 className="sub-headline text-center">
                My digital agency where I bring creative visions to life through innovative web solutions and digital experiences.
              </h1>
            </Copy>
          </div>
        </div>

        <div className="md:w-[70vw]">
          <div id="company_img_wrapper_1">
            <div className="relative company_img_1 h-[55vw] md:h-[35vw] overflow-hidden">
              <div className="relative w-full h-full overflow-hidden px-12 py-12">
                <div className="flex items-center justify-center min-h-[400px]">
                  <Image
                    src="/logo-black.jpeg"
                    alt="Zyra Digitals Logo"
                    width={400}
                    height={200}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZyraDigitals;
