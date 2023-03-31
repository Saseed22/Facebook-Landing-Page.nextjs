import React from 'react'
import { BsThreeDots, BsSearch, BsCameraReelsFill } from "react-icons/bs"
import Image from "next/image";

const Menubar = () => {
  return (
    <div className="hidden lg:min-w-[300px]  lg:block p-2 mt-5  ">
          <div className='flex items-start justify-between w-full px-4'>
              <div className='font-bold text-xl'>Contacts</div>
              <div className='flex items-center gap-x-2'>
                  <BsThreeDots   className='cursor-pointer p-2 w-8 h-8 rounded hover:bg-gray-200  '/>
                  <BsSearch   className='cursor-pointer p-2 w-8 h-8 rounded hover:bg-gray-200  '/>
                  <BsCameraReelsFill  className='cursor-pointer p-2 w-8 h-8 rounded hover:bg-gray-200  '/>
              </div>
              
          </div>
          <ul className=' '>
                  <li className='flex items-center justify-evenly my-5 hover:bg-gray-200 rounded-xl cursor-pointer'>
                      <h1 className='text-xl font-bold'>Elon Musk</h1>
                  <Image
                      className='rounded-2xl'
                          width={40}
                          height={40}
                          src="https://links.papareact.com/kxk" alt="" />
              </li>
              <li className='flex items-center justify-evenly my-5  hover:bg-gray-200 rounded-xl cursor-pointer'>
                      <h1 className='text-xl font-bold'> Jeff Bezoz</h1>
                  <Image
                      className='rounded-2xl'
                          width={40}
                          height={40}
                          src="https://links.papareact.com/zvy" alt="" />
              </li>
              <li className='flex items-center justify-evenly my-5  hover:bg-gray-200 rounded-xl cursor-pointer'>
                      <h1 className='text-xl font-bold'>Mark raf</h1>
                  <Image
                      className='rounded-2xl'
                          width={40}
                          height={40}
                          src="https://links.papareact.com/snf"alt="" />
              </li>
              <li className='flex items-center justify-evenly my-5  hover:bg-gray-200 rounded-xl cursor-pointer'>
                      <h1 className='text-xl font-bold'>Bill Gates</h1>
                  <Image
                      className='rounded-2xl'
                          width={40}
                          height={40}
                          src="https://links.papareact.com/zvy"alt="" />
              </li>
              <li className='flex items-center justify-evenly my-5  hover:bg-gray-200 rounded-xl cursor-pointer'>
                      <h1 className='text-xl font-bold'>Vashidas</h1>
                  <Image
                      className='rounded-2xl'
                          width={40}
                          height={40}
                          src="https://links.papareact.com/4u4"alt="" />
              </li>
              
              </ul>
    </div>
  )
}

export default Menubar