import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../index.css";
function Navbar() {
  return (
    <>
      <div className="navbar h-[770px] md:hidden pt-[20px]">
        <nav className="px-5 text-black flex justify-between items-center  h-[20px] md:hidden pt-[20px]">
          <div className="text-[20px] font-bold ">Traveller</div>
          <div>
            <FaBars />
          </div>
        </nav>
        <div className="flex justify-center items-center mt-[200px] text-[#FFFFFF] px-8">
          <p className="text-[16px] font-normal bg rounded-[20px] h-[50px] text-center w-[1190px] pb-[45px] pt-[7px] pb-[56px] flex justify-center items-baseline">
            “Kickstart Your career or travel”
            <br />
            DO BOTH
          </p>
        </div>
        <div className="flex justify-center items-center pt-[25px]">
          <div className="w-[971px] h-[223px] bg rounded-[20px] pt-[65px] mt-[218px]">
            <div className="flex justify-center items-center gap-5">
              <div className="w-[200px] bg-[#FFFFFF] flex justify-center items-center rounded-[10px] px-4">
                <p className="w-[333px] h-[56px] text-[10px] font-normal flex items-center">
                  Where do you want to travel?
                </p>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div className="w-[200px] bg-[#FFFFFF] flex justify-center items-center rounded-[10px] px-4">
                <p className=" w-[333px] h-[56px] text-[10px] font-normal flex items-center">
                  What skills do you have?
                </p>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              
            </div>
            <div className="mt-[23px] flex justify-center items-center">
            <button class="px-8 py-2 bg-green-500 text-white  text-base font-medium rounded-lg">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar hidden md:flex">
        <div className="w-full h-[1080px]">
          <header className="flex justify-between pt-[60px] pb-[60px] bg px-16 ">
            <div>
              <h1 className="uppercase text-[20px] font-bold ">Traveller</h1>
            </div>
            <ul className="flex justify-center items-center gap-10 text-[#FFF] text-[16px] font-normal">
              <li
                className=" cursor-pointer capitalize font-medium
            text-[#FFFFFF] hover:scale-105 duration-200"
              >
                <a href="#">Find Work</a>
              </li>
              <li
                className=" cursor-pointer capitalize font-medium
            text-[#FFFFFF] hover:scale-105 duration-200"
              >
                <a href="#">Travellers</a>
              </li>
              <li
                className=" cursor-pointer capitalize font-medium
            text-[#FFFFFF] hover:scale-105 duration-200"
              >
                <a href="#">Hosts</a>
              </li>
              <li
                className=" cursor-pointer capitalize font-medium
            text-[#FFFFFF] hover:scale-105 duration-200"
              >
                <a href="#">Pricing</a>
              </li>
              <li
                className=" cursor-pointer capitalize font-medium
            text-[#FFFFFF] hover:scale-105 duration-200"
              >
                <a href="#">Blog</a>
              </li>
              <li
                className=" cursor-pointer capitalize font-medium
            text-[#FFFFFF] hover:scale-105 duration-200"
              >
                <a href="#">Work & Travel Country Guides</a>
              </li>
            </ul>
            <div class="flex gap-5">
              <button class="px-8 py-2 bg-white hover:bg-green-700 text-black text-base font-medium rounded-lg">
                Login
              </button>
              <button class="px-8 py-2  hover:bg-[#FFFFFF] bg-green-500 text-black text-base font-medium rounded-lg">
                Sign up
              </button>
            </div>
          </header>
          <div className="flex justify-center items-center pt-[214px] text-[#FFFFFF]">
            <p className="text-[72px] font-bold bg rounded-[20px] h-[200px] flex justify-center items-center text-center w-[1190px] leading-none">
              “Kickstart Your career or travel”
              <br />
              DO BOTH
            </p>
          </div>
          <div className="flex justify-center items-center pt-[282px]">
            <div className="w-[1071px] h-[223px] bg rounded-[20px] pt-[83px]">
              <div className="flex justify-center items-center gap-5">
                <div className="bg-[#FFFFFF] flex justify-center items-center rounded-[10px] px-4">
                  <p className="w-[333px] h-[56px] text-[16px] font-normal flex items-center">
                    Where do you want to travel?
                  </p>
                  <i class="fa-solid fa-angle-down"></i>
                </div>
                <div className="bg-[#FFFFFF] flex justify-center items-center rounded-[10px] px-4">
                  <p className=" w-[333px] h-[56px] text-[16px] font-normal flex items-center">
                    What skills do you have?
                  </p>
                  <i class="fa-solid fa-angle-down"></i>
                </div>
                <button class="px-8 py-2 bg-green-500 text-white  text-base font-medium rounded-lg">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
