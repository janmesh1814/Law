import React from 'react';
function Message({name,prof_pic}){

    return (
        
<>
            <img src={prof_pic} alt={name} className="user-profile-pic" />
            <span>{name}</span>
            {/* Add onClick event handler to initiate chat */}
            <button onClick={() => initiateChat(user.id)}>Chat</button>
</>
    );
}
export default Message;