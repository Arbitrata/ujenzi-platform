import React from "react";

export default function UjenziSearch({
  iconPresent,
  placeholder,
  searchStyle,
}) {
  return (
    <div className="search">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4">
          {iconPresent}
        </span>
        <input
          className={`bg-ujenzi-white placeholder:font-semibold text-ujenzi-darkgray font-medium placeholder:text-md ml-3 border border-ujenzi-blue rounded-[5px] text-[16px] shadow-sm placeholder-slate-400 py-2 pl-10 pr-4 focus:outline-none focus:border-ujenzi-blue focus:ring-1 focus:ring-ujenzi-blue ${
            searchStyle ? searchStyle : ""
          }`}
          placeholder={placeholder}
          type="text"
        />
      </div>
    </div>
  );
}
