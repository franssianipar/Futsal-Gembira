import React from "react";
import futsal from "../image/futsal.png";
import "../App.css";

export default function Login() {
  return (
    <>
      <div
        className="bg-cover px-52 py-44  bg-center ..."
        style={{ backgroundImage: `url(${futsal})` }}
      >
        <div className=" interBold text-center text-white text-9xl font-sans">
          Futsal Gembira
        </div>
        <div className=" interSemibold text-center  text-white text-3xl mt-10">
          Masuk Admin
        </div>
        <div className="text-white text-center px-96">
          <div className=" interReguler text-2xl mt-10 text-left ml-36">
            Email
          </div>
          <input
            className=" interReguler text-2xl mt-4 p-2 border-1  w-7/12 outline outline-white outline-1 bg-transparent rounded-lg  "
            type="email"
            placeholder="Enter your Email"
          ></input>
          <div className="interReguler text-2xl mt-10 text-left ml-36 ">
            Password
          </div>
          <input
            className=" interReguler text-2xl bg-transparent mt-4 p-2  w-7/12 border-1 outline outline-white outline-1 rounded-lg "
            type="password"
            placeholder="Enter your Password"
          ></input>
          <div className="mt-20 text-3xl text-black ">
            <button className=" interSemibold bg-white hover:bg-white px-10 rounded-lg w-7/12 h-16">
              Masuk
            </button>
          </div>
        </div>
        <div className="  text-white  text-2xl flex relative">
          <div className="  interReguler text-left absolute mt-20 w-4/12 text-justify">
            "Semangat adalah modal utama dalam meraih kesuksesan"
          </div>
        </div>
      </div>
    </>
  );
}
