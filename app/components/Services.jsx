import React from "react";
import Copy from "./Copy";

const Services = () => {
  return (
    <div className="py-10 md:py-15 lg:py-22 px-4 bg-[#1ec5fc] border-t overflow-hidden">
      <div className="">
        <div className="headline">
          <h2 className="">What I'm</h2>
          <h2 className="">Good At</h2>
        </div>

        <div className="flex justify-center flex-wrap gap-4 md:gap-6 py-15">
          <div className="flex flex-col gap-2 mb-8 scroll-animate scroll-animate-delay-1">
            <div className="relative w-full">
              <Copy>
                <div className="service-headline text-center">Website Development</div>
              </Copy>
            </div>
            <div className="relative w-full">
              <Copy>
                <div className="service-headline text-center">Website Redesign & Optimization</div>
              </Copy>
            </div>
            <div className="relative w-full">
              <Copy>
                <div className="service-headline text-center">Brand Development</div>
              </Copy>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-8 scroll-animate scroll-animate-delay-2">
            <div className="relative w-full">
              <Copy>
                <div className="service-headline text-center">WordPress Development</div>
              </Copy>
            </div>
            <div className="relative w-full">
              <Copy>
                <div className="service-headline text-center">Hosting & Deployment</div>
              </Copy>
            </div>
            <div className="relative w-full">
              <Copy>
                <div className="service-headline text-center">Logo Design</div>
              </Copy>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-8 scroll-animate scroll-animate-delay-3">
            <div className="relative w-full">
              <Copy>
                <div className="service-headline text-center">Poster & Graphic Design</div>
              </Copy>
            </div>
            <div className="relative w-full">
              <Copy>
                <div className="service-headline text-center">Social Media Management</div>
              </Copy>
            </div>
            <div className="relative w-full">
              <Copy>
                <div className="service-headline text-center">SEO & Website Optimization</div>
              </Copy>
            </div>
          </div>
        </div>

        <div className="headline">
          <h2 className="">From</h2>
          <h2 className="">Strategy</h2>
          <div className="md:flex md:gap-4 lg:gap-6 xl:gap-8 md:justify-end">
            <h2 className="text-right">To Design</h2>
          <h2 className="text-center">And</h2>
          </div>
          <h2 className="text-center">Development.</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
