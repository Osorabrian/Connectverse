import React from "react";
import {NavLink} from 'react-router-dom'
import {useDataStore, useTextStore} from '../../State/state'

export default function Navbar(){

    const isLoggedIn = useTextStore((state) => state.setIsLoggedOut)
    const user = useDataStore((state) => state.user)

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
                        <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {user.name}
                        </NavLink>
                        <ul className="dropdown-menu">
                            <NavLink className="dropdown-item nav-link" to="/my_profile">View Profile</NavLink>
                            <NavLink to="/log_in" className="nav-link dropdown-item" onClick={isLoggedIn}>Log Out</NavLink>
                        </ul>
                    </ul>
                </div>
                </div>
        </nav>
    )
}