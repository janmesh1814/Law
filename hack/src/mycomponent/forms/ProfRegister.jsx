import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Header from '../header/header';
import axios from "axios";
import './Register.css';
export default function ProfRegister() {
  // initial state
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [prof, setProf] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "https://nodejs-mongodb-auth-app.herokuapp.com/register",
      data: {
        email,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        setRegister(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  const hadleGender = (gender) => {
    setGender(gender);
  }

  return (

    <div className="prof-body">
      <Header />
      <div className="regsign-div">
        <div className="heading">Register</div>
        <Form className="reg-form" onSubmit={(e) => handleSubmit(e)}>

          {/* Name */}
          <Form.Group controlId="formBasicName" id="form-name">
            <div className="form-inputs">
              <div>
                <Form.Label >First Name</Form.Label>
                <input
                  id="name-ip"
                  type="text"
                  name="fname"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  placeholder="Enter First name"

                />
              </div>

              <div>
                <Form.Label >Last Name</Form.Label>
                <input
                  id="name-ip"
                  type="text"
                  name="lname"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  placeholder="Enter Last name"

                />
              </div>
            </div>
          </Form.Group>

          {/* Gender */}
          <Form.Group controlId="formBasicEmail" id="form-gender">
            <Form.Label>Gender </Form.Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <input
              type="radio"
              id="male"
              checked={gender === "male"}
              onChange={() => { hadleGender("male") }}
            />
            <label htmlFor="male">Male</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <input
              type="radio"
              id="female"
              checked={gender === "female"}
              onChange={() => { hadleGender("female") }}
            />
            <label htmlFor="female">Female</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <input
              type="radio"
              id="other"
              checked={gender === "other"}
              onChange={() => { hadleGender("other") }}
            />
            <label htmlFor="other">Other</label>&nbsp;&nbsp;&nbsp;
          </Form.Group>

          {/* email */}
          <Form.Group controlId="formBasicEmail" id="form-email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </Form.Group>

          {/* Phone number */}
          <Form.Group controlId="formBasicEmail" id="form-email">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="number"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Phone No."
            />
          </Form.Group>

          {/* Profession details */}
          <Form.Group controlId="formBasicProfession" id="form-prof">
            <div className="form-inputs">
              <div>
                <Form.Label>Your Profession</Form.Label>&nbsp;&nbsp;&nbsp;
                <input
                  id="name-ip"
                  type="text"
                  name="prof"
                  value={prof}
                  onChange={(e) => setProf(e.target.value)}
                  placeholder="Enter profession"
                />
              </div>

              <div>
                <Form.Label>Your Role</Form.Label>&nbsp;&nbsp;&nbsp;
                <input
                  id="name-ip"
                  type="text"
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="Enter Your role"

                />
              </div>
            </div>
          </Form.Group>

          {/* City */}
          <Form.Group controlId="formBasicProfession" id="form-city">
            <div className="form-inputs">
              <div>
                <Form.Label>City</Form.Label>&nbsp;&nbsp;&nbsp;
                <input
                  id="name-ip"
                  type="text"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter Your city"

                />
              </div>
              <div>
                <Form.Label>PinCode</Form.Label>&nbsp;&nbsp;&nbsp;
                <input
                  id="name-ip"
                  type="number"
                  name="pin"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="Enter City Pin code"

                />
              </div>
            </div>
          </Form.Group>

          {/* password */}
          <Form.Group controlId="formBasicPassword" id="form-password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>


          {/* submit button */}
          <Button
            id="subbtn"
            variant="primary"
            type="submit"
            style={{ margin: "10px 0 10px 0" }}
            onClick={(e) => handleSubmit(e)}
          >
            Register
          </Button>

          {/* display success message */}
          {register ? (
            <p className="text-success">You Are Registered Successfully</p>
          ) : (
            <p className="text-danger">You Are Not Registered</p>
          )}
        </Form>
      </div>
    </div>
  );
}