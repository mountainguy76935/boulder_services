import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return(
        <div className='nav-bar'>
            <Link to='/'>Home</Link>
            <br />
            <Link to='/resources'>Resources</Link>
            <br />
            <Link to='/about'>About</Link>
            <br />
            <Link to='/admin-resources'>Admin Resources</Link>
            <br />
            <Link to='/login'>Login</Link>
            <br />
            <Link to='/register'>Register</Link>
        </div>
    )
}