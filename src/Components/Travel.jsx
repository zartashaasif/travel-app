import React from "react";
import "../index.css";
import vlog from "../assests/vlog.png";
function Travel() {
  return (
    <>
      <div className="bg-[#F5F5F5] md:pt-[100px] md:flex justify-center items-center pt-[20px] md:px-[200px] px-[20px]">
        <div className="w-full max-w-[1920px] h-[440px] md:px-[0px] px-[50px]">
          <div className="flex flex-col justify-center">
            <h1 className="w-[372px] h-[40px] text-[35px] font-medium">
              How it works
            </h1>
            <p className="md:w-[400px] w-[300px] h-[60px] text-[14px] font-medium text-[#787878] pt-[25px] text-justify">
              Work and travel the world using your skills to gain valuable work
              experience & references for a good job when you go back home.
            </p>
            <div className="flex pt-[50px] md:w-[400px] w-[330px]">
              <i class="fa-solid fa-angle-down"></i>
              <p className="md:text-[16px] text-[14px] font-medium ml-[20px]">
                Book up work with hosts needing your skills.
              </p>
            </div>
            <div className="flex pt-[50px] md:w-[400px] w-[330px]">
              <i class="fa-solid fa-angle-down"></i>
              <p className="md:text-[16px] text-[14px] font-medium ml-[20px]">
                Work till experience leads to paid placements.
              </p>
            </div>
            <div className="flex pt-[50px] md:w-[400px] w-[330px]">
              <i class="fa-solid fa-angle-down"></i>
              <p className="md:text-[16px] text-[14px] font-medium ml-[20px]">
                Work till experience leads to paid placements.
              </p>
            </div>
            <div className="flex pt-[50px] md:w-[400px] w-[330px]">
              <i class="fa-solid fa-angle-down"></i>
              <p className="md:text-[16px] text-[14px] font-medium ml-[20px]">
                Work till experience leads to paid placements.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[758] px-[40px]">
          <img src={vlog} alt="travel vlog" className="md:w-[500px] w-[400px]"/>
        </div>
        
      </div>
    </>
  );
}
export default Travel;
