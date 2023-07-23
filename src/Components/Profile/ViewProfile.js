import React from "react";
import './profile.css'
import PerosnalInfo from "./PersonalInfo";
import AddressInfo from "./AddressInfo";
import CompanyInfo from "./CompanyInfo";
import { useDataStore } from "../../State/state";

export default function ViewProfile(){

    const user = useDataStore((state) => state.user)

    return(
        <div id='view-profile'>
        <h1>My Profile</h1>
        <i class="fa-solid fa-user-astronaut fa-5xl" style={{color: '#84c71f'}} id='profile-avatar'></i>
        <hr></hr>
            <PerosnalInfo name={user.name} userName = {user.username} email = {user.email} phone = {user.phone} website={user.website}/>
        <hr></hr>
            <AddressInfo street={user.address.street} suite={user.address.suite} 
            city={user.address.city} zipCode={user.address.zipcode} latitude={user.address.geo.lat} longitude={user.address.geo.lng}/>
        <hr></hr>
            <CompanyInfo name={user.company.name} catchPhrase={user.company.catchPhrase} bs={user.company.bs}/>
        </div>
    )
}