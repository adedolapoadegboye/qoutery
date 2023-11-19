import React from "react";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";


const Quoter = () => {
  return (
    <div className="bg-blue-400 min-h-screen min-w-full">
      <div
        id="quote-box"
        className="bg-white max-w-[640px] md:max-w-[1000px] max-h-[1200px] mx-auto text-blue-400"
      >
        <div
          className="font-bold font-serif subpixel-antialiased text-xl lg:text-4xl text-center py-4
 "
        >
        <BiSolidQuoteSingleLeft size={40} className="mx-4"/>
          <h1 id="text">Text</h1>
        </div>
        <div
          className="text-bold font-serif subpixel-antialiased text-sm lg:text-2xl text-right px-4 py-4
 "
        >
          <h1 className="italic" id="author">
            - by <span>Author</span>
          </h1>
        </div>
        <div
          className="text-bold font-serif subpixel-antialiased flex justify-center text-center my-3.5
 "
        >
          <button className="cursor-pointer bg-blue-400 hover:bg-blue-300 text-white px-4 py-3.5 mx-4 my-4 border rounded-xl text-l lg:text-xl flex" href="#" id="tweet-quote">
            <h1>Post on</h1>
            <FaXTwitter size={20} className="my-1 mx-1"/>
          </button>
          <button id="new-quote" className="cursor-pointer hover:bg-blue-300 bg-blue-400 text-white px-4 py-3.5 mx-4 my-4 border rounded-xl text-lcursor-pointer ">Get new quote</button>
        </div>
      </div>
      <div>
        <h1 className="text-white font-sans text-center">by ade</h1>
      </div>
    </div>

  );
};

export default Quoter;
