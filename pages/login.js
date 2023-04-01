import Image from "next/image";
import React from "react";


const Login = () => {
  return (
    <div className="grid place-items-center mt-10">
      <Image
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        className="object-contain mb-5"
      />
      <h1
        
        className="p-5 bg-blue-500 text-white text-center lg:w-1/2 lg:text-2xl rounded-full cursor-pointer"
      >
        Login with Facebook
      </h1>
    </div>
  );
};

export default Login;
