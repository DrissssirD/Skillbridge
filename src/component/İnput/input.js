import React from "react";

export function Input({ name, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col">
      <h3 className="text-[#515B6F] text-base font-semibold">{name}</h3>
      <input
        className="border-2 border-[#A8ADB7] sm:w-[408px] sm:h-[50px] mt-1 sm:px-4 sm:py-3"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
