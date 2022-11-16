import React, { Fragment, useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { FaSearch, FaUser } from "react-icons/fa";
import UjenziNavbar from "../common/UjenziNavbar";
import UjenziSideNav from "./../common/UjenziSideNav";
import { UjenziNavlink } from "./../common/UjenziNavlink";
import { FiMoreHorizontal } from "react-icons/fi";
import { RiNotificationFill, RiUserFollowLine } from "react-icons/ri";
import UjenziSearch from "./../common/UjenziSearch";
import UjenziButton from "../common/UjenziButton";
import { UjenziCards } from "../common/UjenziCards";
import UjenziFootor from "../common/UjenziFootor";

export const MyAccountPage = () => {
  const notifications = [
    {
      date: Date(),
      sender: "Ujenzi limited",
      notificationtext:
        "visual form of a document or a tpuypeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final  used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. copy is available.",
      amount: 1234,
    },
    {
      date: Date(),
      sender: "Ruiru mabati",
      notificationtext:
        "n publishing and graphic dhe visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      amount: 1134,
    },
    {
      date: Date(),
      sender: "Ruiru mabati",
      notificationtext:
        "n publishing and graphic dhe visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      amount: 1134,
    },
  ];

  return (
    <div className="w-[65%] absolute h-fit pb-10 right-14 grid-cols-1">
      <div className="block">
        <h1 className="text-left font-extrabold text-[40px] ">MY ACCOUNT</h1>
        <div className=" flex w-full mt-10">
          <UjenziSearch
            searchStyle={"h-[50px] w-[600px] mr-2"}
            iconPresent={<FaSearch />}
          />
          <UjenziButton buttonText={"Search"} />
        </div>

        <Tab.Group>
          <Tab.List
            className={
              "border-b pb-3 border-ujenzi-darkgrey mt-8 gap-x-10 flex items-center"
            }
          >
            <Tab className="flex items-center hover:bg-ujenzi-lightgreen py-2 px-4 rounded-md outline-none">
              <h1>Successful orders</h1>
              <span className="text-[14px] font-semibold bg-ujenzi-lightgreen px-2 ml-2 py-0 border border-ujenzi-blue rounded-[100px]">
                {notifications.length}
              </span>
            </Tab>
            <Tab className="flex items-center hover:bg-ujenzi-lightgreen  py-2 px-4 rounded-md outline-none">
              <h1>Pending Orders</h1>
              <span className="text-[14px] font-semibold bg-ujenzi-lightgreen ml-2 px-2 py-0 border border-ujenzi-blue rounded-[100px]">
                2
              </span>
            </Tab>
          </Tab.List>
          <Tab.Panels className={"mt-4"}>
            <Tab.Panel>
              {notifications.map((notification) => (
                <UjenziCards
                  key={
                    notification.sender ||
                    notification.notificationtext ||
                    notification.amount
                  }
                  notificationCard={true}
                  currentCost={notification.amount}
                  description={notification.notificationtext}
                  dateTime={notification.date}
                  title={notification.sender}
                />
              ))}
            </Tab.Panel>

            <Tab.Panel> You have no pending orders</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

function UjenziBuyersDashBoardpage() {
  const links = [
    { linkTitle: "My Account", linkIcon: <FaUser />, to: "", id: 1 },
    {
      linkTitle: "Notification",
      linkIcon: <RiNotificationFill />,
      to: "",
      id: 2,
    },
    { linkTitle: "Following", linkIcon: <RiUserFollowLine />, to: "", id: 3 },
    { linkTitle: "more", linkIcon: <FiMoreHorizontal />, to: "", id: 4 },
  ];

  const [name, setName] = useState("");

  async function getName() {
    try {
      const user = await fetch("http://localhost:3000/dashboard", {
        method: "GET",
        headers: { token: localStorage.authentication_token },
      });
      const parseRes = await user.json();
      setName(parseRes.fullname);
    } catch (error) {}
  }

  useEffect(() => {
    getName();
  });

  return (
      <div>
        <UjenziNavbar buyersNavbar={true} />
        <div className="pl-[10px] pt-[109px] flex">
            <UjenziSideNav
            profileImage={
              "https://thumbs.dreamstime.com/b/nice-to-talk-smart-person-indoor-shot-attractive-interesting-caucasian-guy-smiling-broadly-nice-to-112345489.jpg"
            }
            profileName={"andrew"}
            navLink={
              <>
                {links.map((link) => (
                  <UjenziNavlink
                    key={link.id || link.linkIcon || link.linkTitle || link.to}
                    icon={link.linkIcon}
                    linkTitle={link.linkTitle}
                    to={link.to}
                    navLinkStyle={""}
                  />
                ))}
              </>
            }
          />
          <div className="">
            <MyAccountPage />
          </div>
        </div>

      </div>    
  );
}

export default UjenziBuyersDashBoardpage;
 