import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import photoOne from '../Media/images/photocard_1.jpg';
import photoTwo from '../Media/images/photocard_2.jpg';
import photoThree from '../Media/images/photocard_3.jpg';
import photoFour from '../Media/images/photocard_4.png';
import photoFive from '../Media/images/photocard_5.jpg';
import photoSix from '../Media/images/photocard_6.jpg';


gsap.registerPlugin(ScrollTrigger)


const Landing = () => {
    const scrollText = useRef(null);
    const scrollDescrip = useRef(null);
    const triggerScroll = useRef(null);
    const scrollPhone = useRef(null);
    const movePhotoOne = useRef(null);
    const movePhotoTwo = useRef(null);
    const movePhotoThree = useRef(null);
    const movePhotoFour = useRef(null);
    const movePhotoFive = useRef(null);
    const movePhotoSix = useRef(null);
    const showScrolls = useRef(null);
    

    useEffect(() => {
        const el = scrollText.current;
        const descrip = scrollDescrip.current;
        const phone = scrollPhone.current;
        const photoOne = movePhotoOne.current;
        const photoTwo = movePhotoTwo.current;
        const photoThree = movePhotoThree.current;
        const photoFour = movePhotoFour.current;
        const photoFive = movePhotoFive.current;
        const photoSix = movePhotoSix.current;
        const triggerEl = triggerScroll.current;
        const scrolls = showScrolls.current;
        
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

         gsap.to(descrip, {
            opacity: 0,
            scrollTrigger: {
                trigger: el,
                start: "top 20%",
                end: () => `+=${el.offsetWidth/10 }`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
            }
        },)

        gsap.to(phone, {
            top: "0%",
            height: '100%',
            scrollTrigger: {
                trigger: el,
                start: "top 10%",
                end: () => `+=${el.offsetWidth / 4}`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
            }
        },)
        
        gsap.to(scrolls, {
            top: '0%',
            opacity: '1',
            scrollTrigger: {
                trigger: el,
                start: "top 10%",
                end: () => `+=${el.offsetWidth / 4}`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
            }
        },)
        
        gsap.to(photoOne, {
            top: "20%",
            right: '39.8%',
            height: '300px',
            width: '328px',
            scrollTrigger: {
                trigger: el,
                start: "top 20%",
                end: () => `+=${el.offsetWidth / 4}`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
            }
        },)
         
        gsap.to(photoTwo, {
            top: "20%",
            right: '39.8%',
            height: '300px',
            width: '328px',
            scrollTrigger: {
                trigger: el,
                start: "top 20%",
                end: () => `+=${el.offsetWidth / 4}`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
                // markers: true,
            }
        },)

        gsap.to(photoThree, {
            top: "20%",
            right: '39.8%',
            height: '300px',
            width: '328px',
            scrollTrigger: {
                trigger: el,
                start: "top 20%",
                end: () => `+=${el.offsetWidth / 4}`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
            }
        },)
         
        gsap.to(photoFour, {
            top: "20%",
            right: '39.8%',
            height: '300px',
            width: '328px',
            scrollTrigger: {
                trigger: el,
                start: "top 20%",
                end: () => `+=${el.offsetWidth / 4}`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
            }
        },)

        gsap.to(photoFive, {
            top: "20%",
            right: '39.8%',
            height: '300px',
            width: '328px',
            scrollTrigger: {
                trigger: el,
                start: "top 20%",
                end: () => `+=${el.offsetWidth / 4}`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
            }
        },)
         
        gsap.to(photoSix, {
            top: "20%",
            right: '39.8%',
            height: '300px',
            width: '328px',
            scrollTrigger: {
                trigger: el,
                start: "top 20%",
                end: () => `+=${el.offsetWidth / 4}`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
            }
        },)

        // #slides all photos left
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: () => `+=${el.offsetWidth / 4 - 100}`,
                end: () => `+=${el.offsetWidth / 4 + 100}`,
                scrub: 2,
                // markers: true,
            }
        })
        tl.to('.photo', {x: -2000, duration: 5})
    }, [])


    return (
        <div className='landing'>

            {/* #Text */}
            <div ref={triggerScroll} className="scroll-text">
                <h1 ref={scrollText}>Lorem ipsum dolor, sit amet consectetur <span>adipisicing elit?</span></h1>
            </div>
            <h3 ref={scrollDescrip} className='descrip-text'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h3>

            {/* #Phone
            <div className="show-phone">
                <img className='mask' ref={scrollPhone} src={"https://upload.wikimedia.org/wikipedia/commons/3/32/IPhone_X_vector.svg"} alt="" />
            </div>
            <div ref={showScrolls} className="scrolls">
                <div className="empty">

                </div>
                <div className="phone-background">
                    <div className="b-color">

                    </div>
                </div>
                <div className="empty">

                </div>
            </div> */}

            {/* #Photos */}
            <div ref={movePhotoFive} className="photo" id='five'><img src={photoFive} alt="" /></div>
            <div ref={movePhotoSix} className="photo" id="six"><img src={photoSix} alt="" /></div>
            <div ref={movePhotoOne} className="photo" id='one'><img src={photoOne} alt="" /></div>
            <div ref={movePhotoFour} className="photo" id='four'><img src={photoFour} alt="" /></div>
            <div ref={movePhotoThree} className="photo" id='three'><img src={photoThree} alt="" /></div>
            <div ref={movePhotoTwo} className="photo" id='two'><img src={photoTwo} alt="" /></div>

           

            <div className="text-s1">

            </div>
        </div>
    );
};

export default Landing;