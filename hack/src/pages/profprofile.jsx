import { Link } from "react-router-dom";
import Header from "../mycomponent/header/header";
import React from 'react';
function ProfProfile() {
    return (<>
        <Header />

        <div class="container rounded bg-white mt-5 mb-5">
            <div class="row">
                <div class="col-md-3 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span class="font-weight-bold">Law&Order</span><span class="text-black-50">law&order@mail.com</span><span> </span></div>
                </div>
                <div class="col-md-5 border-right">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="text-right">Profile Settings</h4>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" value="" /></div>
                            <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value="" placeholder="surname" /></div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" value="" /></div>
                            <div class="col-md-12"><label class="labels">Address</label><input type="text" class="form-control" placeholder="enter address" value="" /></div>
                            <div class="col-md-12"><label class="labels">Postcode</label><input type="text" class="form-control" placeholder="411041" value="" /></div>
                            <div class="col-md-12"><label class="labels">State</label><input type="text" class="form-control" placeholder="Maharashtra" value="" /></div>
                            <div class="col-md-12"><label class="labels">Area</label><input type="text" class="form-control" placeholder="Vadgaon" value="" /></div>
                            <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="Enter email id" value="" /></div>
                            <div class="col-md-12"><label class="labels">Education</label><input type="text" class="form-control" placeholder="Education" value="" /></div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value="" /></div>
                            <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state" /></div>
                        </div>
                        <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br/>
                            
                            <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value="" /></div>
                    </div>
                </div>
            </div>
        </div>
  </>
  );
}
export default ProfProfile;