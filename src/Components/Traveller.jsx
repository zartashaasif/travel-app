import React from "react";
import visite from "../assests/visite.png";
function Travellers() {
  return (
    <>
      <div className="md:flex justify-center md:pt-[100px] md:px-[160px] pt-[34px] md:mb-[100px]">
        <div className="w-full max-w-[1920px] h-[417px] px-[60px]">
          <h2 className="w-[350px] h-[120px] bg-[#2ECC71] flex justify-center items-center text-[16px] font-semibold text-[#FFFFFF] md:mr-[20px]">
            Travellers – learn to earn <br />
            your way around the world
          </h2>
          <p className="md:w-[470px] w-[350px] text-justify text-[14px] font-normal text-[#787878] md:pt-[30px] pb-[20px] pt-[20px]">
            Working Traveller specialises in helping you gain work references in
            your chosen skills as you work and travel around the world. If you
            are a seasoned pro or just starting out, add Skills to your profile
            that you have or want to learn. Become a full member – it’s<span className="text-[#2ECC71]"> €10.00 a
            year</span> and contact 100s of hosts directly that need your skills at the
            time you will be travelling to their country. Have work booked up
            before you leave and save on hostels by<span className="text-[#2ECC71]"> becoming a Working
            Traveller.</span>
          </p>
          <button class="px-8 py-2 bg-green-500 text-white  text-base font-medium rounded-lg">
            Add your skill here
          </button>
        </div>
        <div className="w-full px-[60px] ">
          <img src={visite} alt="visite" className="w-[600px] w-[350px]"/>
        </div>
      </div>
    </>
  );
}
export default Travellers;
