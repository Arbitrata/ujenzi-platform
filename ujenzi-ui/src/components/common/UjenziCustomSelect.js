import React from "react";

export default function UjenziCustomSelect({
  label,
  index,
  value,
  name,
  options,
  selectStyle,
  error,
}) {
  return (
    <div className="block mt-4">
      <label className=" text-ujenzi-darkgray font-medium text-left text-md block pb-1">
        {label}
      </label>
      <select
        name={name}
        id={name}
        className={`text-md block p-2 h-[50px] select-text rounded-[5px] w-[500px] 
          bg-ujenzi-white border border-ujenzi-blue  shadow-sm cursor-pointer focus:outline-none ${
            selectStyle ? selectStyle : ""
          }`}
      >
        <option key={index} value={value}>
          {options}
        </option>
      </select>
      {error && (
        <div role="alert" className="block text-[13px] font-medium text-[]">
          {error}
        </div>
      )}
    </div>
  );
}
