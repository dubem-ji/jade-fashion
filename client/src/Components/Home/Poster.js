import React, { useState } from 'react';

const Poster = () => {
    const [mouseX, setMouseX] = useState();
    const [mouseY, setMouseY] = useState();

    return (
        <div className='poster' onMouseMove={(e) => {
            setMouseX(e.clientX);
            setMouseY(e.clientY);
        }}>
            <div className="texts">
                <h3 id='edgy'>edgy</h3>
                <h3 id='classy'>classy</h3>
                <h3 id='fierce'>fierce</h3>
                <h3 id='strong'>strong</h3>
                <h3 id='chic'>chic</h3>
            </div>
            <div
                className="smear"
                style={{ transform: `translate3d(${mouseX-150}px, ${mouseY-150}px, 0)`, }}
            ></div>
        </div>
    );
};

export default Poster
