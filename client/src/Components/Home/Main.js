import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


import photoTwo from '../Media/images/photocard_2.jpg';
import photoThree from '../Media/images/photocard_3.jpg';
import photoOne from '../Media/images/photocard_1.jpg';
import photoFour from '../Media/images/photocard_4.png';

const Main = () => {

    useEffect(() => {
        AOS.init();
    });


    return (
        <div className='main'>
            <div className="left">
                <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className="photo-3"
                >
                    <img src={photoThree} alt=""  />
                </div>
                <div
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    className="photo-2"
                >
                    <img src={photoTwo} alt="" />
                </div>
            </div>
            <div className="middle">
                <h5>THE STYLE THAT SPEAKS CONFIDENCE</h5>
                <h1>EDGY CLASSY RETRO</h1>
                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus est totam perferendis consectetur laborum unde, eveniet magni quia provident illum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quibusdam, natus aut, sunt eaque molestiae aspernatur aperiam praesentium ipsa nisi placeat perspiciatis nihil illo esse quis id dolore, libero dolorum. Enim exercitationem ab ipsam pariatur non alias unde sit autem? Nemo ipsa ab fugiat quaerat alias dolorum labore explicabo iusto?</h4>
            </div>
            <div className="right">
                <div className="photo-1">
                    <img src={photoOne} alt=""  />
                </div>
                <div className="photo-4">
                    <img src={photoFour} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Main