import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { signUp } from "../Redux/actions";

function SingupForm() {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };


  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state)

  console.log(isLoggedIn.signedUp)
  

    const Navigate = useNavigate();

  

  const [userData, setUserData] = useState(initialState);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(dispatch, userData);
    setUserData(initialState);
    
  };

  useEffect(()=>{
    if(isLoggedIn.signedUp){
        Navigate('/login')
    }
  },[isLoggedIn.signedUp])

  return (
    <form className="w-80 h-max py-7 bg-white flex flex-col items-center justify-center rounded-md">
      <h2 className="font-semibold mb-4">Create Account</h2>
      <div>
        <label htmlFor="name" className="text-[14px]">
          Name:
        </label>{" "}
        <br />
        <input
          type="text"
          name="name"
          id="name"
          className="border-2 rounded-md w-64 p-1.5"
          placeholder="Manoj kumar"
          onChange={handleInput}
          value={userData.name}
        />
      </div>
      <div>
        <label htmlFor="email" className="text-[14px]">
          Email:
        </label>{" "}
        <br />
        <input
          type="text"
          name="email"
          id="email"
          className="border-2 rounded-md w-64 p-1.5"
          placeholder="manoj@gmail.com"
          onChange={handleInput}
          value={userData.email}
        />
      </div>
      <div>
        <label htmlFor="password" className="text-[14px]">
          Password:
        </label>{" "}
        <br />
        <input
          type="text"
          name="password"
          id="password"
          className="border-2 rounded-md w-64 p-1.5"
          placeholder="password"
          onChange={handleInput}
          value={userData.password}
        />
      </div>

      <button
        className="bg-[#1d4e91] p-1.5 w-64 text-white mt-4 rounded-sm"
        onClick={handleSubmit}
      >
        {" "}
        Sign Up{" "}
      </button>
      <p className=" text-[12px] mt-6">
        Already signed Up?{" "}
        <span className="text-blue-300 font-bold">Login </span>
      </p>
    </form>
  );
}

export default SingupForm;
