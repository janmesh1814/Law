import React from 'react';
import Message from './message';

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      <h2>Users Available for Chat</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Message name={user.name} prof_pic={user.prof_pic}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
