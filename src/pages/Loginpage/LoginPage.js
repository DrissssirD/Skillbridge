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

  const [errors, setErrors] = useState({});
  const [selectedButton, setSelectedButton] = useState('jobSeeker');

  // Validation functions
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

  // Handle input changes for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Validate form and set errors
  const handleValidation = () => {
    const newErrors = {
      email: formData.email
        ? validateEmail(formData.email)
          ? ''
          : '*Invalid email format'
        : '*Email is required', // Check if email is empty
      password: formData.password
        ? validatePassword(formData.password)
          ? ''
          : '*Password must be at least 8 characters, with 1 uppercase letter and 1 number'
        : '*Password is required', // Check if password is empty
    };
  
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error); // Return true if there are no errors
  };
  

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      alert("Form submitted successfully!");
      // Add your API call or database submission here
    }
  };

  return (
    <div className="min-h-screen flex w-full p-2">
      {/* Left-side image for larger screens */}
      <div className="hidden sm:block sm:min-h-screen">
        <img src={picture} className="sm:h-full sm:bg-cover sm:w-[500px] xl:w-[640px]" alt="Background" />
      </div>
      
      {/* Right-side login form */}
      <div className="flex flex-col flex-1 items-center sm:mt-[58px] justify-center">
        {/* Job Seeker and Company selection buttons */}
        <div className="flex flex-row">
          {['jobSeeker', 'company'].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedButton(type)}
              className={`w-[115px] h-[40px] font-medium ${selectedButton === type ? 'bg-[#CCCCF5] text-[#4640DE]' : 'bg-white'}`}
            >
              {type === 'jobSeeker' ? 'Job Seeker' : 'Company'}
            </button>
          ))}
        </div>

        <h1 className="text-[#202430] text-4xl mt-6 font-semibold">Welcome Back</h1>
        
        {/* Google Login button */}
        <button className="text-base text-[#4640DE] w-[408px] h-[50px] border-2 border-[#A8ADB7] font-bold flex gap-3 justify-center items-center hover:bg-[#CCCCF5] hover:text-white mt-6">
          <img src={googleIcon} alt="Google Icon" />
          Login with Google
        </button>

        {/* Divider with text */}
        <div className="flex items-center gap-4 mt-6">
          <hr className="flex-1 w-[109px] border" />
          <h4>Or login with email</h4>
          <hr className="flex-1 w-[109px] border" />
        </div>

        {/* Form fields */}
        <div className="mt-6 flex flex-col gap-6">
          {['email', 'password'].map((field) => (
            <div key={field}>
              <Input
                name={field.charAt(0).toUpperCase() + field.slice(1)}
                placeholder={`Enter ${field}`}
                value={formData[field]}
                onChange={handleInputChange}
              />
              {errors[field] && <p className="text-red-500 sm:w-[408px] mt-2">{errors[field]}</p>}
            </div>
          ))}
        </div>

        {/* Submit button */}
        <button onClick={handleSubmit} className="w-[408px] h-[50px] bg-[#4640DE] mt-6 text-white">
          Continue
        </button>

        {/* Sign up link */}
        <div className="flex gap-2 mt-6">
          <h4 className="text-[#202430]">Don’t have an account?</h4>
          <Link to="/SignUp" className="text-[#4640DE] font-semibold">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
