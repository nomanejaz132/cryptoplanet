import React from "react";
import Logo from "../assets/images/Logo.svg";

const header = () => {
  return (
    <div className="bg-[#080808]">
      <div className="container mx-auto lg:container lg:mx-auto md:container md:mx-auto flex flex-row items-center justify-between py-[32px]">
        <div className="flex flex-row">
          <a
            href="http://cryptoplanet.com"
            className="pr-[20px] border-r-[2px]"
          >
            <img src={Logo} alt="Crypto Planet" />
          </a>
          <ul className="ml-[40px] inline-flex">
            <li>
              <a
                className="text-blue-500 text-lg font-inter hover:cursor-pointer"
                href="#123"
              >
                Market
              </a>
            </li>
            <li className="ml-[40px]">
              <a
                className="text-gray-300 text-lg hover:text-white font-inter hover:cursor-pointer"
                href="#123"
              >
                Watchlist
              </a>
            </li>
            <li className="ml-[40px]">
              <a
                className="text-gray-300 text-lg hover:text-white font-inter hover:cursor-pointer"
                href="#123"
              >
                Portfolio
              </a>
            </li>
            <li className="ml-[40px]">
              <a
                className="text-gray-300 text-lg hover:text-white font-inter hover:cursor-pointer"
                href="#123"
              >
                Learn
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button className="px-[24px] py-[12px] text-blue-500 text-lg bg-transparent rounded-lg">
            Sign In
          </button>
          <button className="px-[24px] py-[12px] text-white text-lg  bg-blue-500 hover:bg-blue-600 rounded-lg ml-[20px]">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default header;
