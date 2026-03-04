import React from "react";
import Copy from "./Copy";

const Services = () => {
  return (
    <div className="py-10 md:py-15 lg:py-22 px-4 bg-[#1ec5fc] border-t overflow-hidden">
      <div className="">
        <div className="headline">
          <h1>What I'm</h1>
          <h1 className="">Good At</h1>
        </div>

        <div className="flex justify-center flex-wrap gap-10 py-15">
          <div className="flex flex-col gap-2 mb-8">
            <div className="relative w-full">
              <Copy>
                <h1 className="service-headline text-center">Website Development</h1>
              </Copy>
            </div>
            <div className="relative w-full">
              <Copy>
                <h1 className="service-headline text-center">Website Redesign & Optimization</h1>
              </Copy>
            </div>
            <div className="relative w-full">
              <Copy>
                <h1 className="service-headline text-center">Brand Development</h1>
              </Copy>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-8">
            <div className="relative w-full">
              <Copy>
                <h1 className="service-headline text-center">WordPress Development</h1>
              </Copy>
            </div>
            <div className="relative w-full">
              <Copy>
                <h1 className="service-headline text-center">Hosting & Deployment</h1>
              </Copy>
            </div>
            <div className="relative w-full">
              <Copy>
                <h1 className="service-headline text-center">Logo Design</h1>
              </Copy>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-8">
            <div className="relative w-full">
              <Copy>
                <h1 className="service-headline text-center">Poster & Graphic Design</h1>
              </Copy>
            </div>
            <div className="relative w-full">
              <Copy>
                <h1 className="service-headline text-center">Social Media Management</h1>
              </Copy>
            </div>
            <div className="relative w-full">
              <Copy>
                <h1 className="service-headline text-center">SEO & Website Optimization</h1>
              </Copy>
            </div>
          </div>
        </div>

        <div className="headline">
          <h1>From</h1>
          <h1>Strategy</h1>
          <div className="md:flex md:gap-4 lg:gap-6 xl:gap-8 md:justify-end">
            <h1 className="text-right">To Design</h1>
          <h1 className="text-center">And</h1>
          </div>
          <h1 className="text-center">Development.</h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
