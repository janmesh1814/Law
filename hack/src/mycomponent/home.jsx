import { Link } from "react-router-dom";
import Header from "../mycomponent/header";
import React from 'react';
import image from "../asset/img/lawyer.png"
import image1 from "../asset/img/mediator.png"
function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <div className="pt-16">
        <div className="relative flex justify-center items-center h-[450px] bg-white ">
          <div className="text-center px-4 py-6">
           
            <div className="space-x-4">
              <Link to="/profregister">
                <button className="px-4 py-2 bg-white border border-gray-300 text-black rounded">Professional?</button>
              </Link>
              <Link to="/userregister">
                <button className="px-4 py-2 bg-black text-white rounded">Sign up</button>
              </Link></div>
              <div>
             
            </div>
          </div>
          
        </div>
      </div>
      <div className="w-full flex flex-row justify-center">
      <div className="w-[150px] border-1 flex border-gray-400 rounded-3xl h-[50px] ml-[50px] items-center hover:cursor-pointer ">
        <img className="h-6 w-6 rounded-3xl ml-6" src={image} alt="" /> 
        <h6 className="ml-4">Lawyer</h6>
      </div> 
      <div className="w-[150px] border-1 flex border-gray-400 rounded-3xl h-[50px] ml-[50px] items-center hover:cursor-pointer">
      <img className="h-6 w-6 rounded-3xl ml-6" src={image1} alt="" /> 
        <h6 className="ml-4">User</h6>
      </div>
      
      </div>
    </>
  );
}

export default Home;