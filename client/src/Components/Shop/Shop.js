import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';;

const Shop = () => {
    return (
        <div className='shop-section'>
            <div className="top">
                <div className="nav">
                    <div className="menu">
                        <MenuIcon sx={{fontWeight: '400'}} className='icon' />
                        <h3>Menu</h3>
                    </div>
                    <div className="brand">
                        <Link to='/'><h1>jad<span>é</span></h1></Link>
                    </div>
                    <div className="cart">
                        <h3>Bag</h3>
                        <ShoppingBasketOutlinedIcon sx={{fontWeight: '200'}} className='icon' />
                    </div>
                </div>
                <div className="product-title">
                    <h1>Jackets</h1>
                </div>
            </div>
            <div className="product-items">
                <div className="stack-small">
                    <div className="item" id='one'></div>
                    <div className="item" id='two'></div>
                </div>
                <div className="stack-big">
                    <div className="item" id='three'></div>
                    <div className="item" id='four'></div>
                </div>
            </div>
        </div>
    );
};

export default Shop;