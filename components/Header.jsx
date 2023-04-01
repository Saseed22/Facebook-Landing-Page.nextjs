import Image from "next/image";
import { BsFacebook, BsSearch, BsFlagFill,BsBellFill,BsChatDotsFill,BsChevronDown,BsFillGridFill } from "react-icons/bs";
import { AiFillHome, AiFillPlayCircle, AiFillShopping } from "react-icons/ai";
import { MdGroups } from "react-icons/md";
import HeaderIcon from "./HeaderIcon";
import Link from "next/link";


const Header = () => {




  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      <div className="flex items-center gap-x-2">
        <Link href="/login">
        <BsFacebook size={40} className="text-blue-700 cursor-pointer" />
        </Link>
        <div className="flex items-center gap-x-1 bg-gray-100 p-2 rounded-full">
          <BsSearch className="text-gray-600" />
          <input
            className="bg-transparent hidden md:inline-flex items-center ml-1 outline-none placeholder-gray-500"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      <div className="flex items-center justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={AiFillHome} />
          <HeaderIcon  Icon={BsFlagFill} />
          <HeaderIcon  Icon={AiFillPlayCircle} />
          <HeaderIcon  Icon={AiFillShopping} />
          <HeaderIcon  Icon={MdGroups} />
        </div>
      </div>

      <div className="flex items-center justify-end sm:space-x-2">
      <Image
          onClick={() => signOut()}
          className="rounded-full cursor-pointer mx-2"
          src="https://avatars.githubusercontent.com/u/111841581?v=4"
          width="30"
          height="30"
        />
        <p className="font-semibold pr-3 whitespace-nowrap">
          Saeed Ahmadi
        </p>
        <BsFillGridFill className="icon"/>
        <BsChatDotsFill className="icon"/>
        <BsBellFill className="icon"/>
        <BsChevronDown className="icon"/>
      </div>
    </div>
  );
};

export default Header;
