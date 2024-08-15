import React, { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight, HiOutlineSearch } from "react-icons/hi";

function Nav({ type }) {
  const [inputFocused, setInputFocused] = useState(false);

  useEffect(() => {
    // Focus on the input when the component mounts
    if (type !== "homepage") {
      inputRef.current.focus();
    }
  }, [type]);

  const handleFocus = () => {
    setInputFocused(true);
  };

  const handleBlur = () => {
    setInputFocused(false);
  };

  const inputRef = React.createRef();

  return (
    <div className="px-4 py-4 bg-nav_bg rounded-t-lg">
      <nav>
        <ul className="flex justify-between items-center">
          <div className="flex gap-x-[0.8rem] items-center">
            <li>
              <HiChevronLeft className="text-slate-300  text-[2rem]" />
            </li>
            <li>
              <HiChevronRight className="text-slate-300 text-[2rem]" />
            </li>
            {type !== "homepage" && (
              <div
                className={`border-2 rounded-full py-3 w-full md:w-[20rem] flex items-center px-2 gap-2 ${
                  inputFocused ? "border-white" : "border-gray-400"
                }`}
              >
                <HiOutlineSearch className="text-[1.5rem] text-white" />
                <input
                  ref={inputRef}
                  className="bg-transparent outline-none text-[1rem] w-full text-white"
                  placeholder="What do you want to listen to?"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
            )}
          </div>
          <div className="flex gap-x-5 px-6   items-center">
            <li>
              <button className=" hidden md:block text-slate-500 font-bold hover:text-white">
                Sign up
              </button>
            </li>
            <li className="hidden md:block bg-white px-7 py-3 rounded-full hover:scale-110">
              <button className="text-black font-medium">Log in</button>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
