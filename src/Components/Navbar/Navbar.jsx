import React from 'react';
import './Navbar.css';
import user from '../../assets/user-1.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='nav-brand'>
                <h2 >Knowledge <span className="brand-span">Station</span> </h2>
            </div>
            <div className='nav-img'>
                <img src={user} alt="user"  />
            </div>
            
        </nav>
    );
};

export default Navbar;