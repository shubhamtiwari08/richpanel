import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../Redux/actions";
import { useNavigate } from "react-router";

function LoginForm() {

    const initialState = {
        email:"",
        password:"",
    }

    const [userData,setUserData] = useState(initialState)

    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state)
    const navigate = useNavigate()

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        logIn(dispatch, userData);
        setUserData(initialState);
       
      };

      useEffect(()=>{
        if(isLoggedIn.loggedIn){
            navigate('/connect-facebook')
        }
      },[isLoggedIn.loggedIn])

  return (
    <form className="w-80 h-max py-7 bg-white flex flex-col items-center justify-center rounded-md">
      <h2 className="font-semibold mb-4">Login to your account</h2>
      <div>
        <label htmlFor="email" className="text-[14px]">Email:</label> <br />
        <input type="text" name="email" id="email" className="border-2 rounded-md w-64 p-1.5" placeholder="manoj@gmail.com" value={userData.email} onChange={handleInput}  />
      </div>
      <div>
        <label htmlFor="password" className="text-[14px]">Password:</label> <br />
        <input type="text" name="password" id="password"  className="border-2 rounded-md w-64 p-1.5" placeholder="password" value={userData.password} onChange={handleInput}  />
      </div>
       <button className="bg-[#1d4e91] p-1.5 w-64 text-white mt-4 rounded-sm" onClick={handleSubmit}> Login In</button>
       <p className=" text-[12px] mt-6"> 
        New To MyApp?{" "}
        <span className="text-blue-300 font-bold">Sign Up </span>
      </p>
    </form>
  );
}

export default LoginForm;
