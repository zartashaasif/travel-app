import React from "react";
function Worldtravel() {
  return (
    <>
      <div className="md:pt-[100px] md:mt-[30px] mt-[20px]">
        <div className="text-center">
          <h1 className="md:text-[30px] text-[15px]  font-bold md:w-[1363px] h-[30px] md:h-[60px]">
            Where in the world is it best to Work & Travel?
          </h1>
          <p className="md:w-[1363px] w-[300px] text-[14px] md:text-[14px] text-[#787878] ml-[73px] md:mt-[40px] md:mt-[20px] text-justify">
            Visit the ‘Work and Travel Country Guides’ to find out about work
            and volunteer visas and what kind of work you will find in the
            places you want to travel to. We have a long way to go with the
            wiki, but there are 100s of updates from travellers and hosts from
            all corners of the world. So do your bit and add in what you know
            once you have signed up and logged in.
          </p>
        </div>
      </div>
      <div className="md:flex md:flex-row justify-center md:gap-5 md:pt-[76px] px-[80px] flex flex-col gap-3 mt-[]">
        <div className="mountain w-[294px] h-[373px]"></div>
        <div className="sano w-[294px] h-[373px] md:mt-[-40px]"></div>
        <div className="night w-[294px] h-[373px] md:mt-[40px]"></div>
        <div className="sea w-[294px] h-[373px] md:mt-[-40px]"></div>
      </div>
      <div className="text-center mt-[20px] h-[66px]">
        <button class="px-8 py-2 bg-green-500 text-white text-base font-medium rounded-lg mb-[121px]">
          View All
        </button>
      </div>
    </>
  );
}

export default Worldtravel;
