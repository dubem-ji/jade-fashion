import React, { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import AOS from 'aos';
import 'aos/dist/aos.css';

// import landingVideo from '../Media/videos/landing.mp4';

const Landing = () => {
    // const { ref: shopRef, inView: shopVisible } = useInView();
    // const { ref: landingRef, inView: compressLanding } = useInView();

    useEffect(() => {
        AOS.init();
    });

    return (
        <div className='landing'>
            <div className="top">
                <h1>c<span>é</span>line</h1>
            </div>
            <div className="scroll-text">
                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, cumque. Dolorum perferendis quae provident dolorem, qui aspernatur, facilis in praesentium omnis possimus tempore. Temporibus tenetur eius accusamus neque aliquam iure?</h1>
            </div>
            <div className="slider">
                <h5>slider</h5>
            </div>
        </div>
    );
};

export default Landing;