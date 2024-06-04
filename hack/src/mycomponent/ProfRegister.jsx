import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Header from './header';
import axios from "axios";
import './Prof.css';
import { Navigate, useNavigate } from "react-router-dom";
export default function ProfRegister() {
  // initial state
  let navigate=useNavigate()
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setgender] = useState("");
  const [email, setEmail] = useState("");
  const [prof, setProf] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [register, setRegister] = useState(false);
useEffect(()=>{
  let stored=localStorage.getItem('jwtToken');
  let date=localStorage.getItem('dateNow');
  if(stored){
    const storedTime = new Date(date).getTime();
  const currentTime = new Date().getTime();
  const differenceInHours = (currentTime - storedTime) / (1000 * 60 * 60);
  if(differenceInHours>8)
    {
      localStorage.removeItem('dateNow');
      localStorage.removeItem('jwtToken');
    }
    else{
      navigate('/');
    }
  }
  
},[])
  const handleSubmit = async(e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    console.log(fname,lname,gender,email,prof,role,password,city,pin,register);
    // set configurations
   

    // make the API call
    const res=await axios.post("http://localhost:8080/LegalServices/register",
      {
        "FirstName": fname  ,
        "LastName": lname,
        "email": email,
        "password": password,
        "PhoneNo": pin,
        "Gender": gender,
        "City": city,
        "Profession": prof,
        "Role": role
    }
   
    
    )
    if(res.status===200)
    { const token=res.data.token
      const dateNow = new Date().toISOString();
    localStorage.setItem('jwtToken', token);
    localStorage.setItem('dateNow', dateNow);
    navigate('/')
    }
    console.log(res);
     
  };

  const hadleGender = (gender) => {
    setgender(gender);
  }

  return (

    <>
     <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <div className="pt-20 pb-5 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-xl"> {/* Increased max width to max-w-xl */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Register</h1>
          </div>
          <Form onSubmit={(e) => handleSubmit(e)}>
            {/* Name */}
            <Form.Group controlId="formBasicName" className="mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Form.Label>First Name</Form.Label>
                  <input
                    type="text"
                    name="fname"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    placeholder="Enter First name"
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <Form.Label>Last Name</Form.Label>
                  <input
                    type="text"
                    name="lname"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    placeholder="Enter Last name"
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
              </div>
            </Form.Group>
  
  
            {/* Gender */}
            <Form.Group controlId="formBasicEmail" id="form-gender">
              <Form.Label>Gender </Form.Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  
              <input className="m-2"
                type="radio"
                id="male"
                checked={gender === "male"}
                onChange={() => { hadleGender("male") }}
              />
              <label htmlFor="male">Male</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  
              <input className="m-2"
                type="radio"
                id="female"
                checked={gender === "female"}
                onChange={() => { hadleGender("female") }}
              />
              <label htmlFor="female">Female</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  
              <input className="m-2"
                type="radio"
                id="other"
                checked={gender === "other"}
                onChange={() => { hadleGender("other") }}
              />
              <label htmlFor="other">Other</label>&nbsp;&nbsp;&nbsp;
            </Form.Group>
  
            {/* email */}
            <Form.Group controlId="formBasicEmail" className="mb-4">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  className="w-full px-3 py-2 border rounded"
                />
              </Form.Group>
  
              {/* Profession Details */}
              <Form.Group controlId="formBasicProfession" className="mb-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Form.Label>Your Profession</Form.Label>
                    <input
                      type="text"
                      name="prof"
                      value={prof}
                      onChange={(e) => setProf(e.target.value)}
                      placeholder="Enter profession"
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>
                  <div>
                    <Form.Label>Your Role</Form.Label>
                    <input
                      type="text"
                      name="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="Enter Your role"
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>
                </div>
              </Form.Group>
  
              {/* City */}
              <Form.Group controlId="formBasicCity" className="mb-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Form.Label>City</Form.Label>
                    <input
                      type="text"
                      name="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Enter Your city"
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>
                  <div>
                    <Form.Label>PinCode</Form.Label>
                    <input
                      type="number"
                      name="pin"
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                      placeholder="Enter City Pin code"
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>
                </div>
              </Form.Group>
  
              {/* Password */}
              <Form.Group controlId="formBasicPassword" className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-3 py-2 border rounded"
                />
              </Form.Group>
  
              {/* Submit Button */}
              <Button
                variant="primary"
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
              >
                Register
              </Button>
  
              {/* Display Success Message */}
              {register ? (
                <p className="text-green-500 mt-4">You Are Registered Successfully</p>
              ) : (
                <p className="text-red-500 mt-4">You Are Not Registered</p>
              )}
            </Form>
          </div>
        </div>

    </>
  );
}