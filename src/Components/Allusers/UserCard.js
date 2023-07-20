import React from "react";
import {RxAvatar} from 'react-icons/rx'
import {AiOutlinePlus} from 'react-icons/ai'
import './User.css'

export default function Usercard({name, userName}){
    return(
        <div className="row">
            <hr></hr>
                <div className="col-2">
                    <RxAvatar id='avatar' className="justify-content-center ms-3 mt-3"/>
                </div>
                <div className="col-6">
                    <h5>{name}</h5>
                    <p>{userName}</p>
                </div>
                <div className="col-4">
                    <button className="btn btn-primary mt-2" id='follow-buton'>Follow  <AiOutlinePlus/></button>
                </div>
        </div>
    )
}