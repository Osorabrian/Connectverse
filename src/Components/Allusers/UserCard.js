import React,{useState} from "react";
import {RxAvatar} from 'react-icons/rx'
import {AiOutlinePlus} from 'react-icons/ai'
import './User.css'

export default function Usercard({name, userName}){

    const [following, setFollowing] = useState(true)

    function handleFollow(){
       return setFollowing(false)
    }

    function handleUnfollow(){
        return setFollowing(true)
    }

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
                    {
                        following && (
                           <button className="btn btn-primary mt-2" id='follow-buton' onClick={handleFollow}>Follow  <AiOutlinePlus/></button>
                        )
                    }
                    {
                        !following && (
                           <button className="btn border-primary text-primary mt-2" id='unfollow-buton' onClick={handleUnfollow}>Following...</button>
                        )
                    }
                </div>
        </div>
    )
}