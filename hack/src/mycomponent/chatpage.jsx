import Header from "./header";
import React from 'react';
import { useState, useEffect } from "react";


import axios from "axios";
import ChatFile from "./chatfile";
 
function ChatPage() {
  const dummyData = [
    {
      FirstName: "John",
      LastName: "Doe",
      email: "john@example.com",
      password: "password123",
      PhoneNo: 1234567890,
      Gender: "Male",
      City: "New York",
      Profession: "Engineer",
      Role: "Admin"
    },
    {
      FirstName: "Jane",
      LastName: "Smith",
      email: "jane@example.com",
      password: "password456",
      PhoneNo: 9876543210,
      Gender: "Female",
      City: "Los Angeles",
      Profession: "Doctor",
      Role: "User"
    }
    // Add more objects as needed
  ];
    const [search,setSearch]=useState('');
    const[filterData,setfilterData]=useState([]);


function searchsubmit(e){
  e.preventDefault()
  for(let i=0;i<filterData.length;i++){
    console.log(filterData[i].City,'death',search,filterData[i].City.includes(search))
  }
let filter=filterData.filter(item =>
  item.City.includes(search)
);

setfilterData(filter);

}
useEffect(()=>{
  //axios.get('https://localhost8080/query').then(response=>{setData(response)});
 
if(filterData.length===0)
  setfilterData(dummyData)
console.log(dummyData,"by manas");
},[])


return (
<>

<Header/>
<form onSubmit={searchsubmit} className="max-w-md mx-auto">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" value={search} onChange={(e)=>{setSearch(e.target.value) }} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by location" required />
        <button type="submit"   className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

<ChatFile props={filterData}/>
{
/*
<div className="bg-white p-15 mb-10 rounded-10">
          <div className="flex mb-10">
            <Avatar>{nm}</Avatar>
            <div className="ml-10">
              <h2>{name}</h2>
              <p className="text-gray-500 text-xs">{Job}</p>
            </div>
     </div>
</div> */}


</>
);
}
export default ChatPage;