import React from "react";

export function Input({ name, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col ">
      <h3 className="text-[#515B6F] text-base font-semibold">{name}</h3>
      <input
        className="border-2 border-[#A8ADB7] w-[408px] h-[50px] mt-1 sm:px-4 sm:py-3 p-2"
        placeholder={placeholder}
        value={value}
        name={name.toLowerCase()}  // Adding `name` attribute for form handling
        onChange={onChange}        // Pass full event to parent
      />
    </div>
  );
}
