import React from "react";
import { BsEye } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin4Line, RiDeleteBin6Fill } from "react-icons/ri";
import UjenziButton from "./UjenziButton";
import UjenziIcon from "./UjenziIcon";

export const UjenziCards = ({
  homePageCard,
  homePageCardStyle,
  materialPostCard,
  suppliersmaterialPostCard,
  notificationCard,
  postImgSrc,
  postTitle,
  postDesription,
  currentCost,
  previousCost,
  popularSearchedStyle,
  popularSearchedImgSrc,
  popularSearchedTitle,
}) => {
  return (
    <>
      {homePageCard && (
        <div
          className={`rounded border border-ujenzi-blue w-[205.6px] h-[205.6px] relative${
            homePageCardStyle ? homePageCardStyle : ""
          }`}
        >
          <img
            src={popularSearchedImgSrc}
            className={"h-[100%] rounded"}
            alt={"material name"}
          />
          <div
            className={`w-[100%] h-[35%] grid text-md font-bold place-items-center text-ujenzi-white px-1 bg-ujenzi-darkgray bg-opacity-50 absolute bottom-0 left-0 right-0`}
          >
            <h3
              className={`${popularSearchedStyle ? popularSearchedStyle : ""}`}
            >
              {popularSearchedTitle}
            </h3>
          </div>
        </div>
      )}
      {materialPostCard && (
        <div
          className={`rounded border w-[290px] h-[400px] shadow-md shadow-ujenzi-darkgray bg-ujenzi-darkgray bg-opacity-70 object-fill ml-11 pt-1 px-0.5 ${
            homePageCardStyle ? homePageCardStyle : ""
          }`}
        >
          <img src={postImgSrc} className={"h-[60%]"} alt={"material name"} />
          <div className="h-[40%] w-[100%]  text-ujenzi-white">
            <div className="flex row-span-1 w-[100%] justify-between h-[30%]">
              <div className="grid place-items-center w-[70%] px-1 text-left text-sm font-extrabold">
                {postTitle}
              </div>
              {suppliersmaterialPostCard ? (
                <div className="flex p-1">
                  <UjenziIcon
                    borderPresent={true}
                    icon={<RiDeleteBin6Fill size={20} />}
                    to={"/"}
                    borderStyle={"w-[35px] h-[35px] mr-1"}
                    onClickIconHandler={""}
                  />
                  <UjenziIcon
                    borderPresent={true}
                    icon={<FaEdit size={20} />}
                    to={"/"}
                    borderStyle={"w-[35px] h-[35px]"}
                    onClickIconHandler={""}
                  />
                </div>
              ) : (
                <div>
                  <UjenziButton
                    buttonStyle={
                      "h-[35px] text-ujenzi-blue text-[10px] mt-1 hover:bg-ujenzi-blue hover:text-ujenzi-white bg-[#ffffff]"
                    }
                    buttonText={"Shop"}
                  />
                </div>
              )}
            </div>
            <div className="h-[50%] text-[12px] font-medium px-1">
              {postDesription}
            </div>
            <div className="h-[20%] px-5 flex place-items-center justify-center">
              <span className="line-through text-sm text-left font-light">{`KSH ${previousCost}`}</span>
              <span className="text-[20px] font-extrabold ml-6">{`KSH ${currentCost}`}</span>
            </div>
          </div>
        </div>
      )}
      {notificationCard && (
        <div
          className={`shadow shadow-ujenzi-darkgray text-ujenzi-darkgray border w-[916.05px] h-[190px] border-ujenzi-blue rounded-[10px] p-3 grid grid-rows-5 bg-ujenzi-lightgreen`}
        >
          <div className="row-span-1text-md capitalize flex justify-between">
            <h1 className="text-[18px] font-extrabold ">Suppliers name</h1>
            <h1 className="bg-ujenzi-white py-1 px-3 rounded-full text-[18px] font-bold">
              September 24
            </h1>
          </div>

          <div className="row-span-3 px-2 pt-2 pb-2 text-[16px] line-clamp-3 my-2"></div>
          <div className=" row-span-1 font-extrabold text-md capitalize flex justify-between place-items-center">
            <h1 className="text-ujenzi-blue">KSH 1390</h1>
            <div className="w-fit h-fit flex">
              <UjenziIcon
                onClickIconHandler={"/"}
                icon={<BsEye size={23} />}
                borderPresent={true}
                borderStyle={
                  "bg-ujenzi-lightgreen mr-2 w-[35px] h-[35px] h-[35px]"
                }
              />
              <UjenziIcon
                onClickIconHandler={"/"}
                icon={<RiDeleteBin4Line size={23} />}
                borderPresent={true}
                borderStyle={"bg-ujenzi-lightgreen w-[35px] h-[35px] h-[35px]"}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};