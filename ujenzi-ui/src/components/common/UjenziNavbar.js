import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  BsCart4,
  BsEye,
  BsPhone,
  BsQuestionOctagon,
  BsViewList,
} from "react-icons/bs";
import { FaChevronDown, FaHandshake, FaSignOutAlt } from "react-icons/fa";
import {
  RiDashboardFill,
  RiFlightLandFill,
  RiNotificationFill,
} from "react-icons/ri";
import UjenziButton from "./UjenziButton";
import { UjenziLogo } from "./UjenziLogo";
import UjenziIcon from "./UjenziIcon";
import UjenziAvater from "./UjenziAvater";

export const NavDropDown = ({ dropTitle, dropItems, children }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center gap-1.5 hover:text-ujenzi-darkgray p-1 px-3 text-[16px] hover:rounded-md hover:text-youngtal-dark-blue outline-offset-2 outline-youngtal-dark-blue hover:outline-none ">
          {dropTitle}
          <FaChevronDown className="text-[.7rem]" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`flex absolute -ml-2 mt-6 ring-1 ring-ujenzi-blue z-50 rounded-md bg-ujenzi-white shadow-md shadow-ujenzi-darkgrey w-auto ${
            children ? "w-auto" : ""
          }`}
        >
          {children ? (
            children
          ) : (
            <div className="flex flex-col w-full justify-center  px-2 py-3 text-ujenzi-darkgrey text-base">
              {dropItems.map((item) => (
                <Menu.Item key={Math.random()}>
                  <Link
                    to={item.path}
                    className="flex min-w-[12em] items-center gap-3 p-2  hover:bg-ujenzi-lightgrey hover:text-ujenzi-blue hover:p-2 hover:rounded-md"
                  >
                    <div className="text-md">{item.icon ? item.icon : ""}</div>
                    {item.text}
                  </Link>
                </Menu.Item>
              ))}
            </div>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export const MenuLarge = ({ dropItems }) => {
  return (
    <div className="grid h-fit justify-between auto-cols-max p-2  gap-3 w-full">
      {dropItems && (
        <div className="grid grid-cols-2  justify-between auto-cols-max w-full gap-5 py-2">
          {dropItems.map((item) => (
            <div key={Math.random() + 1} className="flex flex-col w-full gap-2">
              <div className="flex flex-col w-full gap-1">
                {item.subItems.map((subItem) => (
                  <Menu.Item key={Math.random() + 2}>
                    <Link
                      to={subItem.path}
                      className="flex items-center p-1 hover:bg-ujenzi-lightgrey hover:text-ujenzi-blue hover:rounded"
                    >
                      {subItem.text}
                    </Link>
                  </Menu.Item>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const UjenziNavbar = ({
  navStyle,
  primaryNavStyle,
  secondaryNavStyle,
  buyersNavbar,
}) => {
  const aboutUsList = [
    { icon: <BsEye />, path: "/", text: "Reviews" },
    { icon: <BsViewList />, path: "/", text: "Overviews" },
    { icon: <FaHandshake />, path: "/", text: "Our Partners" },
  ];
  const supportList = [
    { icon: <RiFlightLandFill />, path: "/", text: "Claims" },
    { icon: <BsQuestionOctagon />, path: "/", text: "FAQs" },
    { icon: <BsPhone />, path: "/", text: "Contact us" },
  ];
  const profilelist = [
    { icon: <RiDashboardFill />, path: "/dashboard", text: "Dashboard" },
    { icon: <FaSignOutAlt />, path: "/", text: "Sign out" },
  ];
  const activeItemStyle = "flex items-center text-ujenzi-darkgrey";
  const navItemStyle = "flex items-center";

  const materialsList = [
    {
      subItems: [
        {
          path: "/",
          text: "Building ",
        },
        {
          path: "/",
          text: "Concrates",
        },
        {
          path: "/",
          text: "Iron sheets",
        },
      ],
    },
    {
      subItems: [
        {
          path: "/",
          text: "Sand",
        },
        {
          path: "/",
          text: "Grills",
        },
        {
          path: "/",
          text: "Boards",
        },
      ],
    },
  ];

  const SuppliersList = [];

  return (
    <>
      <nav
        className={`flex items-center justify-between w-[100%] fixed px-6 h-[70px] bg-ujenzi-lightgreen z-50  shadow-sm shadow-ujenzi-darkgrey ${
          navStyle ? navStyle : ""
        }`}
      >
        <div className="container flex items-center justify-between w-[95%] mx-auto">
          <Link to="/">
            <UjenziLogo />
          </Link>
          <ul
            className={`flex justify-between items-center gap-5 font-normal text-md ${
              primaryNavStyle ? primaryNavStyle : ""
            }`}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeItemStyle : navItemStyle
                }
              >
                <span>Home</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeItemStyle : navItemStyle
                }
                onClick={(e) => e.preventDefault()}
              >
                <NavDropDown dropTitle={"Materials"}>
                  <MenuLarge dropItems={materialsList} />
                </NavDropDown>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeItemStyle : navItemStyle
                }
                onClick={(e) => e.preventDefault()}
              >
                <NavDropDown dropTitle={"Suppliers"}>
                  <MenuLarge dropItems={materialsList} />
                </NavDropDown>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeItemStyle : navItemStyle
                }
                onClick={(e) => e.preventDefault()}
              >
                <NavDropDown dropTitle={"About us"} dropItems={aboutUsList} />
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeItemStyle : navItemStyle
                }
              >
                <span className="p-1 px-2">blog</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeItemStyle : navItemStyle
                }
                onClick={(e) => e.preventDefault()}
              >
                <NavDropDown dropTitle={"Support"} dropItems={supportList} />
              </NavLink>
            </li>
          </ul>
          <ul
            className={`flex justify-between items-center font-medium ${
              secondaryNavStyle ? secondaryNavStyle : ""
            } ${buyersNavbar ? "gap-12 mr-6" : " gap-6 "}`}
          >
            {buyersNavbar ? (
              <>
                <li>
                  <UjenziIcon
                    icon={<RiNotificationFill size={30} />}
                    badgeNumber={6}
                    badgePresent={true}
                    iconStyle={
                      "hover:text-ujenzi-blue text-ujenzi-darkgray h-[40px] w-[40px]"
                    }
                    onClickIconHandler={""}
                  />
                </li>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? activeItemStyle : navItemStyle
                    }
                    onClick={(e) => e.preventDefault()}
                  >
                    <NavDropDown
                      dropTitle={
                        <UjenziAvater
                          imgStyling={"h-[50px] w-[50px] ml-2"}
                          imgSrc={
                            "https://thumbs.dreamstime.com/b/nice-to-talk-smart-person-indoor-shot-attractive-interesting-caucasian-guy-smiling-broadly-nice-to-112345489.jpg"
                          }
                          alt={"user"}
                        />
                      }
                      dropItems={profilelist}
                    />
                  </NavLink>
                </li>

                <li>
                  <UjenziIcon
                    icon={<BsCart4 size={30} />}
                    badgeNumber={12}
                    badgePresent={true}
                    iconStyle={
                      "hover:text-ujenzi-blue text-ujenzi-darkgray h-[40px] w-[40px]"
                    }
                    onClickIconHandler={"/"}
                  />
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/signin" className={navItemStyle}>
                    <UjenziButton
                      buttonStyle={
                        "hover:bg-ujenzi-blue bg-[#ffffff] hover:text-ujenzi-white text-ujenzi-blue"
                      }
                      buttonText={"Sign in"}
                    />
                  </Link>
                </li>
                <li>
                  <Link to={"/signup"}>
                    <UjenziButton buttonText="Register" buttonStyle="" />
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default UjenziNavbar;
