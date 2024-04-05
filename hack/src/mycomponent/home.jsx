import { Link } from "react-router-dom";
import Header from "./header";
import React from 'react';
function Home() {
    return (<>
    <Header/>
    <div className="bg-gray-600">
    <div className="flex items-center justify-center h-screen">

        <div className="text-center">
        <Link to="/page1">
          <button className="mx-2 my-2 px-8 py-2 bg-blue-500 text-white rounded-md">Professional</button>
          </Link>
      <br/>
      <Link to="/page2">
          <button className="mx-2 my-2 px-8 py-2 bg-blue-500 text-white rounded-md">User</button>
          </Link>

        </div>
      </div>
      </div>

    </>
    );
}
export default Home;