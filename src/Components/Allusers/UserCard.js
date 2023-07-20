import React from "react";
import {RxAvatar} from 'react-icons/rx'

export default function Usercard(){
    return(
        <div className="row">
            <hr></hr>
                <div className="col-2">
                    <RxAvatar/>
                </div>
                <div className="col-6 flex-column">
                    <h3>Brian Osora</h3>
                    <p>Brayo</p>
                </div>
                <div className="col-4">
                    <button>Follow</button>
                </div>
            <hr></hr>
        </div>
    )
}