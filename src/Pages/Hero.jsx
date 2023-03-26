import React from "react";
import heroImage from "../images/Img-01.png";

const Hero = () => {
  return (
    <div>
      <div className="hero h-screen	w-screen">
        <div className="grid grid-cols-2">
          <div className="border border-8 border-white h-60 w-2/3 mt-40 ml-40">
            <h1 className="text-white font-bold	text-3xl pt-4 pl-2		">
              Welcome to micro Task Bidz
            </h1>
            <p className="pt-10 text-white font-medium pl-2 ">
              simple, smoooth, elegent
            </p>
            <div className="border border-0 h-8 w-1/2 ml-2 mt-8 bg-white mx-auto 	">
              <h1 className="flex justify-center pt-1 font-medium">
                Call Us: +8801686740401
              </h1>
            </div>
          </div>
          <div className="w-2/3 h-2/3 mt-48	">
            <img src={heroImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
