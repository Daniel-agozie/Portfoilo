import React from "react";
import icon from "../assets/nft-characters.jpg"
import facebook from "../assets/facebook-icon.png"
import github from "../assets/Github-icon.webp"
import linkedIn from "../assets/linkedIn-icon.png"
import x from "../assets/X-icon.svg"
import dayjs from "dayjs";

const ProfileDetails = () => {

  const date = dayjs().year();

  return ( 
    <div className="">
      <div className="ml-8 mt-5 font-montserrat font-bold text-xl">Daniel</div>
      <div className="flex justify-center items-center h-[60vh] animate-slowfade w-72 mb-5">
        <img src={icon} className="ml-5 rounded-full"/>
      </div>

      <div className="text-sm font-roboto font-bold text-ash ml-6 mt-2">© {date} Daniel. All Rights Reserved</div>

      <div className="w-10 flex gap-4 bg-darkgreen mt-8 ml-10 rounded-full">
        <img src={linkedIn} className="rounded-full hover:border-green-900 border-2 cursor-pointer"/>
        <img src={facebook} className="rounded-full hover:border-green-900 border-2 cursor-pointer"/> 
        <img src={github}  className="rounded-full hover:border-green-900 border-2 cursor-pointer"/>
        <img src={x}  className="rounded-full hover:border-green-900 border-2 cursor-pointer"/> 
      </div>

      <div className="text-sm font-montserrat italic ml-5 mt-3 text-purple-800">With my sleek design and intuitive features, I embody the essence of modern sophisatication</div>
    </div>
  )
}
export default ProfileDetails