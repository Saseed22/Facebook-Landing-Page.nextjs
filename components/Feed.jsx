import React from "react";
import InputBox from "./InputBox";
import Stories from "./Stories";
import Posts from "./Posts";

function Feed({ posts }) {
  return (
    <div className=" h-screen pb-44 pt-6 mr-4 flex-grow overflow-y-auto scrollbar-hide">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        <InputBox />
        <Posts  />
      </div>
    </div>
  );
}

export default Feed;