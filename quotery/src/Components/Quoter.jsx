import React from "react";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { colors } from "../Data/Colors";
import { quotes } from "../Data/Quotes";

const Quoter = () => {

  const randomOne = Math.floor(Math.random() * colors.length);
  const randomTwo = Math.floor(Math.random() * quotes.length);

  const defaultColor = colors[randomOne]["paletteName"];
  const defaultQuote = quotes[randomTwo]["quote"];
  const defaultAuthor = quotes[randomTwo]["author"];

  const [nextColor, setColor] = useState(defaultColor);
  const [nextQuote, setQuote] = useState(defaultQuote);
  const [nextAuthor, setAuthor] = useState(defaultAuthor);


  function handleClick() {
    setColor(colors[randomOne]["paletteName"]);
    setQuote(quotes[randomTwo]["quote"]);
    setAuthor(quotes[randomTwo]["author"]);
  }

  console.log(nextColor, nextQuote, nextAuthor, randomOne, randomTwo)

  return (
    <div className="bg-{nextColor}-400 flex items-center justify-center h-screen w-screen">
      <div
        id="quote-box"
        className="bg-[nextColor] min-w-[200px] md:min-w-[600px] text-[nextColor]-400"
      >
        <div
          className="font-serif subpixel-antialiased text-xl md:text-2xl text-center py-4
 "
        >
          <BiSolidQuoteSingleLeft size={40} className="mx-2 lg:mx-15" />
          <h1 className="mx-4 lg:mx-20" id="text">{nextQuote}</h1>
        </div>
        <div
          className="text-bold font-serif subpixel-antialiased text-sm md:text-2xl text-right px-4 py-4
 "
        >
          <h1 className="italic mx-4 lg:mx-20" id="author">
            - by <span>{nextAuthor}</span>
          </h1>
        </div>
        <div
          className="text-bold font-serif subpixel-antialiased flex justify-center text-center my-3.5
 "
        >
          <button
            className="cursor-pointer bg-{nextColor}-400 hidden hover:bg-[nextColor]-300 text-black px-4 py-3.5 mx-4 my-4 border rounded-xl text-l md:text-xl flex"
            href="#"
            id="tweet-quote"
          >
            {/*  <h1>Post on</h1> */}
            <a href="twitter.com/intent/tweet?text=Hello%20World">
            <FaXTwitter size={20} className="my-1 mx-1" />
            </a>
          </button>
          <button
            id="new-quote"
            className="cursor-pointer hover:bg-blue-300 bg-[nextColor]-400 text-black px-4 py-3.5 mx-4 my-4 border rounded-xl text-sm md:text-xl "
            onClick={()=>handleClick()}>
            Get new quote
          </button>
        </div>
      </div>
      {/*       <div>
        <h1 className="text-black font-sans text-center">by ade</h1>
      </div> */}
    </div>
  );
};

export default Quoter;
