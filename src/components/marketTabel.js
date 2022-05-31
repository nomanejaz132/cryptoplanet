import React from "react";

const MarketTabel = () => {
  return (
    <div className="px-[40px] pb-[40px] bg-[#121318] rounded-2xl lg:w-[1128px] mt-[30px]">
      <table className="table-auto w-full">
        <thead className="w-full border-b border-[#333438]">
          <tr className="">
            <th className="py-[40px] pl-[20px] text-white text-left font-inter font-medium">
              #
            </th>
            <th className="py-[20px] pl-[20px] text-white text-left font-inter font-medium">
              Coin Name
            </th>
            <th className="py-[20px] pl-[20px] text-white text-left font-inter font-medium">
              Coin Price
            </th>
            <th className="py-[20px] pl-[20px] text-white text-left font-inter font-medium">
              24%
            </th>
            <th className="py-[20px] pl-[20px] text-white text-left font-inter font-medium">
              24h High
            </th>
            <th className="py-[20px] pl-[20px] text-white text-left font-inter font-medium">
              24h Low
            </th>
            <th className="py-[20px] pl-[20px] text-white text-left font-inter font-medium">
              Chart
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[#333438]">
            <td className="py-[30px] pl-[20px] text-white text-left font-inter font-normal">
              1
            </td>
            <td className="py-[30px] pl-[20px] text-white text-left font-inter font-normal">
              Bitcoin
            </td>
            <td className="py-[30px] pl-[20px] text-white text-left font-inter font-normal">
              36,452.548 BTC
            </td>
            <td className="py-[30px] pl-[20px] text-white text-left font-inter font-normal">
              +0.5% BTC
            </td>
            <td className="py-[30px] pl-[20px] text-white text-left font-inter font-normal">
              37,485.951 BTC
            </td>
            <td className="py-[30px] pl-[20px] text-white text-left font-inter font-normal">
              34,584.719 BTC
            </td>
            <td className="py-[30px] pl-[20px] text-white text-left font-inter font-normal">
              Big Chart
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MarketTabel;
