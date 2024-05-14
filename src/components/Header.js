import React from 'react'
import './Header.css'
import { MdPool } from "react-icons/md";
import { MdSportsBar } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { FaBaseball } from "react-icons/fa6";
import { FaUmbrellaBeach } from "react-icons/fa";
import { MdFreeBreakfast } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { FaSmoking } from "react-icons/fa";


const Header = () => {
    return (
        <div className="container-1 flex justify-evenly items-center ">
            <div className="box flex flex-col justify-center items-center w-full h-full cursor-pointer hover:bg-stone-400 pt-2 pb-1"><MdPool />Pool</div>
            <div className="box flex flex-col justify-center items-center w-full h-full cursor-pointer hover:bg-stone-400 pt-2 pb-1"><MdSportsBar />Bar</div>
            <div className="box flex flex-col justify-center items-center w-full h-full cursor-pointer hover:bg-stone-400 pt-2 pb-1"><IoMdHome />Farms</div>
            <div className="box flex flex-col justify-center items-center w-full h-full cursor-pointer hover:bg-stone-400 pt-2 pb-1"><FaBaseball />Playarea</div>
            <div className="box flex flex-col justify-center items-center w-full h-full cursor-pointer hover:bg-stone-400 pt-2 pb-1"><FaUmbrellaBeach />Beachfront</div>
            <div className="box flex flex-col justify-center items-center w-full h-full cursor-pointer hover:bg-stone-400 pt-2 pb-1"> <MdFreeBreakfast />Breakfast</div>
            <div className="box flex flex-col justify-center items-center w-full h-full cursor-pointer hover:bg-stone-400 pt-2 pb-1"> <FaHotel />Resort</div>
            <div className="box flex flex-col justify-center items-center w-full h-full cursor-pointer hover:bg-stone-400 pt-2 pb-1"><FaSmoking />Smoking</div>
        </div>
    )
}

export default Header