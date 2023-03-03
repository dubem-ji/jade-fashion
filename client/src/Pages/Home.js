import React from 'react';
import Navbar from '../Components/General/Navbar';
import Landing from '../Components/Landing/Landing';


const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Landing />
        </div>
    );
};

export default Home