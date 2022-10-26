import React from "react";
import { Tab } from "@headlessui/react";
import { FaSearch, FaUser } from "react-icons/fa";
import UjenziNavbar from "../common/UjenziNavbar";
import UjenziSideNav from "./../common/UjenziSideNav";
import { UjenziNavlink } from "./../common/UjenziNavlink";
import { FiFilter, FiMoreHorizontal } from "react-icons/fi";
import { RiNotificationFill, RiUserFollowLine } from "react-icons/ri";
import UjenziSearch from "./../common/UjenziSearch";
import UjenziButton from "../common/UjenziButton";
import { UjenziCards } from "../common/UjenziCards";

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
      amount: 1234,
    },
    {
      date: Date(),
      sender: "Thika road bricks",
      notificationtext:
        "n rm of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      amount: 1234,
    },
    {
      date: Date(),
      sender: "Simba ",
      notificationtext:
        "nisual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      amount: 1234,
    },
  ];

  return (
    <div className="w-[65%] h-[600px] mt-[90px] absolute right-14 grid-cols-1">
      <div className="block pb-11">
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
    { linkTitle: "My Account", linkIcon: <FaUser />, to: "" },
    { linkTitle: "Notification", linkIcon: <RiNotificationFill />, to: "" },
    { linkTitle: "Following", linkIcon: <RiUserFollowLine />, to: "" },
    { linkTitle: "more", linkIcon: <FiMoreHorizontal />, to: "" },
  ];

  return (
    <div className=" overflow-x-hidden flex">
      <UjenziNavbar buyersNavbar={true} />
      <div className="w-[100vw] h-[1000px] pl-[10px] pt-[90px] overflow-x-hidden flex">
        <div className="w-fit h-fit">
          <UjenziSideNav
            profileImage={
              "https://thumbs.dreamstime.com/b/nice-to-talk-smart-person-indoor-shot-attractive-interesting-caucasian-guy-smiling-broadly-nice-to-112345489.jpg"
            }
            profileName={"Alex Ma-gish"}
            navLink={
              <>
                {links.map((link) => (
                  <UjenziNavlink
                    icon={link.linkIcon}
                    linkTitle={link.linkTitle}
                    to={link.to}
                    navLinkStyle={""}
                  />
                ))}
              </>
            }
          />
        </div>
      </div>
      <div>
        <MyAccountPage />
      </div>
    </div>
  );
}

export default UjenziBuyersDashBoardpage;
