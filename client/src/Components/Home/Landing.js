import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import landingVideo from '../Media/videos/landing.mp4';
import photoOne from '../Media/images/photocard_1.jpg';
import photoTwo from '../Media/images/photocard_2.jpg';
import photoThree from '../Media/images/photocard_3.jpg';
import photoFour from '../Media/images/photocard_4.png';
import photoFive from '../Media/images/photocard_5.jpg';
import photoSix from '../Media/images/photocard_6.jpg';


gsap.registerPlugin(ScrollTrigger)


const Landing = () => {
    const scrollText = useRef(null);
    const triggerScroll = useRef(null);
    const scrollPhone = useRef(null);
    const movePhotoFive = useRef(null);

    useEffect(() => {
        const el = scrollText.current;
        const phone = scrollPhone.current;
        const photoFive = movePhotoFive.current;
        const triggerEl = triggerScroll.current;
        
        gsap.to(triggerEl, {
            x: -2500,
            opacity: 0,
            // duration: 5,
            scrollTrigger: {
                trigger: el,
                start: "top 20%",
                end: () => `+=${el.offsetWidth }`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
                // markers: true,
                // toggleClass: "blur-text",
            }
        },)

        gsap.to(phone, {
            top: "0%",
            scrollTrigger: {
                trigger: el,
                start: "top 10%",
                end: () => `+=${el.offsetWidth / 4}`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
                // markers: true,
            }
        },)

        gsap.to(photoFive, {
            top: "20%",
            right: '40%',
            width: '330px',
            scrollTrigger: {
                trigger: el,
                start: "top 20%",
                end: () => `+=${el.offsetWidth / 4}`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
                // markers: true,
            }
        },)
    }, [])


    return (
        <div className='landing'>
            <div ref={triggerScroll} className="scroll-text">
                <h1 ref={scrollText}>Lorem ipsum dolor, sit amet consectetur <span>adipisicing elit?</span></h1>
            </div>
            <h3 className='descrip-text'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h3>
            <div className="show-phone">
                <img className='mask' ref={scrollPhone} src={"https://upload.wikimedia.org/wikipedia/commons/3/32/IPhone_X_vector.svg"} alt="" />
            </div>
            <div className="pictures">
                <div className="photo" id='five'><img ref={movePhotoFive} src={photoFive} alt="" /></div>
                <div className="photo" id="six"><img src={photoSix} alt="" /></div>
                <div className="photo" id='one'><img src={photoOne} alt="" /></div>
                <div className="photo" id='four'><img src={photoFour} alt="" /></div>
                <div className="photo" id='three'><img src={photoThree} alt="" /></div>
                <div className="photo" id='two'><img src={photoTwo} alt="" /></div>
            </div>
        </div>
    );
};

export default Landing;