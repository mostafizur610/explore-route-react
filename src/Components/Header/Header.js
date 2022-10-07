import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <NavLink className={({ isActive }) =>
                    isActive ? 'active' : undefined} to='/home'>Home</NavLink>
                <NavLink to='/product'>Product</NavLink>
                <NavLink to='/friends'>Friends</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/about'>About</NavLink>
            </nav>
            <p>Common Header</p>
        </div>
    );
};

export default Header;