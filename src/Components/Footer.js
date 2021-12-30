import React from "react";

const Footer = () => {
  return (
    <div className="mt-5">
      <div className="flex p-3 text-black bg-slate-200 text-left">
        <div className="w-1/2">
          <p className="text-black text-sm">
            Get the latest news, promotions and offers
          </p>
          <h2 className="text-black text-lg font-bold">Subscribre to our newsletter</h2>
        </div>
        <label className="text-black font-bold mr-3">Email:</label>
        <input type="email" className="border-2 h-7 w-full border-green-500" />
      </div>
      <div className=" my-2 font-bold p-2 mr-4 items-center text-white text-xl text-center ">
        <a href="$#" className="p-2 mr-4 inline-flex items-center text-black">
          {" "}
          <span className="font-bold  text-green-500">Quick</span>ToGo
        </a>
      </div>
    </div>
  );
};

export default Footer;
