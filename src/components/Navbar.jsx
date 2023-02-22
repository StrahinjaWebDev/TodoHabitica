import React from "react";
import Cubes from "../assets/cubes.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineReload } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { MdPersonOutline } from "react-icons/md";
import Logo from "../assets/logo.png";
import Coin from "../assets/coin.svg";
import Diamond from "../assets/diamond.svg";
import Logo2 from '../assets/logo2.png'

function Navbar() {
  return (
    <div className="w-screen h-[4rem] bg-primary-purple flex justify-around ">
      <div className="flex justify-between h-[100%] w-[95%]">
        <img
          src={Cubes}
          alt="cubes"
          className="absolute right-0 z-0 bg-cover"
        />
        <div className="flex justify-start items-center w-[30%] lg:hidden">
          <AiOutlineMenu size={"2rem"} className="text-white" />
        </div>
        <div className="flex justify-center items-center lg:gap-8">
          <img src={Logo} alt="logo" className=" w-[2rem] xl:hidden" />
          <img className="hidden xl:block w-[9rem]  bg-white justify-start" src={Logo2} alt="" />
          <span className="hidden lg:block text-xl text-white">Tasks</span>
          <span className="hidden lg:block text-xl text-white">Inventory</span>
          <span className="hidden lg:block text-xl text-white">Shops</span>
          <span className="hidden lg:block text-xl text-white">Party</span>
          <span className="hidden lg:block text-xl text-white">Guilds</span>
          <span className="hidden lg:block text-xl text-white">Group</span>
          <span className="hidden lg:block text-xl text-white">Challenges</span>
          <span className="hidden lg:block text-xl text-white">Help</span>
        </div>
        <div className="z-10 flex justify-end items-center gap-4 w-[30%] ">
          <div className="hidden  lg:flex  justify-start w-[35%] gap-3
          ">
          <img
            className="hidden lg:block w-[2rem]"
            src={Diamond}
            alt="diamond"
          />
          <span className="text-white">0</span>
          <img className="hidden lg:block w-[2rem]" src={Coin} alt="coin" />
          <span className="text-white">0</span>
          </div>
          <AiOutlineReload size={"2rem"} className="text-white" />
          <BiMessageDetail size={"2rem"} className="text-white" />
          <MdPersonOutline size={"2rem"} className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
