import React from "react";
import { FiArrowDown } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function UjenziAvater({
  imgStyling,
  imgSrc,
  dropdownPresent,
  alt,
}) {
  return (
    <div className="flex items-center">
      <div
        className={`h-[60px] w-[60px] rounded-full bg-ujenzi-white ${
          imgStyling ? imgStyling : ""
        }`}
      >
        <img
          src={imgSrc}
          alt={alt}
          className="h-[100%] w-[100%] object-cover rounded-full border border-ujenzi-blue"
        />
      </div>
      {dropdownPresent && (
        <Link to={"/"} className={`ml-1`}>
          <FiArrowDown />
        </Link>
      )}
    </div>
  );
}
