import React from "react";
import MyAvatar from "../assets/Avatar.png";
import Star from "../assets/star.svg";
import Sword from "../assets/sword.svg";
import Heart from "../assets/heart.svg";

function Avatar() {
  return (
    <div className="w-screen h-[12rem] bg-second-purple flex justify-center items-center">
      <div className="w-[95%] h-[95%]">
        <div className="w-[85%] h-[100%] float-left md:w-[50%]">
          <div className="grid grid-cols-2 w-[22rem]  ">
            <div className="w-[10rem] h-[10rem]  bg-purple-300  flex  justify-center items-end border-[3px] border-purple-800">
              <div className=" w-[100%] h-[35%] bg-purple-500  opacity-40 "></div>
              <img
                src={MyAvatar}
                alt="Avatar"
                className="absolute z-0 pb-9 pl-4 w-[6rem]"
              />
            </div>
            <div className="w-[100%] h-[100%] grid-rows-3 mt-4">
              <div className="flex gap-3 ">
                <img src={Sword} alt="sword" className="w-1/5 bg-white rounded-full" />
                <span className="text-white font-semibold ">Strahinja <br /> Vujinovic</span>
                
              </div>
              <div className="flex gap-3">
                <img src={Heart} alt=""  className="w-1/5"/>
                <span className="w-[10rem] h-[1rem] mt-2 bg-red-800"></span>
                
              </div>
              <div className="flex gap-3">
                <img src={Star} alt="" className="w-1/5 " />
                <span className="w-[3rem] h-[1rem] mt-2  bg-yellow-400"></span>
                
              </div>
            </div>
          </div>
          
        </div>
        <div className="w-[50%] h-[100%] float-right hidden sm:flex justify-center items-center ">
          <div className="grid grid-rows-3 h-[80%]   items-center">
          <h2 className="text-lg text-white flex justify-center font-bold">Battle Monsters With Friends</h2>
          <span className="text-sm text-white flex justify-center items-center ">Invinting friends to your Party will grand you an excslusive <br /> Quest  Scroll to battle the Basi-List togheter</span>
          <button className="hidden md:flex bg-primary-purple h-[2rem] justify-center items-center  w-[30%] ml-[8rem] text-white font-bold">Start a Party</button>
        </div>
        </div>
       
      </div>
    </div>
  );
}

export default Avatar;
