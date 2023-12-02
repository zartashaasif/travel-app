import React from "react";
import logo from "../assests/logo.png";
function Footer() {
  return (
    <>
      <div className="md:flex justify-center items-center md:gap-10 md:w-full md:max-w-[1928px] w-[400px] mx-auto md:h-[333px] h-[750px] bg-[#2ECC71] md:px-40 md:px-[40px] px-[90px]">
        <></>
        <div>
          <img src={logo} alt="Image is no uploaded" className="pt-[18px]" />
          <p className="md:w-[365px] w-[200px] h-[60px] text-[#FFFFFF] mt-[23px]">
            Work and travel the world using your skills to gain work experience
            references for a good job back home
          </p>
        </div>
        <div className="text-[#FFFFFF] md:mt-[30px] mt-[30px]">
          <ul className="flex flex-col md:gap-4 gap-1">
            <h2 className="text-[20px] font-bold mt-[20px]">Links</h2>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>job</a>
            </li>
            <li>
              <a>Disclamer</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="text-[#FFFFFF] flex flex-col md:gap-4 gap-2 md:mt-[30px] mt-[20px]">
          <h2 className="text-[20px] font-bold">Contact Us</h2>
          <div className="flex gap-2">
            <i class="fa-solid fa-phone"></i>
            <p>+1 (123) 123 4568</p>
          </div>
          <div className="flex gap-2">
            <i class="fa-solid fa-envelope"></i>
            <p>info@example.com</p>
          </div>
          <div className="flex gap-2">
            <i class="fa-solid fa-location-dot"></i>
            <p>27, Lonsdale Rd, Blackpool, FY1 6EE, UK</p>
          </div>
        </div>
        <div className="text-[#FFFFFF] md:mt-[30px] mt-[20px]">
          <h3 className="text-[16px] font-bold">Fallow us on social media</h3>
          <i id="icon" class="fa-brands fa-square-facebook"></i>
          <i id="icon" class="fa-brands fa-square-whatsapp"></i>
          <i id="icon" class="fa-brands fa-square-twitter"></i>
          <i id="icon" class="fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </>
  );
}

export default Footer;
