import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import { Avatar } from "@mui/material";
import Notification from './notification';
const ChatFile = (objectlist) => {
    const [notifications, setNotifications] = useState([]);
    const addNotification = (message, type) => {
            const newNotification = { id: Date.now(), message, type };
            setNotifications([...notifications, newNotification]);
        
            // Remove the notification after 3 seconds
            setTimeout(() => {
              setNotifications(notifications.filter(note => note.id !== newNotification.id));
            }, 3000);
          };

    const {props}=objectlist
   function notify(event){
    event.preventDefault();
    const value = event.target.hiddenValue.value;
    console.log(value)
    addNotification("connect sent","success")
    
   }
    return <>
 {notifications.map(note => (
        <Notification key={note.id} message={note.message} type={note.type} />
      ))}

    {console.log(props)}
    {props&&props.length>0?props.map(prop=>(
        <div key={prop.email} className='pt-35 mb-15 p-15'>
    <form onSubmit={notify} className='border-2 border-black-500 p-2' >
           <div className="bg-white mt-10 p-15 mb-10 rounded-10">
                    <div className="flex mb-10">
                      <Avatar>{prop.FirstName.charAt(0)+prop.LastName.charAt(0)}</Avatar>
                      <div className="ml-10">
                        <h2>{prop.FirstName+prop.LastName}</h2>
                        <span>
                        <p className="text-gray-500 text-xs">{prop.email}</p>
                        <input type="hidden" name="hiddenValue" value={prop} />
                        <Button variant="contained" type='submit'>Connect</Button>
                        </span>
                      </div>
               </div>
          </div>

          </form>
          </div>
        )):<></>}
   </>
}

export default ChatFile