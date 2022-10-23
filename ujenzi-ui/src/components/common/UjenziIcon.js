import React from "react";
import { Link } from "react-router-dom";

export default function UjenziIcon({
  onClickIconHandler,
  badgePresent,
  badgeNumber,
  icon,
  to,
  iconStyle,
  borderPresent,
  borderStyle,
}) {
  return (
    <Link to={to} onClick={onClickIconHandler}>
      <div className={`${badgePresent && "flex mr-[-13px]"}`}>
        <div
          className={`text-ujenzi-dark grid place-items-center ${
            iconStyle ? iconStyle : ""
          } ${
            borderPresent &&
            `border-solid border border-ujenzi-blue text-ujenzi-blue hover:bg-ujenzi-blue bg-ujenzi-white hover:text-ujenzi-white rounded-[5px] ${
              borderStyle ? borderStyle : ""
            } `
          }`}
        >
          {icon}
        </div>
        {badgePresent && (
          <div className="grid place-items-center border border-ujenzi-blue hover:border-ujenzi bg-ujenzi-white text-ujenzi-blue text-[10px] text-center rounded-[20px] mt-[16px] ml-[-13px] h-fit w-fit px-1">
            {badgeNumber}
          </div>
        )}
      </div>
    </Link>
  );
}
