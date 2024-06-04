import { useEffect, useState } from "react"
import { Avatar } from "@mui/material"

export default function Pending(){
    const dummyData=[
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
    ]
    const [notes,setNotes]=useState([])
    useEffect(()=>{
        setNotes(dummyData)
    },[])
    return <>

        {notes.length!==0?notes.map((note)=>(
            <div key={note.email} className='pt-35 mb-15 p-15'>

           <div className="bg-white mt-10 p-15 mb-10 rounded-10">
                    <div className="flex mb-10">
                      <Avatar>{note.FirstName.charAt(0)+note.LastName.charAt(0)}</Avatar>
                      <div className="ml-10">
                        <h2>{note.FirstName+note.LastName}</h2>
                        <span>
                        <p className="text-gray-500 text-xs">{note.email}</p>
                        <input type="hidden" name="hiddenValue" value={note} />

                        <p className="text-gray-500 text-xs"   >Pending</p>

                        </span>

                      </div>
               </div>
          </div>


          </div>
        )):<></>}
    </>
}