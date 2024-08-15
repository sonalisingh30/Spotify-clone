import React from "react";

function SignupBar() {
  return (
    <div className=" bg-gradient-to-r from-purple-500 to-pink-500 m-2 flex flex-col md:flex-row justify-between px-4 py-2">
      <div className="pt-2 ">
        <p className="font-medium text-white  ">Previwed of Spotify</p>
        <p className="text-white ">
          Sign up to get unlimited songs and pocasts with occasional ads. No
          credit card needed
        </p>
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-white px-7 py-2 rounded-full hover:scale-110 flex justify-center items-center font-bold">
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default SignupBar;
