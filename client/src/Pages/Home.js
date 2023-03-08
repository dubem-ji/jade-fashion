import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Landing from '../Components/Home/Landing';

import landingVideo from '../Components/Media/videos/landing.mp4';
import InstagramIcon from '@mui/icons-material/Instagram';
import EastIcon from '@mui/icons-material/East';
import TwitterIcon from '@mui/icons-material/Twitter';;


gsap.registerPlugin(ScrollTrigger)

const Home = () => {

    const toggleBackground = useRef(null);
    const toggleFooter = useRef(null);
    const triggerBrown = useRef(null);
    const triggerGrey = useRef(null);
    const hideText = useRef(null);

    useEffect(() => {
        const backgroundColor = toggleBackground.current;
        const footer = toggleFooter.current;
        const brownTrigger = triggerBrown.current;
        const greyTrigger = triggerGrey.current;
        const textHide = hideText.current;
            
        gsap.to(backgroundColor, {
            background: '#513233',
            color: '#FFFFFF',
            scrollTrigger: {
                trigger: brownTrigger,
                start: 'top 90%',
                end: 'top 0%',
                scrub: true,
                toggleActions: 'restart pause reverse complete',
                // markers: true,
            }
        },)

        gsap.to(backgroundColor, {
            background: '#202322',
            color: '#FFFFFF',
            scrollTrigger: {
                trigger: greyTrigger,
                start: 'top 40%',
                end: 'top 0%',
                scrub: true,
                toggleActions: 'restart pause reverse complete',
                // markers: true,
            }
        },)

        gsap.to(footer, {
            bottom: '0%',
            height: '30vh',
            scrollTrigger: {
                trigger: greyTrigger,
                start: 'top 100%',
                end: 'top 80%',
                scrub: 1,
                toggleActions: 'restart pause reverse complete',
                // markers: true,
            }
        },)

        gsap.to(textHide, {
            display: 'none',
            scrollTrigger: {
                trigger: greyTrigger,
                start: 'top 50%',
                end: 'top 30%',
                scrub: 1,
                toggleActions: 'restart pause reverse complete',
                markers: true,
            }
        },)

    }, [])

    return (
        <div className='home'>
            <div className="blocks">
                <div id="one">
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                </div>
                <div id="two">
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                </div>
                <div id="three">
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                </div>
                <div id="four">
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                </div>
                <div id="five">
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                </div>
                <div id="six">
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                </div>
            </div>

            <div className="lines">
                <div className="one">
                </div>
                <div className="two"></div>
                <div className="three"></div>
                <div className="four"></div>
                <div className="five"></div>
                <div className="six"></div>
            </div>

              {/* #Video */}
            <div ref={triggerGrey} className="video">
                <div className="v-space">
                    <video loop autoPlay muted>
                        <source src={landingVideo} type="video/mp4"></source>
                    </video>
                </div>
            </div>

            <div ref={toggleBackground} className="overtone"></div>
            
            
            
            
            <Landing />
            {/* <div className="landmark" id="l1"></div>
            <div className="landmark" id="l2"></div>
            <div className="landmark" id="l3"></div>
            <div className="landmark" id="l4"></div>
            <div className="landmark" id="l5"></div>
            <div className="landmark" id="l6"></div>
            <div className="landmark" id="l7"></div>
            <div className="landmark" id="l8"></div>
            <div className="landmark" id="l9"></div>
            <div className="landmark" id="l10"></div> */}
    

            <div ref={hideText} className="menu">
                <div className="item"><div className="shop"><Link to='/shop'>SHOP</Link></div></div>
                
                <div className="item"><div className="contact">CONTACT</div></div>
            </div>
     

            <div  className="brand">
                <Link to='/'><h1 ref={hideText}>jad<span>é</span></h1></Link>
            </div>

            <div ref={triggerBrown} className="slider">
                <h5 ref={hideText}>slider</h5>
            </div>

            <div ref={toggleFooter} className="footer">
                <div className="footer-links">
                    <div className="logo">
                        <h3>JAD<span>É</span></h3>
                    </div>
                    <div className="web-links">
                        <div className="shop">
                            <h3>SHOP</h3>
                            <h3>CATALOGUE</h3>
                            <h3>SHOOPING BAG</h3>
                        </div>
                        <div className="contact">
                            <h3>ABOUT</h3>
                            <h3>CONTACT</h3>
                        </div>
                        <div className="news">
                            <h3>SUBSCRIBE TO NEWSLETTER</h3>
                            <div className="input">
                                <input type="text" placeholder='Your e-mail'></input>
                                <EastIcon sx={{fontWeight: 300, fontSize: '0.8rem'}} className='icon' />
                            </div>
                        </div>
                    </div>
                    <div className="socials">
                        <div className="heading">
                            SOCIAL MEDIA
                        </div>
                        <div className="icons">
                            <div className="instagram">
                                <InstagramIcon className='icon'/>
                            </div>
                            <div className="twitter">
                                <TwitterIcon className='icon'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="developer">
                    <div className="copyright">
                        <h3>2023 JADÉ. ALL RIGHTS RESERVED</h3>
                    </div>
                    <div className="dev-contact">
                        <h3>DESIGNED BY <a href="https://github.com/Dubem-Joy" target="_blank" rel="noopener noreferrer">DUBEM</a> </h3>
                        <h3>DEVELOPED BY <a href="https://github.com/Dubem-Joy" target="_blank" rel="noopener noreferrer">DUBEM</a> </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home