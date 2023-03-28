import Image from "next/image";
import React from "react";
// import {SignIn} from "next-auth/client"

const Login = () => {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        className="object-contain mb-5"
      />
      <h1
        //   onClick={SignIn}
        className="p-5 bg-blue-500 text-white text-center rounded-full cursor-pointer"
      >
        Login with Facebook
      </h1>
    </div>
  );
};

export default Login;
