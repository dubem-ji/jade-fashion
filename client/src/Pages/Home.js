import React from 'react';
import Navbar from '../Components/General/Navbar';
import Landing from '../Components/Home/Landing';
import Main from '../Components/Home/Main';
import Poster from '../Components/Home/Poster';
import Maintext from '../Components/Home/Maintext';
import Clothstyles from '../Components/Home/Clothstyles';


const Home = () => {

    const toggleBackground = useRef(null);
    const triggerBrown = useRef(null);
    const triggerGrey = useRef(null);
    const showFooter = useRef(null)

    useEffect(() => {
        const backgroundColor = toggleBackground.current;
        const brownTrigger = triggerBrown.current;
        const greyTrigger = triggerGrey.current;
            
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
                start: 'top 59%',
                end: 'top 0%',
                scrub: true,
                toggleActions: 'restart pause reverse complete',
                // markers: true,
            }
        },)

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: greyTrigger,
                start: 'top 20%',
                end: 'top 10%',
                scrub: 2,
                markers: true,
            }
        })
        tl.to('.footer', {height:'50vh', duration: 10})

    }, [])

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