import React from 'react';
import Landing from '../Components/Home/Landing';



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

            
            <h5 id='author'>CONTACT DEVELOPER</h5>

            <div className="menu">
                <div className="item"><div className="shop">SHOP</div></div>
                <div className="item"><div className="line">_______</div></div>
                <div className="item"><div className="contact">CONTACT</div></div>
            </div>
     

            <div className="brand">
                <h1>c<span>é</span>line</h1>
            </div>
            <div className="slider">
                <h5>slider</h5>
            </div>
        </div>
    );
};

export default Home