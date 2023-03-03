import React, { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import AOS from 'aos';
import 'aos/dist/aos.css';

// import Navbar from '../General/Navbar';
import landingVideo from '../Media/videos/landing.mp4';
// import coverPhoto from '../Media/images/cover_1.png';

const Landing = () => {
    const { ref: shopRef, inView: shopVisible } = useInView();
    const { ref: landingRef, inView: compressLanding } = useInView();

    useEffect(() => {
        AOS.init();
    });

    return (
        <div className={`landing ${compressLanding} ? animate-landing : ''`} ref={landingRef} >
            <div className="l-video">
                <video className={`landing-video ${compressLanding} ? animate-video : ''`} autoPlay muted>
                    <source src={landingVideo} type="video/mp4"></source>
                </video>
                <div className={`landing-cover ${compressLanding} ? animate-video : ''`} ref={shopRef}>
                    <div className="celine">
                        <h1
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            C
                        </h1>
                        <h1>
                            É
                        </h1>
                        <h1
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            L
                        </h1>
                        <h1
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            I
                        </h1>
                        <h1
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            N
                        </h1>
                        <h1
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            E
                        </h1>
                    </div>
                    <div className={`circle icon ${shopVisible} ? animate-shop : ''`}><h5 className={`text ${shopVisible} ? animate-text : ''`}>SHOP NOW</h5></div>
                </div>
            </div>
        </div>
    );
};

export default Landing;