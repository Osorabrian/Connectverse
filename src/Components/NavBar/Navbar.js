import React from "react";
import {NavLink} from 'react-router-dom'

export default function Navbar(){
    return(
        <nav className="navbar bg-primary">
            <div className="container-fluid">
                <NavLink className='navbar-brand'>ConnectVerse</NavLink>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbar">
                    <ul className="navbar-nav">
                        <NavLink to="/" className="nav-link">Feed</NavLink>
                        <NavLink to="/following" className="nav-link">Following</NavLink>
                        <NavLink to="/my_posts" className="nav-link">My Posts</NavLink>
                        <NavLink to="/all_users" className="nav-link">All Users</NavLink>
                        <NavLink to="/my_profile" className="nav-link">PROFILE NAME</NavLink>
                    </ul>
                </div>
                </div>
        </nav>
    )
}