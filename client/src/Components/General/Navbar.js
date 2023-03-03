import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

const Navbar = () => {
    return (
        <div className='nav'>
            <div className="nav-box">
                <div className="menu icon">
                    <MenuIcon /> 
                    <h4>Menu</h4>
                </div>
                <div className="brand icon">
                    <h1>CÉLINE</h1>
                </div>
                <div className="cart icon">
                    <ShoppingBasketOutlinedIcon />
                </div>
            </div>
        </div>
    );
};

export default Navbar