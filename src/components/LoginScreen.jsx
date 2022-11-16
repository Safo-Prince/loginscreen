import React from "react";
import GrPlayFill from "@meronex/icons/gr/GrPlayFill";
import GrGoogle from "@meronex/icons/gr/GrGoogle";
import WavingEmoji from "./wavingemoji.png";
export default function LoginScreen() {
  return (
    <div className="flex grid-cols-2">
      <div className="flex justify-center items-center h-screen bg-green-500 w-6/12 ml-0">
        <div className="bg-blue-500 h-2/4 w-3/4 pt-16 rounded pl-16 text-white font-bold">
          <h1 className="text-7xl text-left ">
            <span>
              <GrPlayFill className="inline text-6xl  mr-4 text-green-500 pb-3 " />
            </span>
            Digital
            <span className=" block"> platform</span>
            <span className=" block"> for distance</span>
            <span className="block text-black "> Learning.</span>
          </h1>
          <h2 className="text-2xl text-left mt-8 max-w-sm text-3xl">
            You will never know everything But you will know more.
          </h2>
        </div>
      </div>
      <div className="  flex justify-center items-center w-2/4 pt-12">
        <div className="  h-2/4 w-3/4">
          <h1 className="text-left text-3xl font-bold ">
            Hey,hello <img alt="" src={WavingEmoji} width="30" className="inline"/>
          </h1>
          <h2 className="text-left mt-3 mb-10 text-gray-500">
            Enter the information you entered while registering
          </h2>
          <label className="block text-left mb-2"> Email</label>
          <input className="h-16 w-4/6 border-2 rounded-lg block mb-6" />
          <label className="block text-left mb-2"> Password</label>
          <input className="h-16 w-4/6 border-2 rounded-lg block " />
          <div className="flex justify-between mt-4">
            <div>
              <input type="checkbox" />
              <label className="ml-2 pb-2"> Remember me</label>
            </div>
            <span className="mr-72 cursor-pointer"> Forgot Password?</span>
          </div>
          <button className="w-4/6 h-16 bg-blue-500 rounded-lg text-white text-lg mr-72 mt-8 block ">
            Login
          </button>

          <div className="flex justify-between mt-8">
            <div className=" border h-0  divide-y-4 w-3/12 mt-3"> </div>{" "}
            <p className="text-gray-500"> or</p>
            <div className=" border  h-0 w-3/12 mr-72 mt-3"></div>
          </div>
          <button className="w-4/6 h-16 border-2 rounded-lg border-zinc-200 text-lg mr-72 mt-8 block">
            <GrGoogle className="inline text-2xl mr-4" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
