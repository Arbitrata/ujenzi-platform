import React from "react";
import { Link } from "react-router-dom";

export const UjenziNavlink = ({
  navLinkStyle,
  linkStyle,
  to,
  icon,
  linkTitleStyle,
  linkTitle,
}) => {
  return (
    <div
      className={`text-ujenzi-darkgrey h-[50px] ml-5 hover:text-ujenzi-blue w-fit px-6 py-2 rounded-[5px] hover:bg-ujenzi-white mr-[15px] mt-[10px] grid place-content-center ${
        navLinkStyle ? navLinkStyle : ""
      }`}
    >
      <Link
        to={to}
        className={`flex items-center ${linkStyle ? linkStyle : ""}`}
      >
        {icon}
        <h2
          className={`text-[20px] font-normal hover:text-ujenzi-blue tracking-widest text-ujenzi-darkgray ml-[15px] active:text-black ${
            linkTitleStyle ? linkTitleStyle : ""
          }`}
        >
          {linkTitle}
        </h2>
      </Link>
    </div>
  );
};
