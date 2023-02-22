import React from "react";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import Diamond from "../assets/diamond.svg";
import Coin from "../assets/coin.svg";

const Nav = () => {
  const [isRotated, setIsRotated] = useState(false);
  const handleRotation = () => {
    setIsRotated(!isRotated);
  }; //FUNCTION FOR ROTATION
  const rotationStyle = isRotated ? "rotate-180 " : "";
  //IF CLICKED ROTATE 180

  const [inventory, setInventory] = useState(false);
  const handleInv = () => {
    setInventory(!inventory);
  };

  //INVENTORY SPAN

  const InventoryRotate = () => {
    setIsRotated(!isRotated);
    setInventory(!inventory);
  };

  // SPANIN INVENTORY AND ROTATING BTN

  const [shops, setShop] = useState(false);
  const handleShop = () => {
    setShop(!shops);
  };

  const ShopRotate = () => {
    setIsRotated(!isRotated);
    setShop(!shops);
  };

  const [guilds, setGuilds] = useState(false);
  const handleGuilds = () => {
    setGuilds(!guilds);
  };

  const GuildsRotate = () => {
    setGuilds(!guilds);
    setIsRotated(!isRotated);
  };

  const [challenges, setChallenges] = useState(false);
  const handleChallenges = () => {
    setChallenges(!challenges);
  };

  const ChallengesRotate = () => {
    setChallenges(!challenges);
    setIsRotated(!isRotated);
  };

  const [help, setHelp] = useState(false);
  const handleHelp = () => {
    setHelp(!help);
  };
  const HelpRotate = () => {
    setHelp(!help);
    setIsRotated(!isRotated);
  };

  return (
    <div className="grid grid-cols w-screen  bg-primary-purple justify-center gap-3">
      <div className="flex justify-center gap-3 items-center bg-purply h-[2.3rem]">
        <img src={Diamond} alt="diamond" className="w-[1.5rem]" />
        <span className="text-white font-bold">0</span>
        <img src={Coin} alt="coin" className="w-[1.5rem]" />
        <span className="text-white font-bold">0</span>
      </div>
      <span className="text-sm font-bold text-white flex justify-center items-center">
        Tasks{" "}
      </span>
      <hr className=" opacity-10" />
      <span
        className={`text-sm font-bold text-white flex justify-center w-screen items-center`}
      >
        Inventory{" "}
        <AiOutlineDown
          className={`absolute right-4 ${rotationStyle} `}
          onClick={InventoryRotate}
          size={"1.2rem"}
        />
      </span>
      <hr className=" opacity-10" />
      {inventory ? (
        <div className="grid grid-rows-3 w-screen justify-center items-center gap-5 pl-5  bg-primary2-purple ">
          <span className="text-white font-semibold ">Items</span>

          <span className="text-white font-semibold">Equipment</span>

          <span className="text-white font-semibold">Stable</span>
        </div>
      ) : (
        ""
      )}
      <span className="text-sm font-bold text-white flex justify-center items-center ">
        Shops{" "}
        <AiOutlineDown
          className={`absolute right-4 ${rotationStyle} `}
          onClick={ShopRotate}
          size={"1.2rem"}
        />
      </span>
      <hr className=" opacity-10" />
      {shops ? (
        <div className="grid grid-rows-4 w-screen justify-center items-center  pl-5  bg-primary2-purple gap-5">
          <span className="text-white font-semibold">Market</span>
          <span className="text-white font-semibold">Quests</span>
          <span className="text-white font-semibold">Seasonal Shop</span>
          <span className="text-white font-semibold">Time Travelers</span>
        </div>
      ) : (
        ""
      )}
      <span className="text-sm font-bold text-white flex justify-center items-center">
        Party
      </span>
      <hr className=" opacity-10" />
      <span className="text-sm font-bold text-white flex justify-center items-center">
        Guilds{" "}
        <AiOutlineDown
          className={`absolute right-4 ${rotationStyle} `}
          onClick={GuildsRotate}
          size={"1.2rem"}
        />
      </span>{" "}
      <hr className=" opacity-10" />
      {guilds ? (
        <div className="grid grid-rows-3 w-screen justify-center items-center gap-5 pl-5  bg-primary2-purple ">
          <span className="text-white font-semibold ">Tavern Chat</span>

          <span className="text-white font-semibold">My Guilds</span>
          <span className="text-white font-semibold">Discover Guilds</span>
        </div>
      ) : (
        ""
      )}
      <span className="text-sm font-bold text-white flex justify-center items-center">
        Group
      </span>
      <hr className=" opacity-10" />
      <span className="text-sm font-bold text-white flex justify-center items-center">
        Challenges{" "}
        <AiOutlineDown
          className={`absolute right-4 ${rotationStyle} `}
          onClick={ChallengesRotate}
          size={"1.2rem"}
        />
      </span>{" "}
      <hr className=" opacity-10" />
      {challenges ? (
        <div className="grid grid-rows-2 w-screen justify-center items-center gap-5 pl-5  bg-primary2-purple ">
          <span className="text-white font-semibold">My Guilds</span>
          <span className="text-white font-semibold">Discover Guilds</span>
        </div>
      ) : (
        ""
      )}
      <span className="text-sm font-bold text-white flex justify-center items-center ">
        Help{" "}
        <AiOutlineDown
          className={`absolute right-4 ${rotationStyle} `}
          onClick={HelpRotate}
          size={"1.2rem"}
        />{" "}
      </span>
      <hr className=" opacity-10" />
      {help ? (
        <div className=" grid grid-rows-7 w-screen justify-center items-center gap-5 pl-5  bg-primary2-purple ">
          <span className="text-white font-semibold">FAQ</span>
          <span className="text-white font-semibold">
            Ovreview for New Users
          </span>
          <span className="text-white font-semibold">Report a Bug</span>
          <span className="text-white font-semibold">Ask a Question</span>
          <span className="text-white font-semibold">Request a Feature</span>
          <span className="text-white font-semibold">Contributing</span>
          <span className="text-white font-semibold">Wiki</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Nav;
