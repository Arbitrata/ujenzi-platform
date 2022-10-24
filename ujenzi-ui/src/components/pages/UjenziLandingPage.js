import React from "react";
import 'tw-elements';
import { BsArrowBarRight, BsCart4 } from "react-icons/bs";
import { FaRegObjectUngroup, FaSearch, FaSearchLocation } from "react-icons/fa";
import { RiUserLocationFill } from "react-icons/ri";
import UjenziButton from "../common/UjenziButton";
import UjenziIcon from "../common/UjenziIcon";
import UjenziNavbar from "../common/UjenziNavbar";
import UjenziSearch from "../common/UjenziSearch";
import { UjenziCards } from "./../common/UjenziCards";

export const HeroSection = () => {
  return (
    <div className="w-[100vw] h-[580px] bg-ujenzi-lightgreen pt-[50px] relative">
      <div className="w-[100%] h-[75%] flex">
        <div className="w-[50%] h-[100%] block relative pl-[70px] pr-6">
          <div className="text-ujenzi-darkgray text-left">
            <h1 className="font-extrabold text-[42px] text-left space-x-1 ">
              Lorem Ipsum simply dummy text of the printing type industry.
            </h1>
            <span className="text-bold text-[18px] font-bold text-left">
              Lorem Ipsum simply dummy text of the printing type industry Lorem
              Ipsum simply dummy text of the printing type industry.Lorem Ipsum
              simply dummy text of the printing type industry.
            </span>
          </div>
          <div className="flex justify-between w-[100%] absolute bottom-0 h-[60px] items-center pr-[160px]">
            <UjenziButton
              buttonText={"Be a Supplier"}
              buttonIcon={true}
              icon={<BsArrowBarRight />}
              iconStyle={"ml-2"}
            />
            <UjenziButton
              buttonText={"Order With Us"}
              buttonIcon={true}
              icon={<BsCart4 size={20} />}
              iconStyle={"ml-2"}
            />
          </div>
        </div>
        <div className="w-[50%] h-[100%] py-2 pl-12 pr-[70px]">
          <img
            className="w-[100%] h-[100%]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnT4fovqVii8fTvhEfIZX_dGnrXohDos6jRKkSWRmY_khA1VumyupLhlUfGiOyw62ZP20&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <div className="h-[100px] w-[100vw] bottom-0 items-center px-[70px] absolute mb-[-45px] flex place-items-center">
        <div className=" flex bg-ujenzi-darkgray w-[100%] items-center pl-[100px] h-[100%] shadow shadow-ujenzi-darkgrey rounded-[10px] ">
          <div className="block text-left h-fit bg-ujenzi-white text-sm rounded-l-[10px] border-r-ujenzi-darkgrey border pb-2">
            <span className="pl-4"> material</span>
            <UjenziSearch
              iconStyle={"pl-6"}
              placeholder={"Search a Material"}
              iconPresent={<FaRegObjectUngroup size={25} />}
              searchStyle={
                "w-[450px] h-[60px] border border-t-ujenzi-blue mr-2 border border-none"
              }
            />
          </div>
          <div className="block text-left h-fit bg-ujenzi-white text-sm rounded-r-[10px] pb-2">
            <span className="pl-4">Location</span>
            <UjenziSearch
              iconStyle={"pl-6"}
              placeholder={"Search a supplier"}
              iconPresent={<RiUserLocationFill size={25} />}
              searchStyle={
                "w-[450px] h-[60px] mr-2 border border-t-ujenzi-blue  border border-none"
              }
            />
          </div>
          <div className="ml-4">
            <UjenziButton iconStyle={"ml-2"} buttonText={"Search"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export function MostPopularSearch() {
  const popularList = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQo7MZ9g8ijVtpZogXAENMnEf71y0pI8QKSw&usqp=CAU",
      name: "Bricks",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQGtw-jzwnU9crOE2b5fB-LOuEvP_25isYBw&usqp=CAU",
      name: "Iron Sheets",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3VZLD2CASk3dlSCF7vSRzoUta4rLqih7sfg&usqp=CAU",
      name: "Stones",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwz08QKIid-h8Ag6u0VUWB4KLQdJOZzizHSg&usqp=CAU",
      name: "Tiles",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiLiPOec4ZETmF3wee1DDHCraJJinzR5Bbcg&usqp=CAU",
      name: "Wooden",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1k7WdcJEvpHZp-YKl8wV0jQZfo5mI_pfRrA&usqp=CAU",
      name: "Iron Metal",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4RX7JA6VsGosH2iAJRCf4GqAkKMUm9zk--A&usqp=CAU",
      name: "Sand",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNfr5B3YK2mY6LMP8MMTIo1IDUG9obyOPVow&usqp=CAU",
      name: "Cement",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzQ9qGvvcRxZkxIQwisNPsdD-zfrcGuUi6g&usqp=CAU",
      name: "Crushed stones",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Y9XAm2fv6HzGOoEmbRgs0vjnw1axz6myWg&usqp=CAU",
      name: "Tilted Glasses",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkPRwiva3YSgPe1O4Jey9wFI6UqxzwzXEJrg&usqp=CAU",
      name: "Metallic Doors",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLhneEb0LnpuaoaTcC6p2ONOGpD3c3qftPA&usqp=CAU",
      name: "Grills",
    },
  ];

  return (
    <div className="w-[100vw] h-fit pb-10 mt-[50px] pt-[60px] px-[70px]">
      <div className="flex h-fit w-[100%] justify-start">
        <UjenziIcon
          borderPresent={true}
          icon={<FaSearch size={30} />}
          borderStyle={
            "h-[60px] w-[60px] hover:text-ujenzi-darkgray bg-ujenzi-lightgreen hover:bg-ujenzi-lightgreen"
          }
        />
        <h1 className="text-[35px] ml-6 font-bold text-ujenzi-darkgray">
          Popular searched material
        </h1>
      </div>
      <div className="grid grid-cols-6 mt-12">
        {popularList.map((list) => (
          <UjenziCards
            homePageCard={true}
            popularSearchedImgSrc={list.image}
            popularSearchedTitle={list.name}
          />
        ))}
      </div>
    </div>
  );
}

export function OurPartnersSection() {
  return (
    <div className=" bg-ujenzi-lightgreen w-[100vw] px-[70px] pt-[30px] h-[550px] block relative">
      <div className="text-ujenzi-darkgray  px-[150px]">
        <h1 className="font-extrabold text-[42px] text-center">Our Partners</h1>
        <span className="text-bold text-[18px] font-bold text-left">
          Lorem Ipsum simply dummy text of the printing type industry Lorem
          Ipsum simply dummy text of the printing type industry.Lorem Ipsum
          simply dummy text of the printing type industry.
        </span>
      </div>

      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide relative mt-12 bg-ujenzi-white"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative w-[1000px] h-[150px] overflow-x-hidden">

          <div className="carousel-item active relative float-left w-[200px] text-bold">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwz08QKIid-h8Ag6u0VUWB4KLQdJOZzizHSg&usqp=CAU"
              className="block w-[100%] "
              alt="Wild Landscape"
            />
          </div>


        </div>
      </div>
    </div>
  );
}

export default function UjenziLandingPage() {
  return (
    <div className="block z-10">
      <UjenziNavbar buyersNavbar={true} />
      <div className=" pt-[72px]">
        <HeroSection />
        <MostPopularSearch />
        <OurPartnersSection />
      </div>
    </div>
  );
}
