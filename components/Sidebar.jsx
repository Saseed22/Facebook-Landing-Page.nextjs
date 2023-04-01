import React from "react";
import { BsChevronDown, BsCalendarDate, BsClock } from "react-icons/bs";
import {
  AiFillShopping,
  AiOutlineUsergroupAdd,
  AiOutlineDesktop,
} from "react-icons/ai";
import { ImUsers } from "react-icons/im";
import SidebarRow from "./SidebarRow";

const SideBar = () => {

  return (
    <div className="p-2 mt-5 max-w-[600px] lg:min-w-[300px]">
      <SidebarRow Icon={ImUsers} title="Friends" />
      <SidebarRow Icon={AiOutlineUsergroupAdd} title="Groups" />
      <SidebarRow Icon={AiFillShopping} title="Marketplace" />
      <SidebarRow Icon={AiOutlineDesktop} title="Watch" />
      <SidebarRow Icon={BsCalendarDate} title="Events" />
      <SidebarRow Icon={BsClock} title="Memories" />
      <SidebarRow Icon={BsChevronDown} title="See More" />
    </div>
  );
};

export default SideBar;
