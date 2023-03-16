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
    // #Main variable
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
    // #Jackets
    const showJone = useRef(null);
    const showJtwo = useRef(null);
    const showJthree = useRef(null);
    const showJfour = useRef(null);
    const showJTone = useRef(null);
    const showJTtwo = useRef(null);
    const showJtitle = useRef(null);
    // #Jean
    const showJfive = useRef(null);
    const showJsix = useRef(null);
    const showJseven = useRef(null);
    const showJeight = useRef(null);
    const showJnine = useRef(null);
    const showJten = useRef(null);
    const showJeleven = useRef(null);
    const showJtwelve = useRef(null);
    
    

    useEffect(() => {
        // #Main variable
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
        // #Main page animation
        gsap.to(triggerEl, {
            x: -2500,
            opacity: 0,
            // duration: 5,
            scrollTrigger: {
                trigger: el,
                start: "top 20%",
                end: () => `+=${el.offsetWidth/1.5 }`,
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

        // *slides all photos left
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: () => `+=${el.offsetWidth / 4 - 100}`,
                end: () => `+=${el.offsetWidth / 4 + 100}`,
                scrub: 2,
                // markers: true,
            }
        })
        tl.to('.photo', { x: -2000, duration: 5 })    
        

        // #Jackets variable
        const jOne = showJone.current;
        const jTwo = showJtwo.current;
        const jThree = showJthree.current;
        const jFour = showJfour.current;
        const jtOne = showJTone.current;
        const jtTwo = showJTtwo.current;
        const jTitle = showJtitle.current;
        // #Jacket page animation
        gsap.to(jOne, {
            top: "0%",
            height: '100%',
            scrollTrigger: {
                trigger: el,
                start: () => `800`,
                end: () => `1800`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
                // markers: true,
            }
        },);
        gsap.to(jTitle, {
            opacity: '0.8',
            scrollTrigger: {
                trigger: el,
                start: () => `+=${el.offsetWidth / 100 + 1000}`,
                end: () => `+=${el.offsetWidth / 100 + 4000}`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
                // markers: true,
            }
        },);
        gsap.to(jtOne, {
            top: "10%",
            height: '100%',
            scrollTrigger: {
                trigger: el,
                start: () => `+=${el.offsetWidth / 10}`,
                end: () => `+=${el.offsetWidth / 100 + 1000}`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
                // markers: true,
            }
        },);

          gsap.to(jTwo, {
            top: "0%",
            height: '100%',
            scrollTrigger: {
                trigger: el,
                start: () => `1800`,
                end: () => `2800`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
                // markers: true,
            }
          },)
        gsap.to(jThree, {
            top: "0%",
            height: '100%',
            scrollTrigger: {
                trigger: el,
                start: () => `2800`,
                end: () => `3800`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
                // markers: true,
            }
        },);
        gsap.to(jtOne, {
            top: "10%",
            height: '100%',
            opacity: '0',
            scrollTrigger: {
                trigger: el,
                start: () => `+=${el.offsetWidth / 100 + 3500}`,
                end: () => `+=${el.offsetWidth / 100 + 4000}`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
                // markers: true,
            }
        },);
        gsap.to(jtTwo, {
            top: "10%",
            height: '100%',
            scrollTrigger: {
                trigger: el,
                start: () => `+=${el.offsetWidth / 100 + 3500}`,
                end: () => `+=${el.offsetWidth / 100 + 4000}`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
                // markers: true,
            }
        },);

        gsap.to(jFour, {
            top: "0%",
            height: '100%',
            scrollTrigger: {
                trigger: el,
                start: () => `3800`,
                end: () => `4800`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
                // markers: true,
            }
        },);

        const jFive = showJfive.current;
        const jSix = showJsix.current;
        const jSeven = showJseven.current;
        const jEight = showJeight.current;
        const jNine = showJnine.current;
        const jTen = showJten.current;
        const jEleven = showJeleven.current;
        const jTwelve = showJtwelve.current;

        gsap.to(jFive, {
            top: "0%",
            height: '100%',
            scrollTrigger: {
                trigger: el,
                start: () => `4800`,
                end: () => `5800`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
                // markers: true,
            }
        },);

        gsap.to(jSix, {
            top: "0%",
            height: '100%',
            scrollTrigger: {
                trigger: el,
                start: () => `5800`,
                end: () => `6800`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
                // markers: true,
            }
        },);

        gsap.to(jSeven, {
            top: "0%",
            height: '100%',
            scrollTrigger: {
                trigger: el,
                start: () => `6800`,
                end: () => `7800`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
                // markers: true,
            }
        },);
        gsap.to(jEight, {
            top: "0%",
            height: '100%',
            scrollTrigger: {
                trigger: el,
                start: () => `7800`,
                end: () => `8800`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
                // markers: true,
            }
        },);
        gsap.to(jNine, {
            top: "0%",
            height: '100%',
            scrollTrigger: {
                trigger: el,
                start: () => `8800`,
                end: () => `9800`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
                // markers: true,
            }
        },);
        gsap.to(jTen, {
            top: "0%",
            height: '100%',
            scrollTrigger: {
                trigger: el,
                start: () => `9800`,
                end: () => `10800`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
                // markers: true,
            }
        },);
        gsap.to(jEleven, {
            top: "0%",
            height: '100%',
            scrollTrigger: {
                trigger: el,
                start: () => `10800`,
                end: () => `11800`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
                // markers: true,
            }
        },);
          gsap.to(jTwelve, {
            top: "0%",
            height: '100%',
            scrollTrigger: {
                trigger: el,
                start: () => `11800`,
                end: () => `12800`,
                scrub: true,
                toggleActions: 'restart pause reverse complete',
                // markers: true,
            }
        },);
    }, [])


    return (
        <>
            <div className='landing'>
                {/* #Text */}
                <div ref={triggerScroll} className="scroll-text">
                    <h1 ref={scrollText}>Fashion gone rogue with jad<span>é</span> - 2023 collection</h1>
                </div>
                <h3 ref={scrollDescrip} className='descrip-text'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </h3>

                {/* #Phone */}
                {/* <div className="show-phone">
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

            <div className='jacket'>
                <div className="content">
                    <div ref={showJtitle} className="title">
                        <h1>Rogué</h1>
                    </div>
                    <div className="j-images">
                        {/* jacket */}
                        <div ref={showJone} className="j-photo" id='j-one'></div>
                        <div ref={showJtwo} className="j-photo" id='j-two'></div>
                        <div ref={showJthree} className="j-photo" id='j-three'></div>
                        <div ref={showJfour} className="j-photo" id='j-four'></div>
                        {/* jean */}
                        <div ref={showJfive} className="j-photo" id='j-five'></div>
                        <div ref={showJsix} className="j-photo" id='j-six'></div>
                        {/* boots */}
                        <div ref={showJseven} className="j-photo" id='j-seven'></div>
                        <div ref={showJeight} className="j-photo" id='j-eight'></div>
                        <div ref={showJnine} className="j-photo" id='j-nine'></div>
                        {/* hats */}
                        <div ref={showJten} className="j-photo" id='j-ten'></div>
                        <div ref={showJeleven} className="j-photo" id='j-eleven'></div>
                        {/* glasses */}
                        <div ref={showJtwelve} className="j-photo" id='j-twelve'></div>
                    </div>
                    <div className="texts">
                        <div className="text" id='jt-one' ref={showJTone}>
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, doloribus beatae odio culpa nam in ab nostrum! Perferendis, quos eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia earum nobis a id itaque cupiditate! Temporibus id pariatur ex?</p>
                        </div>
                        <div className="text" id='jt-two' ref={showJTtwo}>
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, doloribus beatae odio culpa nam in ab nostrum! Perferendis, quos eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsam fugit molestias alias blanditiis impedit.</p>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    );
};

export default Landing;