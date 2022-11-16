import React from "react";
import { BsSortDown } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import UjenziButton from "../common/UjenziButton";
import { UjenziCards } from "../common/UjenziCards";
import UjenziFootor from "../common/UjenziFootor";
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
        <div className="h-fit flex w-[800px] justify-between -ml-2 mt-12">
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
    </>
  );
};

export const ProductSection = () => {
  const products = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzQ9qGvvcRxZkxIQwisNPsdD-zfrcGuUi6g&usqp=CAU",
      title: "Iron sheets",
      desription:
        "Lorem Ipsum simply dummy text of the printing type industry Lorem Ipsum simply dummy text of the printing type industry.Lorem Ipsum simply dummy text of the printing type industry.",
      cost: 1000,
      previousCost: "1234 ",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4RX7JA6VsGosH2iAJRCf4GqAkKMUm9zk--A&usqp=CAU",
      title: "Iron sheets",
      desription:
        "Lorem Ipsum simply dummy text of the printing type industry Lorem Ipsum simply dummy text of the printing type industry.Lorem Ipsum simply dummy text of the printing type industry.",
      cost: 1001,
      previousCost: "1234 ",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1k7WdcJEvpHZp-YKl8wV0jQZfo5mI_pfRrA&usqp=CAU",
      title: "Iron sheets",
      desription:
        "Lorem Ipsum simply dummy text of the printing type industry Lorem Ipsum simply dummy text of the printing type industry.Lorem Ipsum simply dummy text of the printing type industry.",
      cost: 1002,
      previousCost: "1234 ",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4RX7JA6VsGosH2iAJRCf4GqAkKMUm9zk--A&usqp=CAU",
      title: "Iron sheets",
      desription:
        "Lorem Ipsum simply dummy text of the printing type industry Lorem Ipsum simply dummy text of the printing type industry.Lorem Ipsum simply dummy text of the printing type industry.",
      cost: 1003,
      previousCost: "1234 ",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzQ9qGvvcRxZkxIQwisNPsdD-zfrcGuUi6g&usqp=CAU",
      title: "Iron sheets",
      desription:
        "Lorem Ipsum simply dummy text of the printing type industry Lorem Ipsum simply dummy text of the printing type industry.Lorem Ipsum simply dummy text of the printing type industry.",
      cost: 1004,
      previousCost: "1234 ",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzQ9qGvvcRxZkxIQwisNPsdD-zfrcGuUi6g&usqp=CAU",
      title: "Iron sheets",
      desription:
        "Lorem Ipsum simply dummy text of the printing type industry Lorem Ipsum simply dummy text of the printing type industry.Lorem Ipsum simply dummy text of the printing type industry.",
      cost: 1005,
      previousCost: "1234 ",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4RX7JA6VsGosH2iAJRCf4GqAkKMUm9zk--A&usqp=CAU",
      title: "Iron sheets",
      desription:
        "Lorem Ipsum simply dummy text of the printing type industry Lorem Ipsum simply dummy text of the printing type industry.Lorem Ipsum simply dummy text of the printing type industry.",
      cost: 1006,
      previousCost: "1234 ",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1k7WdcJEvpHZp-YKl8wV0jQZfo5mI_pfRrA&usqp=CAU",
      title: "Iron sheets",
      desription:
        "Lorem Ipsum simply dummy text of the printing type industry Lorem Ipsum simply dummy text of the printing type industry.Lorem Ipsum simply dummy text of the printing type industry.",
      cost: 1007,
      previousCost: "1234 ",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4RX7JA6VsGosH2iAJRCf4GqAkKMUm9zk--A&usqp=CAU",
      title: "Iron sheets",
      desription:
        "Lorem Ipsum simply dummy text of the printing type industry Lorem Ipsum simply dummy text of the printing type industry.Lorem Ipsum simply dummy text of the printing type industry.",
      cost: 1008,
      previousCost: "1234 ",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNfr5B3YK2mY6LMP8MMTIo1IDUG9obyOPVow&usqp=CAU",
      title: "Iron sheets",
      desription:
        "Lorem Ipsum simply dummy text of the printing type industry Lorem Ipsum simply dummy text of the printing type industry.Lorem Ipsum simply dummy text of the printing type industry.",
      cost: 1009,
      previousCost: "1234 ",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzQ9qGvvcRxZkxIQwisNPsdD-zfrcGuUi6g&usqp=CAU",
      title: "Iron sheets",
      desription:
        "Lorem Ipsum simply dummy text of the printing type industry Lorem Ipsum simply dummy text of the printing type industry.Lorem Ipsum simply dummy text of the printing type industry.",
      cost: 1010,
      previousCost: "1234 ",
    },
  ];
  return (
    <div className="h-fit py-4 w-screen grid grid-cols-4 gap-4 px-24 overflow-x-hidden mb-24">
      {products.map((product) => (
        <UjenziCards
          key={product.cost}
          materialPostCard={true}
          imgSrc={product.image}
          title={product.title}
          description={product.desription}
          previousCost={product.previousCost}
          currentCost={product.cost}
        />
      ))}
    </div>
  );
};

export default function UjenziBuyersHomePage() {
  return (
    <div className="block z-10">
      <UjenziNavbar buyersNavbar={true} />
      <div className="pt-[72px]">
        <HeroSection />
      </div>
      <ProductSection />
      <UjenziFootor mainFooterPresent={true} />
    </div>
  );
}
