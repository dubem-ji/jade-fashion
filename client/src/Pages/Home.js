import React from 'react';
import Navbar from '../Components/General/Navbar';
import Landing from '../Components/Home/Landing';
import Main from '../Components/Home/Main';
import Poster from '../Components/Home/Poster';
import Maintext from '../Components/Home/Maintext';
import Clothstyles from '../Components/Home/Clothstyles';


const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Landing />
            <Main />
            <Poster />
            <Maintext />
            <Clothstyles />
        </div>
    );
};

export default Home