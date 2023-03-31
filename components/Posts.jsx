import Image from "next/image";
import React from "react";
import { AiOutlineClose, AiFillLike } from "react-icons/ai";
import { BsThreeDots, BsFillEmojiHeartEyesFill,BsChatText } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { SlLike } from "react-icons/sl";
import { TfiComments } from "react-icons/tfi";
import pic1 from '../public/photo-16.webp'

const Posts = () => {
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md font-medium mt-6">
      <div className="flex justify-between items-center px-2">
        <div className="flex gap-2  text-gray-500">
          <AiOutlineClose className="cursor-pointer p-2 rounded-full w-10 flex-grow h-10 hover:bg-gray-100" />
          <BsThreeDots className="cursor-pointer p-2 rounded-full w-10 flex-grow h-10 hover:bg-gray-100" />
        </div>
        <div className="flex gap-2">
          <div>
            <h1 className="font-bold text-xl">Taylor Hill Fans</h1>
            <div className=" text-gray-500 text-sm">
              <span className=""> 21 hours . </span>
              <span className="font-bold">Naruto Ozomaki </span>
            </div>
          </div>
          <Image
            className="rounded"
            src="https://avatars.githubusercontent.com/u/111841581?v=4"
            width={50}
            height={50}
          />
        </div>
      </div>
      <p className="p-2 my-2  font-normal ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nisi
        rem atque hic amet alias quos vel sed sunt voluptates. Consequuntur eum
        tempore, asperiores quo ratione commodi explicabo totam facere unde et,
        quibusdam, nam itaque voluptatibus possimus? Perspiciatis sequi eveniet
        numquam ullam magnam optio eum maxime, quibusdam debitis deleniti
        ratione. Reprehenderit sequi voluptatibus ut autem, necessitatibus,
        molestias beatae nesciunt blanditiis optio laudantium nisi debitis quasi
        iusto quis aliquid minima accusamus voluptates fuga mollitia odio
        numquam! Fugiat doloremque, beatae reiciendis et quos nesciunt mollitia
        sit error cum sint perspiciatis maxime laborum autem odio, dolorum quo
        atque? Et sunt aut vitae voluptas.
      </p>
      <Image className="object-cover w-full " src={pic1} alt="/" />
      <div className="flex items-center justify-between gap-2 text-gray-500">
        <div className="flex items-center justify-center gap-1 cursor-pointer">
          <BiComment size={30} />
          <p className="hover:underline pb-1 font-normal  "> 12</p>
        </div>
        <div className="inline-flex gap-1 items-center justify-center cursor-pointer">
          <p className="hover:underline  font-normal "> 112</p>
          <BsFillEmojiHeartEyesFill className="text-yellow-600 p-2 bg-gray-100 h-10 w-10 rounded-full" />
          <AiFillLike className="text-blue-500  p-2 bg-gray-100 h-10 w-10 rounded-full" />
        </div>
      </div>
      <div className="h-[0.5px] my-3 bg-gray-300" />
      <div className="flex items-center text-gray-600">
        <div className="inputIcon">
          <BsChatText className="w-6 h-6" />
          <p className="text-lg sm:text-sm xl:text-base">Send</p>
        </div>
        <div className="inputIcon">
          <TfiComments className="w-6 h-6" />
          <p className="text-lg sm:text-sm xl:text-base">Comment</p>
        </div>
        <div className="inputIcon">
          <SlLike className="w-6 h-6" />
          <p className="text-lg sm:text-sm xl:text-base">Like</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
