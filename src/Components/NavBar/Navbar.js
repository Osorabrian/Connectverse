import React from "react";
import {NavLink} from 'react-router-dom'
import {useDataStore, useTextStore} from '../../State/state'

export default function Navbar(){

    const isLoggedIn = useTextStore((state) => state.setIsLoggedOut)
    const user = useDataStore((state) => state.user)
    const login = useTextStore(state => state.isLoggedIn)

    return(
        <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
            <NavLink className='navbar-brand' to='/'>ConnectVerse</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink to="/" className="nav-link">Feed</NavLink>
                </li>
                {
                    login && (
                        <>
                            <li className="nav-item">
                            <NavLink to="/my_posts" className="nav-link">My Posts</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/all_users" className="nav-link">All Users</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/following" className="nav-link">Following</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {user.name}
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item nav-link" to="/my_profile">View Profile</NavLink></li>
                                <li><NavLink to="/log_in" className="nav-link dropdown-item" onClick={isLoggedIn}>Log Out</NavLink></li>
                            </ul>
                            </li>
                        </>
                    )
                }
                {
                    !login && (
                        <>
                            <li><NavLink to="/log_in" className="nav-link">Log In</NavLink></li>
                        </>
                    )
                }

            </ul>
            </div>
        </div>
        </nav>
    )
}