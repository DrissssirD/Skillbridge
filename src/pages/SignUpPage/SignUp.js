import React, { useState } from "react";
import { Input } from "../../component/İnput/input";
import googleIcon from "./googleIcon.svg";
import picture from './Element.svg';
import { Link } from "react-router-dom";

export function SignUp() {

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });


  const handleChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };



  const [focus, setFocus] = useState("");
  const options = [
    { label: "Job Seeker", value: "JobSeeker" },
    { label: "Company", value: "Company" },
  ];

  const inputData = [
    { name: "Full name", placeholder: "Enter your full name" },
    { name: "Email Address", placeholder: "Enter email address" },
    { name: "Password", placeholder: "Enter password" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    // Simulated authentication (replace with actual logic if needed)
    if (formData.email === "test@example.com" && formData.password === "12345") {
      setError("");
      alert("Authentication successful!");
    } else {
      setError("Invalid email or password.");
    }
  };

  

  return (
    <div className="min-h-screen flex w-full">
      <div className="hidden sm:block">
        <img src={picture} />
      </div>
      <div className="flex flex-col flex-1 items-center  ">
      <div className="flex sm:mt-[58px]">
        {options.map((option) => (
          <button
            key={option.value} 
            onClick={() => setFocus(option.value)}
            className={`text-[#4640DE] text-base h-[40px] w-[115px] ${
              focus === option.value ? "bg-[#CCCCF5]" : ""
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div>
        <h1 className="text-[#202430] text-4xl sm:mt-6">Get more opportunities</h1>
      </div>
      <div className="sm:mt-6">
        <button className="text-base text-[#4640DE] sm:w-[408px] h-[50px] border-2 border-[#A8ADB7] font-bold flex gap-3 justify-center items-center hover:bg-[#CCCCF5] hover:text-white">
          <img src={googleIcon} />
          Sign Up with Google
        </button>
      </div>
      <div className="flex items-center gap-4 sm:mt-6">
        <hr className="flex-1 w-[109px] border"/>
        <h4>Or sign up with email</h4>
        <hr  className="flex-1 w-[109px] border"/>
        
      </div>

      <div className="sm:mt-6 flex flex-col gap-6 ">
        {inputData.map((input) => (
          <Input
            key={input.name}
            name={input.name}
            placeholder={input.placeholder}
            value={formData[input.name.toLowerCase().replace(" ", "")]}
          onChange={(value) => handleChange(input.name.toLowerCase().replace(" ", ""), value)}
            
          />
          
        ))}
        {error && <p className="text-red-500">{error}</p>}
      </div>

      <button onClick={handleSubmit} className="sm:w-[408px] sm:h-[50px] bg-[#4640DE] mt-6 text-white">Continue</button>

      <div className="flex gap-2 mt-6">
        <h4 className="text-[#202430]">Already have an account?</h4>
        <Link className="text-[#4640DE] font-semibold">Login</Link>
      </div>
      <div className="sm:w-[408px] h-[44px] mt-6">
        <h4 className="text-[#A8ADB7]">
        By clicking 'Continue', you acknowledge that you have read and accept the <a className="text-[#4640DE]">Terms of Service</a>  and <a className="text-[#4640DE]">Privacy Policy.</a> 
        </h4>
      </div>

      </div>
      
    </div>
  );
}
