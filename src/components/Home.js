import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import './Home.css'


const Home = () => {
  return (
    <div className="container flex w-full items-center px-1  mb-1  ">
      <div className="box w-full font-bold text-pink-500 text-2xl cursor-pointer">Airbnb</div>
      <div className="box w-full   ">
        <div className="box-2 flex justify-evenly items-center py-[0.5] ">
          <div className="box-1 font-semibold cursor-pointer">Anywhere |</div>
          <div className="box-1 font-semibold cursor-pointer">Anyweek |</div>
          <div className="box-1 cursor-pointer">Add Guest |</div>
          <div className="box-1 cursor-pointer  text-pink-500 "><FaSearch /></div>
        </div>
      </div>
      <div className="box w-full font-semibold text-end cursor-pointer flex items-center justify-end gap-1">Login <FaUser /></div>


    </div>
  )
}

export default Home