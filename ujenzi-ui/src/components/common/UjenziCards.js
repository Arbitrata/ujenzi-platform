import React from "react";
import { BsEye, BsStarFill } from "react-icons/bs";
import { FaEdit, FaQuoteLeft } from "react-icons/fa";
import { RiDeleteBin4Line, RiDeleteBin6Fill } from "react-icons/ri";
import UjenziAvater from "./UjenziAvater";
import UjenziButton from "./UjenziButton";
import UjenziIcon from "./UjenziIcon";
import 'tw-elements';

export function RenderStarRating() {
  return (
    <>
      {[...Array(5)].map((star) => {
        return (
          <BsStarFill
            key={star}
            className="cursor-pointer "
            size={30}
            color="ujenzi-darkgray"
          />
        );
      })}
    </>
  );
}

export const UjenziCards = ({
  homePageCard,
  homePageCardStyle,
  materialPostCard,
  suppliersmaterialPostCard,
  notificationCard,
  imgSrc,
  title,
  description,
  dateTime,
  currentCost,
  previousCost,
  popularSearchedStyle,
  popularSearchedImgSrc,
  popularSearchedTitle,
  testimonialCard,
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

      {testimonialCard && (
        <div className="w-[400px] h-[400px] bg-ujenzi-white shadow-md shadow-ujenzi-darkgrey">
          <div className="w-[100%] h-[fit] grid place-content-center">
            <UjenziAvater
              imgSrc={imgSrc}
              imgStyling={"mt-[-50px] w-[120px] h-[120px]"}
            />
            <h1 className="mt-3 text-[20px] text-ujenzi-blue font-bold">
              {title}
            </h1>
          </div>
          <div className="flex w-[100%] h-fit mt-4 gap-1 place-content-center ">
            <RenderStarRating />
          </div>
          <div className="block text-left px-10 pt-5 w-[100%] h-[250px]">
            <FaQuoteLeft size={30} className={"mb-2 text-ujenzi-blue"} />
            <span className=" font-bold mt-2 text-ujenzi-darkgrey text-sm">
              {description}
            </span>
          </div>
        </div>
      )}

      {materialPostCard && (
        <div
          className={`rounded border w-[290px] h-[400px] shadow-md shadow-ujenzi-darkgray bg-ujenzi-darkgray bg-opacity-70 object-fill pt-1 px-0.5 ${
            homePageCardStyle ? homePageCardStyle : ""
          }`}
        >
          <img src={imgSrc} className={"h-fit w-full"} alt={"material name"} />
          <div className="h-[40%] w-[100%]  text-ujenzi-white">
            <div className="flex row-span-1 w-[100%] justify-between h-[30%]">
              <div className="grid place-items-center w-[70%] px-1 text-left text-sm font-extrabold">
                {title}
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
                      "h-[35px] text-ujenzi-blue text-[10px] mt-1 hover:bg-ujenzi-blue hover:text-[#ffffff] bg-[#ffffff]"
                    }
                    buttonText={"Shop"}
                  />
                </div>
              )}
            </div>
            <div className="h-[50%] text-[12px] font-medium px-1">
              {description}
            </div>
            <div className="h-[20%] px-5 flex place-items-center justify-start">
              <span className="line-through text-sm text-left font-light">{`KSH ${previousCost}`}</span>
              <span className="text-[20px] font-extrabold ml-4">{`KSH ${currentCost}`}</span>
            </div>
          </div>
        </div>
      )}
      {notificationCard && (
        <div
          className={`shadow shadow-ujenzi-darkgray text-ujenzi-darkgray border my-2 w-[880px] h-[190px] border-ujenzi-blue rounded-[10px] p-3 grid grid-rows-5 bg-ujenzi-lightgreen`}
        >
          <div className="row-span-1text-md capitalize flex justify-between">
            <h1 className="text-[18px] font-extrabold ">{title}</h1>
            <h1 className="bg-ujenzi-white py-1 px-3 rounded-full text-[18px] font-bold">
              {dateTime}
            </h1>
          </div>

          <div className="row-span-3 px-2 pt-2 pb-2 text-[16px] line-clamp-3 my-2">
            {description} 
          </div>
          <div className=" row-span-1 font-extrabold text-md capitalize flex justify-between place-items-center">
            <h1 className="text-ujenzi-blue">{currentCost}</h1>
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
