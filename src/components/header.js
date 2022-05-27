import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";

const Header = () => {
  const Navigate = useNavigate();

  return (
    <div className="bg-[#080808]">
      <div className="container mx-auto lg:container lg:mx-auto md:container md:mx-auto flex flex-row items-center justify-between py-[32px]">
        <div className="flex flex-row">
          <Link to="/" className="pr-[20px] border-r-[2px]">
            <img src={Logo} alt="Crypto Planet" />
          </Link>
          <ul className="ml-[40px] inline-flex">
            <li>
              <NavLink
                to="/market"
                className="text-gray-300 text-lg hover:text-white font-inter hover:cursor-pointer"
              >
                Market
              </NavLink>
            </li>
            <li className="ml-[40px]">
              <NavLink
                to="/watchlist"
                className="text-gray-300 text-lg hover:text-white font-inter hover:cursor-pointer"
              >
                Watchlist
              </NavLink>
            </li>
            <li className="ml-[40px]">
              <NavLink
                to="/portfolio"
                className="text-gray-300 text-lg hover:text-white font-inter hover:cursor-pointer"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="ml-[40px]">
              <NavLink
                to="/learn"
                className="text-gray-300 text-lg hover:text-white font-inter hover:cursor-pointer"
              >
                Learn
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button
            className="px-[24px] py-[12px] text-blue-500 text-lg bg-[#080808] hover:bg-gray-700 rounded-lg"
            onClick={() => Navigate("/signin")}
          >
            Sign In
          </button>
          <button
            className="px-[24px] py-[12px] text-white text-lg  bg-blue-500 hover:bg-blue-600 rounded-lg ml-[20px]"
            onClick={() => Navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
