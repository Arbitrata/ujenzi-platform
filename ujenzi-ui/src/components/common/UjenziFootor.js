import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import FooterColumn from "./FooterColumn";

export default function UjenziFootor({ mainFooterPresent }) {
  const column1 = [
    { title: "Let us help you" },
    { link: "help center", to: "" },
    { link: "contact us", to: "" },
    { link: "return policy", to: "" },
    { link: "report a product", to: "" },
    { link: "advertise with ujenzi", to: "" },
    { link: "Material name", to: "" },
    { link: "Material name", to: "" },
    { link: "Material name", to: "" },
  ];
  const column2 = [
    { title: "Products" },
    { link: "Material name", to: "" },
    { link: "material name", to: "" },
    { link: "Material name", to: "" },
    { link: "material name", to: "" },
    { link: "Material name", to: "" },
    { link: "Material name", to: "" },
  ];
  const column3 = [
    { title: "Quick Links" },
    { link: "Material name", to: "" },
    { link: "material name", to: "" },
    { link: "Material name", to: "" },
    { link: "material name", to: "" },
    { link: "Material name", to: "" },
    { link: "Material name", to: "" },
  ];
  const column4 = [
    { title: "About us" },
    { link: "Material name", to: "" },
    { link: "material name", to: "" },
    { link: "Material name", to: "" },
    { link: "material name", to: "" },
    { link: "Material name", to: "" },
    { link: "Material name", to: "" },
  ];
  const column5 = [
    { title: "Products" },
    { link: "facebook", to: "", icon: <FaFacebook /> },
    { link: "Twiter", to: "", icon: <FaFacebook /> },
    { link: "Instagram", to: "", icon: <FaFacebook /> },
  ];

  return (
    <div className={`w-screen relative bg-ujenzi-darkgray  ${
        mainFooterPresent
          ? "h-[430px] absolute "
          : "h-[0px]"
      }`}>
      {mainFooterPresent && (
        <div className="w-screen absolute top-0 h-[350px] bg-ujenzi-darkgray">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnT4fovqVii8fTvhEfIZX_dGnrXohDos6jRKkSWRmY_khA1VumyupLhlUfGiOyw62ZP20&usqp=CAU"
            alt="building"
            className={` ${
              mainFooterPresent
                ? "w-screen h-[430px] absolute "
                : "w-[100%] h-[100%]"
            } `}
          />
          <div className="absolute w-[100%] h-[100%] pt-6 grid grid-cols-5 gap-4 pl-[70px] bg-ujenzi-darkgray bg-opacity-50">
            <div>
              {column1.map((link) => (
                <FooterColumn title={link.title} link={link.link} />
              ))}
            </div>
            <div>
              {column2.map((link) => (
                <FooterColumn title={link.title} link={link.link} />
              ))}
            </div>
            <div>
              {column3.map((link) => (
                <FooterColumn title={link.title} link={link.link} />
              ))}
            </div>
            <div>
              {column4.map((link) => (
                <FooterColumn title={link.title} link={link.link} />
              ))}
            </div>
            <div>
              {column5.map((link) => (
                <FooterColumn
                  iconPresent={true}
                  title={link.title}
                  link={link.link}
                  icon={link.icon}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between absolute bottom-0 bg-ujenzi-darkgray bg-opacity-50 h-[80px] place-items-center pt-1 pb-3 w-[100%]">
        <column className="shrink-0 pl-24">
          <span className="text-sm text-ujenzi-white font-normal">
            All right reserved @ ujenzi 2022
          </span>
        </column>
        <column className="flex order-last space-x-4 mr-28">
          <Link to="/">
            <FaFacebook className="mt-3 fill-[#23A6F0] " />
          </Link>
          <Link to="/">
            <FaTwitter className="mt-3 fill-[#23A6F0] " />
          </Link>
          <Link to="/">
            <FaInstagram className="mt-3 fill-[#23A6F0]" />
          </Link>
        </column>
      </div>
    </div>
  );
}
