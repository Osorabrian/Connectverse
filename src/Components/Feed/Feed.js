import React from "react";
import Postcard from "./Postcard";

export default function Feed(){
    return(
        <>
        <h1>Feed</h1>
        <div className="row">
            <Postcard/>
            <Postcard/>
            <Postcard/>
            <Postcard/>
            <Postcard/>
        </div>
        </>
    )
}