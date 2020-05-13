import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return(
        <div className='nav-bar'>
            <Link to='/'>Home</Link>
            <Link to='/resources'>Resources</Link>
            <Link to='about'>About</Link>
        </div>
    )
}