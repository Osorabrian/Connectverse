import React from "react";
import './profile.css'
import PerosnalInfo from "./PersonalInfo";
import AddressInfo from "./AddressInfo";
import CompanyInfo from "./CompanyInfo";

export default function ViewProfile(){
    return(
        <>
        <h1>My Profile</h1>
        <i class="fa-solid fa-user-astronaut fa-5xl" style={{color: '#84c71f'}} id='profile-avatar'></i>
        <hr></hr>
            <PerosnalInfo/>
        <hr></hr>
            <AddressInfo/>
        <hr></hr>
            <CompanyInfo/>
        </>
    )
}