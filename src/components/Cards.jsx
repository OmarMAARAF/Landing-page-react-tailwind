import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

export default function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my4 rounded-lg hover:scale-105 duration-300">
          <img src={Single} className='w-20 mx-auto mt-[-3rem] bg-white' alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Single user</h2>
          <p className="text-center text-4xl font-bold">$129</p>
          <div className="text-center font-meduim">
            <p className=" border-b py-4 mt-8">500 GB storage</p>
            <p className=" border-b py-4">1 granted user</p>
            <p className=" border-b py-4">Send to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] rounded-md w-[200px] mx-auto my-6 px-6 py-3 text-black font-medium"> Strat trial</button>
        </div>

        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 mt-10 md:my-[-20px]">
          <img src={Double} className='w-20 mx-auto mt-[-3rem]' alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Siborderngle user</h2>
          <p className="text-center text-4xl font-bold">$129</p>
          <div className="text-center font-meduim">
            <p className=" border-b py-4 mt-8">500 GB storage</p>
            <p className=" border-b py-4">1 granted user</p>
            <p className=" border-b py-4">Send to 2 GB</p>
          </div>
          <button className="bg-black rounded-md w-[200px] mx-auto my-6 px-6 py-3 text-[#00df9a] font-medium"> Strat trial</button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my4 rounded-lg hover:scale-105 duration-300 mt-10 md:mt-0">
          <img src={Triple} className='w-20 mx-auto mt-[-3rem]' alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Siborderngle user</h2>
          <p className="text-center text-4xl font-bold">$129</p>
          <div className="text-center font-meduim">
            <p className=" border-b py-4 mt-8">500 GB storage</p>
            <p className=" border-b py-4">1 granted user</p>
            <p className=" border-b py-4">Send to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] rounded-md w-[200px] mx-auto my-6 px-6 py-3 text-black font-medium"> Strat trial</button>
        </div>
      </div>
    </div>
  );
}
