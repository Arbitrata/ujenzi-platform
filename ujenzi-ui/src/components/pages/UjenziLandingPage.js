import React from "react";
import "tw-elements";
import { BsCart4 } from "react-icons/bs";
import {
  FaArrowRight,
  FaHandshake,
  FaRegObjectUngroup,
  FaSearch,
} from "react-icons/fa";
import { RiUserLocationFill } from "react-icons/ri";
import UjenziButton from "../common/UjenziButton";
import UjenziIcon from "../common/UjenziIcon";
import UjenziNavbar from "../common/UjenziNavbar";
import UjenziSearch from "../common/UjenziSearch";
import { UjenziCards } from "./../common/UjenziCards";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import UjenziFootor from "../common/UjenziFootor";

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
            <Link to="/suppliersignup">
              <UjenziButton
                buttonText={"Be a Supplier"}
                buttonIcon={<FaArrowRight />}
                iconStyle={"ml-2"}
              />
            </Link>
            <Link to="/signin">
              <UjenziButton
                buttonText={"Order with us"}
                buttonIcon={<BsCart4 size={20} />}
                iconStyle={"ml-2"}
              />
            </Link>
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
      id: 1,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQGtw-jzwnU9crOE2b5fB-LOuEvP_25isYBw&usqp=CAU",
      name: "Iron Sheets",
      id: 2,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3VZLD2CASk3dlSCF7vSRzoUta4rLqih7sfg&usqp=CAU",
      name: "Stones",
      id: 3,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwz08QKIid-h8Ag6u0VUWB4KLQdJOZzizHSg&usqp=CAU",
      name: "Tiles",
      id: 4,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiLiPOec4ZETmF3wee1DDHCraJJinzR5Bbcg&usqp=CAU",
      name: "Wooden",
      id: 5,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1k7WdcJEvpHZp-YKl8wV0jQZfo5mI_pfRrA&usqp=CAU",
      name: "Iron Metal",
      id: 6,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4RX7JA6VsGosH2iAJRCf4GqAkKMUm9zk--A&usqp=CAU",
      name: "Sand",
      id: 7,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNfr5B3YK2mY6LMP8MMTIo1IDUG9obyOPVow&usqp=CAU",
      name: "Cement",
      id: 8,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzQ9qGvvcRxZkxIQwisNPsdD-zfrcGuUi6g&usqp=CAU",
      name: "Crushed stones",
      id: 10,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Y9XAm2fv6HzGOoEmbRgs0vjnw1axz6myWg&usqp=CAU",
      name: "Tilted Glasses",
      id: 11,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkPRwiva3YSgPe1O4Jey9wFI6UqxzwzXEJrg&usqp=CAU",
      name: "Metallic Doors",
      id: 12,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLhneEb0LnpuaoaTcC6p2ONOGpD3c3qftPA&usqp=CAU",
      name: "Grills",
      id: 14,
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
            key={list.id}
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
  const logos1 = [
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Rp4lmZscsOaKImBw4Mh2bUSrDjwo-5Fbtg&usqp=CAU",
      alt: "",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7XaroNEVIQIYgu1hXQFec5AJ-0ek4hGRV2A&usqp=CAU",
      alt: "",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdUvT2v-Rl1VFWLk8DxxhLMaWv6Fm7WYYpCw&usqp=CAU",
      alt: "",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSbH8xe_eoykeWSjxrP38C2M0hkYRAdDyvQ&usqp=CAU",
      alt: "",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXN-vIE0OVB_mjlC9EsJDG3ZHFTxynyw5MuQ&usqp=CAU",
      alt: "",
    },
  ];

  const logos2 = [
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShEwbJ49-wIc6MuZcLhZI9EIunBh1Lwwx7uw&usqp=CAU",
      alt: "",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDFH9xjgQ2EYypgQYt5TiMbLNpzn2PgybWnA&usqp=CAU",
      alt: "",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRnn-yabaEXRZjvwD_lKjp6mb8UDGMBGtgXQ&usqp=CAU",
      alt: "",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdPq3SVBYViole-XtMW4vQEtJlJFhQGo6AUA&usqp=CAU",
      alt: "",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGCvtqtbi-GT-wQbuts2422hDZ6VBsjdTvSg&usqp=CAU",
      alt: "",
    },
  ];

  return (
    <div className=" bg-ujenzi-lightgreen w-[100vw] px-[100px] pt-[20px] mt-4 h-[500px] block relative">
      <div className="text-ujenzi-darkgray  px-[190px]">
        <div className="flex h-fit w-[100%] justify-start">
          <UjenziIcon
            borderPresent={true}
            icon={<FaHandshake size={30} />}
            borderStyle={
              "h-[60px] w-[60px] hover:text-ujenzi-darkgray bg-ujenzi-lightgreen hover:bg-ujenzi-lightgreen"
            }
          />
          <h1 className="font-extrabold text-[42px] text-center ml-10 pb-6">
            Our Partners
          </h1>
        </div>
        <span className="text-bold text-[18px] font-bold text-left">
          Lorem Ipsum simply dummy text of the printing type industry Lorem
          Ipsum simply dummy text of the printing type industry.Lorem Ipsum
          simply dummy text of the printing type industry.
        </span>
      </div>

      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide relative mt-[70px]"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative w-full h-[300px] flex  overflow-hidden">
          <div className="carousel-item relative float-left active w-full h-[130px]">
            <div className="flex w-full grid-cols-6 gap-10 justify-between h-full">
              {logos1.map((logo) => (
                <img
                  key={logo.logo}
                  src={logo.logo}
                  className="block w-[200px] shadow-md shadow-ujenzi-darkgray h-auto"
                  alt=""
                />
              ))}
            </div>
          </div>

          <div className="carousel-item relative float-left  w-full h-[130px]">
            <div className="flex w-full grid-cols-6 gap-10 justify-between h-full">
              {logos2.map((logo) => (
                <img
                  key={logo.key}
                  src={logo.logo}
                  className="block w-[200px] shadow-md shadow-ujenzi-darkgray h-auto"
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const TestimonialsSection = () => {
  const testimonialsList = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXoSFMOMEymFeYRnFIOcD00Z5T2z8BXhlQWQ&usqp=CAU",
      name: "Timo doe",
      testimony:
        " Lorem Ipsum simply dummy text of the printing type industry Lorem Ipsum simply dummy text of the printing type industry.Lorem Ipsum simply dummy text of the printing type industry.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkeGWHCJEVhL9m0NNJdAxfc0GH9bCPhsnfBw&usqp=CAU",
      name: "Jane doe",
      testimony:
        " Lorem Ipsum simply dummy text of the printing type industry Lorem Ipsum simply dummy text of the printing type industry.Lorem Ipsum simply dummy text of the printing type industry.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQldvRkZUPji7xFW6nkKh43GKb3-m-Ns03iEg&usqp=CAU",
      name: "Antony ",
      testimony:
        " Lorem Ipsum simply dummy text of the printing type industry Lorem Ipsum simply dummy text of the printing type industry.Lorem Ipsum simply dummy text of the printing type industry.",
    },
  ];

  return (
    <div className="w-[100vw] h-fit block place-content-center">
      <div className="text-ujenzi-darkgray text-center mt-6 mb-10">
        <h1 className="font-extrabold text-ujenzi-blue text-[42px] pb-2">
          What our customers say about us
        </h1>
        <div className="text-bold text-[18px] font-bold text-center mx-[250px]">
          Lorem Ipsum simply dummy text of the printing type industry Lorem
          Ipsum simply dummy text of the printing type industry.Lorem Ipsum
          simply dummy text of the printing type industry.
        </div>
      </div>
      <div className="w-full h-[50px] absolute right-0 pl-[84%] mt-[-70px]">
        <button
          className="carousel-control-prev mr-10"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            aria-hidden="true"
            className="carousel-control-prev inline-block "
          >
            <UjenziIcon
              borderPresent={true}
              borderStyle={"bg-ujenzi-darkgray h-[40px] w-[40px] rounded-full"}
              icon={<FiArrowLeft size={25} />}
            />
          </span>
        </button>

        <button
          className="carousel-control-next "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            aria-hidden="true"
            className="carousel-control-next inline-block "
          >
            <UjenziIcon
              borderPresent={true}
              borderStyle={"bg-ujenzi-darkgray h-[40px] w-[40px] rounded-full"}
              icon={<FiArrowRight size={25} />}
            />
          </span>
        </button>
      </div>

      <div
        id="carouselExampleControls"
        class="carousel slide relative"
        data-bs-ride="carousel"
        data-bs-interval="false"
      >
        <div class="carousel-inner relative w-full overflow-hidden pt-[70px] pb-[30px] mt-4 px-[70px]">
          <div className="carousel-item relative float-left active w-full h-fit pb-11">
            <div className="flex w-full grid-cols-3 gap-4 justify-between h-full">
              {testimonialsList.map((t) => (
                <UjenziCards
                  testimonialCard={true}
                  imgSrc={t.image}
                  title={t.name}
                  description={t.testimony}
                />
              ))}
            </div>
          </div>

          <div className="carousel-item relative float-left w-full h-fit pb-11">
            <div className="flex w-full grid-cols-3 gap-4 justify-between h-full">
              {testimonialsList.map((t) => (
                <UjenziCards
                  testimonialCard={true}
                  imgSrc={t.image}
                  title={t.name}
                  description={t.testimony}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BottomSection = () => {
  return (
    <div className="w-[100%] h-[300px] pb-10 grid bg-ujenzi-lightgreen place-content-center">
      <div className="text-ujenzi-darkgray  px-[250px] mt-6">
        <h1 className="font-extrabold text-[42px] text-center pb-2">
          What our customers say about us
        </h1>
        <span className="text-bold text-[18px] font-bold text-left">
          Lorem Ipsum simply dummy text of the printing type industry Lorem
          Ipsum simply dummy text of the printing type industry.Lorem Ipsum
          simply dummy text of the printing type industry.
        </span>
      </div>
      <div className="grid place-content-center mt-10">
        <Link to="/signup">
          <UjenziButton
            buttonText={"Join Us Today"}
            buttonIcon={<FaArrowRight />}
            iconStyle={"ml-2"}
          />
        </Link>
      </div>
    </div>
  );
};

export default function UjenziLandingPage() {
  return (
    <div className="block z-10">
      <UjenziNavbar />
      <div className=" pt-[72px]">
        <HeroSection />
        <MostPopularSearch />
        <OurPartnersSection />
        <TestimonialsSection />
        <BottomSection />
        <UjenziFootor mainFooterPresent={true} />
      </div>
    </div>
  );
}
