import React from "react";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";


const Quoter = () => {
  return (
    <div className="bg-blue-400 flex items-center justify-center h-screen w-screen">
      <div
        id="quote-box"
        className="bg-white min-w-[200px] md:min-w-[600px] text-blue-400"
      >
        <div
          className="font-bold font-serif subpixel-antialiased text-xl md:text-4xl text-center py-4
 "
        >
        <BiSolidQuoteSingleLeft size={40} className="mx-2"/>
          <h1 id="text">Text</h1>
        </div>
        <div
          className="text-bold font-serif subpixel-antialiased text-sm md:text-2xl text-right px-4 py-4
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
          <button className="cursor-pointer bg-blue-400 hover:bg-blue-300 text-white px-4 py-3.5 mx-4 my-4 border rounded-xl text-l md:text-xl flex" href="#" id="tweet-quote">
           {/*  <h1>Post on</h1> */}
            <FaXTwitter size={20} className="my-1 mx-1"/>
          </button>
          <button id="new-quote" className="cursor-pointer hover:bg-blue-300 bg-blue-400 text-white px-4 py-3.5 mx-4 my-4 border rounded-xl text-sm md:text-xl ">Get new quote</button>
        </div>
      </div>
{/*       <div>
        <h1 className="text-white font-sans text-center">by ade</h1>
      </div> */}
    </div>

  );
};

export default Quoter;
