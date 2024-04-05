import React from 'react';
import Header from './header';
import { Link } from 'react-router-dom';
function LoginUsr (){
    return (
<>
<Header/>
<div className='flex-1 bg-gray-600'>

<div className="flex items-center justify-center h-screen ">
        <div >
        <h1 className='text-center text-white'>Sign-In</h1>
          <form className="text-center  px-5 py-8  bg-blue-500 text-white rounded-md">
            
            <div >
              <span >Email address </span>
              <br/>
              <input className="bg-white" type="text" id="email" name="email" />
            </div>
            <div  className='mt-1'>
              <span htmlFor="password">Password</span>
              <br/>
              <input className="bg-white" type="password" id="password" name="password" />
            </div>
            <button type="submit" className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md">Login</button>
          </form>
          <Link to="Signupusr">new Signup!</Link>
        </div>
      </div>
      </div>
</>
    );

}
export default LoginUsr