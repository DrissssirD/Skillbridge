import React, { useState } from "react";
import { Input } from "../../component/İnput/input";
import googleIcon from "./googleIcon.svg";
import picture from "./Element.svg";
import { Link } from "react-router-dom";

export function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleValidation = () => {
    const newErrors = {
      name: formData.name ? '' : '*Name is required',
      email: formData.email
        ? validateEmail(formData.email)
          ? ''
          : '*Invalid email format'
        : '*Email is required',  // Added check for empty email
      password: formData.password
        ? validatePassword(formData.password)
          ? ''
          : '*Password must be at least 8 characters, with 1 uppercase letter and 1 number'
        : '*Password is required', // Added check for empty password
    };
  
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);  // Return true if there are no errors
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      alert("Form submitted successfully!");
      // Proceed with form submission, API call, etc.
    }
  };

  const [selectedButton, setSelectedButton] = useState('jobSeeker');

  const handleClick = (buttonType) => setSelectedButton(buttonType);

  return (
    <div className="min-h-screen flex w-full p-2">
      {/* Left-side image for larger screens */}
      <div className="hidden sm:block sm:min-h-screen">
        <img src={picture} className="sm:h-full sm:bg-cover sm:w-[500px] xl:w-[640px]" alt="Background" />
      </div>

      {/* Right-side sign up form */}
      <div className="flex flex-col flex-1 items-center sm:mt-[58px]  justify-center">
        {/* Job Seeker and Company selection buttons */}
        <div className="flex flex-row">
          {['jobSeeker', 'company'].map((type) => (
            <button
              key={type}
              onClick={() => handleClick(type)}
              className={`w-[115px] h-[40px] font-medium ${selectedButton === type ? 'bg-[#CCCCF5] text-[#4640DE]' : 'bg-white'}`}
            >
              {type === 'jobSeeker' ? 'Job Seeker' : 'Company'}
            </button>
          ))}
        </div>

        {/* Heading */}
        <h1 className="text-[#202430] text-4xl mt-6 font-semibold">Get more opportunities</h1>

        {/* Google SignUp button */}
        <button className="text-base w-full text-[#4640DE] sm:w-[408px] h-[50px] border-2 border-[#A8ADB7] font-bold flex gap-3 justify-center items-center hover:bg-[#CCCCF5] hover:text-white mt-6">
          <img src={googleIcon} alt="Google Icon" />
          Sign Up with Google
        </button>

        {/* Divider with text */}
        <div className="flex items-center gap-4 mt-6">
          <hr className="flex-1 w-[109px] border" />
          <h4>Or Sign Up with email</h4>
          <hr className="flex-1 w-[109px] border" />
        </div>

        {/* Form fields */}
        <div className="mt-6 flex flex-col gap-6 w-full">
          {['name', 'email', 'password'].map((field) => (
            <div key={field}>
              <Input
                name={field.charAt(0).toUpperCase() + field.slice(1)}
                placeholder={`Enter your ${field}`}
                value={formData[field]}
                onChange={handleInputChange}
              />
              {errors[field] && <p className="text-red-500 sm:w-[408px] mt-2">{errors[field]}</p>}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button onClick={handleSubmit} className="sm:w-[408px] h-[50px] bg-[#4640DE] mt-6 text-white w-full">
          Continue
        </button>

        {/* Login Link */}
        <div className="flex gap-2 mt-6">
          <h4 className="text-[#202430]">Already have an account?</h4>
          <Link to="/Login" className="text-[#4640DE] font-semibold">Login</Link>
        </div>

        {/* Terms of Service */}
        <div className="sm:w-[408px] h-[44px] mt-6">
          <h4 className="text-[#A8ADB7]">
            By clicking 'Continue', you acknowledge that you have read and accept the{" "}
            <a href="#" className="text-[#4640DE]">Terms of Service</a> and{" "}
            <a href="#" className="text-[#4640DE]">Privacy Policy</a>.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
