import React, { useState } from "react";
import { Input } from "../../component/İnput/input";
import googleIcon from "./googleIcon.svg";
import picture from "./Element.svg";
import { Link } from "react-router-dom";

export function Login() {
  const [formData, setFormData] = useState({
    
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
   
    email: '',
    password: '',
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleValidation = () => {
    const newErrors = {
     
      email: validateEmail(formData.email) ? '' : '*Invalid email format',
      password: validatePassword(formData.password)
        ? ''
        : '*Password must be at least 8 characters, with 1 uppercase letter and 1 number',
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      alert("Form submitted successfully!");
      // Proceed with form submission, API call, etc.
    }
  };

  const [selectedButton, setSelectedButton] = useState('jobSeeker');

  const handleClick = (buttonType) => {
    setSelectedButton(buttonType);
  };

  return (
    <div className="min-h-screen flex w-full p-2">
      <div className="hidden sm:block sm:min-h-screen">
        <img src={picture} className="sm:h-full sm:bg-cover sm:w-[500px] xl:w-[640px]" alt="Background" />
      </div>
      <div className="flex flex-col flex-1 items-center sm:mt-[58px] mt-3">
        <div className="flex flex-row">
        <button
        onClick={() => handleClick('jobSeeker')}
        className={`w-[115px] h-[40px] font-medium ${
          selectedButton === 'jobSeeker' ? 'bg-[#CCCCF5] text-[#4640DE]' : 'bg-white'
        }`}
      >
        Job Seeker
      </button>
      <button
        onClick={() => handleClick('company')}
        className={`w-[115px] h-[40px] font-medium ${
          selectedButton === 'company' ? 'bg-[#CCCCF5] text-[#4640DE]' : 'bg-white'
        }`}
      >
        Company
      </button>
        </div>
        <div>
          <h1 className="text-[#202430] text-4xl sm:mt-6 font-semibold">Welcome Back</h1>
        </div>
        <div className="mt-6">
          <button className="text-base text-[#4640DE] w-[408px] h-[50px] border-2 border-[#A8ADB7] font-bold flex gap-3 justify-center items-center hover:bg-[#CCCCF5] hover:text-white">
            <img src={googleIcon} alt="Google Icon" />
            Login with Google
          </button>
        </div>
        <div className="flex items-center gap-4 mt-6">
          <hr className="flex-1 w-[109px] border" />
          <h4>Or login with email</h4>
          <hr className="flex-1 w-[109px] border" />
        </div>
        <div className="mt-6 flex flex-col gap-6">

          <Input
            name="Email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="text-red-500 sm:w-[408px]">{errors.email}</p>}

          <Input
            name="Password"
            placeholder="Enter password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <p className="text-red-500 sm:w-[408px]">{errors.password}</p>}
        </div>
        <button onClick={handleSubmit} className="w-[408px] h-[50px] bg-[#4640DE] mt-6 text-white">
          Continue
        </button>
        <div className="flex gap-2 mt-6">
          <h4 className="text-[#202430]">Don’t have an account?</h4>
          <Link to="/SignUp" className="text-[#4640DE] font-semibold">Sign Up</Link>
        </div>
        
      </div>
    </div>
  );
}

export default Login;
