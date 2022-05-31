import React from "react";
import Header from "../components/header";
import MarketCard from "../components/marketCard";
import MarketTabel from "../components/marketTabel";

const Market = () => {
  return (
    <div className="bg-[#080808]">
      <Header />
      <div className="mt-[80px] mb-[30px] container mx-auto lg:container lg:mx-auto md:container md:mx-auto ">
        <div className="bg-[#121318] rounded-2xl p-[40px] flex flex-col lg:w-[1128px]">
          <div className="flex flex-row items-center justify-between">
            <div>
              <h4 className="font-inter font-medium text-2xl text-white">
                Market Coins
              </h4>
              <p className="font-inter text-white mt-2">
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </div>
            <div class="relative w-[315px]">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 11C5 7.691 7.691 5 11 5C14.309 5 17 7.691 17 11C17 14.309 14.309 17 11 17C7.691 17 5 14.309 5 11ZM20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293Z"
                    fill="#9295A6"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="voice-search"
                class="bg-transparent text-gray-900 border-[1px] border-[#CCCED926] px-[10px] py-[13px] rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 dark:text-[#9295A6] focus-visible:ring-blue-500"
                placeholder="Search Currencies..."
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between mt-[40px]">
            <MarketCard />
            <MarketCard />
            <MarketCard />
          </div>
        </div>
        <MarketTabel />
      </div>
    </div>
  );
};

export default Market;
