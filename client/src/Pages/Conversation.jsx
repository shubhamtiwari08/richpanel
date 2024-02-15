import React from "react";
import Sidebar from "../Components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHamburger,
  faMobile,
  faRefresh,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import MessagesBox from "../Components/MessagesBox";

function Conversation() {
  return (
    <div className=" flex justify-between">
      <Sidebar />
      <div className=" w-80 border-2">
        <div className="flex items-center justify-between w-full px-1 py-2  border-b-2">
          <FontAwesomeIcon icon={faHamburger} />
          <h2 className="text-[20px] font-bold">Conversations</h2>
          <FontAwesomeIcon icon={faRefresh} />
        </div>
        <MessagesBox />
        <MessagesBox />
        <MessagesBox />
      </div>
      {/* chatbox */}
      <div>
        <div className="flex items-center justify-between px-2 py-2  border-b-2 w-[55rem] ">
          <h1 className="text-xl font-bold">Amit RG</h1>
        </div>
      </div>
      {/* profileinfo */}
      <div className="flex flex-col items-center border-2 w-64 bg-[#eff2f7] border-b-2 ">
        <div className="flex flex-col items-center w-full bg-white py-10 mb-3">
          <div className="w-20 h-20 rounded-full overflow-hidden flex justify-center items-center">
            <img
              src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="profile-img"
              className="w-full"
            />
          </div>
          <div>
            <p>Amit RG</p>
            <p>online</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <button className="border-2 rounded-md px-2">
              {" "}
              <FontAwesomeIcon icon={faMobile} />
              Call
            </button>
            <button className="border-2 rounded-md px-2">
              <FontAwesomeIcon icon={faUser} /> Profile
            </button>
          </div>
          
        </div>
        <div className="bg-white w-[90%] flex flex-col items-center py-4 px-2 rounded-md">
            <p>Customer Details</p>
            <div className="flex gap-10 mt-2 text-slate-400 text-[12px]">
              <div className="flex flex-col items-start">
                <p>Email:</p>
                <p>FirstName:</p>
                <p>Last Name:</p>
              </div>
              <div className="flex flex-col items-end text-black">
                <p>Amit Rg</p>
                <p>Amit</p>
                <p>Rg</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Conversation;
