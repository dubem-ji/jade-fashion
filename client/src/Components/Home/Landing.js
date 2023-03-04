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
        <div>
            
        </div>
    );
};

export default Landing;