import React from "react";
import { BsSortDown } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import UjenziButton from "../common/UjenziButton";
import UjenziNavbar from "../common/UjenziNavbar";
import UjenziSearch from "../common/UjenziSearch";

export const HeroSection = () => {
  return (
    <>
    <div className="w-full h-[500px] grid place-content-center">
      <div className="w-[800px] h-[300px] shadow shadow-ujenzi-darkgrey rounded">
        <img
          className="w-[100%] h-[100%]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnT4fovqVii8fTvhEfIZX_dGnrXohDos6jRKkSWRmY_khA1VumyupLhlUfGiOyw62ZP20&usqp=CAU"
          alt=""
        />
      </div>
      <div className="h-fit flex w-[800px] justify-between mt-12">
        <UjenziSearch
          placeholder={"Search for material"}
          iconPresent={<FaSearch size={20} />}
          searchStyle={"h-[50px] w-[450px] mr-12"}
        />
        <UjenziButton
          buttonStyle={"rounded-full"}
          buttonText={"SortBy"}
          buttonIcon={<BsSortDown />}
          iconStyle={"ml-2"}
        />
        <UjenziButton
          buttonStyle={"rounded-full"}
          buttonText={"Filter"}
          buttonIcon={<FiFilter />}
          iconStyle={"ml-2"}
        />
      </div>
    </div>
    <div className="grid place-content-center w-[100%] h-fit py-8 grid-rows-1 jus">

    </div>
    </>
  );
};

export default function UjenziBuyersHomePage() {
  return (
    <div className="block z-10">
      <UjenziNavbar buyersNavbar={true} />
      <div className=" pt-[72px]">
        <HeroSection />
      </div>
    </div>
  );
}
