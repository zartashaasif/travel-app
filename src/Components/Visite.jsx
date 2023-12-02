import React from "react";
import golden from "../assests/goldan.png";
import seen from "../assests/seen.png";
import bag from "../assests/bag.png";
import sun from "../assests/sun.png";
function Visite() {
  return (
    <>
    <div className="md:flex justify-center items-center md:px-32 px-[40px] mt-[30px]">
        <div className="md:w-[600px] w-[300px]">
          <div className=" md:px-[0px] px-[20px]">
          <h1 className="w-[903px] h-[70px] font-bold text-[20px]">
            Hosts – looking for motivated
            <br /> volunteers and professionals?
          </h1>
          <p className="md:w-[552px] w-[350px] md:h-[130px] font-normal text-[14px] text-[#787878] text-justify">
            Working Traveller specialises in helping you gain work references in
            your chosen skills as you work and travel around the world. If you
            are a seasoned pro or just starting out, add Skills to your profile
            that you have or want to learn. Become a full member – it’s{" "}
            <span className="text-[#31AB94]">€10.00 a year</span> and contact
            100s of hosts directly that need your skills at the time you will be
            travelling to their country. Have work booked up before you leave
            and save on hostels by{" "}
            <span className="text-[#31AB94]">becoming a Working Traveller</span>{" "}
            .
          </p>
          <div className="md:pt-[0px] pt-[10px]">
          <button class="px-8 py-2 bg-green-500 text-[#FFFFFF] text-base font-medium rounded-lg">
            Sign up As a Host
          </button>
          </div>
          </div>
          <div className=" md:px-[0px] px-[20px]">
          <h1 className="w-[903px] h-[70px] font-bold md:text-[20px] text-[18px] pt-[25px]">
            The skills you need – when you need them
          </h1>
          <p className="text-[14px] text-[#787878] font-normal md:w-[552px] w-[350px] md:h-[130px] text-justify mt-[-5px] pb-[]">
            You have heard it many times. Employers want to hire people with
            work experience. All those years of getting your degree seem to
            suddenly count for nothing. How do you get the work experience if no
            one will give you a job? References from your Working Traveller work
            placements will show future employers you have the work ethic, or
            even better, the skills they need. Your references show how you use
            your skills: how punctual you are: if you have a good work ethic and
            if you can make decisions. If you take a picture with your host
            doing the WT hand sign, it 100% proves you were there. To find work
            placements from hosts that need your skills, check the{" "}
            <span className="text-[#2ECC71]">work search</span> section.
          </p>
          </div>
          <div className=" md:px-[0px] px-[20px]">
          <h1 className="w-[903px] md:h-[90px] h-[77px] font-bold text-[20px] md:pt-[40px] pt-[10px]">
            Agree what they will do/what you provide <br /> – before they arrive
          </h1>
          <p className="text-[14px] text-[#787878] font-normal md:w-[552px] w-[350px] md:h-[130px] md:pt-[20px] text-justify">
            I hear you say ” I have no idea where I will be travelling to next –
            so how can I book work 3 months in advance?” That’s fine, you can
            apply for last-minute cleaning and harvest work and some times hosts
            will need even skilled people at short notice. If getting references
            on your profile for your chosen skills is more important than
            getting that selfy at{" "}
            <span className="text-[#31AB94]">Machu Picchu</span> – then it pays
            to have your availability literally mapped out on your profile.
            Hosts who are organised plan ahead searching the WT database months
            in advance to see when the skills they need are coming to their
            country. Be organised, be a Working Traveller and make your trip a
            meaningful experience.
          </p>
          </div>
          </div>
          <div className="px-[40px] md:pt-[0px] pt-[30px]">
          <div className="md:flex md:gap-5 md:flex-row flex flex-col gap-3">
            <img
              src={golden}
              className="md:w-[286px] h-[228px] w-[1000px] "
              alt="image is not upload"
            />
            <img
              src={seen}
              className="md:w-[286px] h-[228px]  w-[1000px]"
              alt="image is not upload"
            />
          </div>
          <div className="md:flex-row md:flex md:gap-5 md:pt-10 flex flex-col gap-3 pt-[10px]">
            <img
              src={sun}
              className="md:w-[286px] h-[228px]  w-[1000px]"
              alt="image is not upload"
            />
            <img
              src={bag}
              className="md:w-[286px] h-[228px]  w-[1000px]"
              alt="image is not upload"
            />
          </div>
        </div>
        </div>
        
    
    </>
  );
}

export default Visite;
