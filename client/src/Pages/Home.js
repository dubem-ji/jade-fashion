import React from 'react';

import Landing from '../Components/Home/Landing';
import MenuIcon from '@mui/icons-material/Menu';


const Home = () => {
    return (
        <div className='home'>
           
            <div className="lines">
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
                <div className="four"></div>
                <div className="five"></div>
                <div className="six"></div>
            </div>
            <div className="blocks">

            </div>
            <Landing />

            <h5 id='author'>CREATED BY DJ</h5>
             <div className="menu">
                <MenuIcon id='menu' />
            </div>
        </div>
    );
};

export default Home