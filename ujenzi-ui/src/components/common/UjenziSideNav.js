import React, {Fragment, useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import UjenziAvater from "./UjenziAvater";
import UjenziIcon from "./UjenziIcon";

export default function UjenziSideNav({
  profileImage,
  profileName,
  navLink,
  supplierSideNav,
}) {

  return (
    <div className="w-[300px] h-[100vh] bg-ujenzi-lightgreen rounded-[10px] ml-11 mb-[50px] ">
      {supplierSideNav ? (
        <h2 className="text-[25px] text-center font-extrabold text-ujenzi-darkgray ml-6 pr-6 mt-14 truncate">
          {profileName}
        </h2>
      ) : (
        <>
          <div className="w-[100%] h-[120px] bg-ujenzi-darkgray opacity-70 grid place-items-center rounded-t-[10px]">
            <UjenziIcon
            icon={<FiEdit size={25} />}
              borderPresent={true}
              borderStyle={"ml-[230px] mt-[16px]"}
            />
            <div className="block place-content-center mt-[14px]">
              <UjenziAvater imgStyling={"h-[100px] w-[100px] ml-[2px]"} imgSrc={profileImage} />
              <div className="self-center ">
              </div>
            </div>
            <h2 className="text-lg mt-2 font-extrabold capitalize">
                  {profileName}
                </h2>
          </div>
        </>
      )}
      <div className={`"ml-[40px] mt-[120px] " ${supplierSideNav ? "mt-[50px] ml-[40px] " :""}`}>{navLink}</div>
    </div>
  );
}
