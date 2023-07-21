import React from "react";
import {NavLink} from 'react-router-dom'
import {useStore} from '../../State/state'

export default function Navbar(){

    const isLoggedIn = useStore((state) => state.setIsLoggedOut)

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
                        <NavLink to="/log_in" className="nav-link">Log In</NavLink>
                        <NavLink to="/my_profile" className="nav-link">PROFILE NAME</NavLink>
                        <NavLink to="/log_in" className="nav-link" onClick={isLoggedIn}>Log Out</NavLink>
                    </ul>
                </div>
                </div>
        </nav>
    )
}