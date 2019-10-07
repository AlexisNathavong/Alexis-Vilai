import React from 'react';

import { About, AboutHeader } from './StyledWidgets';

const AboutPage = () => {
    return (
        <div className="about-page">
            <AboutHeader>
                <h1>How A. & J. Portraits Started</h1>
            </AboutHeader>

            <About>

                <div className="middle-content">
                    <p>     Hi I'm Alexis Panyathong and this is my husband, Jimmy. I always had 
                        a passion for photography. People started noticing my work and loved it
                        and encourage me to get into photography classes, but I was afraid.
                        In April 2017 my fiance at the time surprised me with a gift that changed our lives, a Canon Rebel EOS t2i with two set of lens and told me that I can finally take the big step on starting my own
                        photography business. I was so happy and excited that I was holding my very first professional 
                        camera and lens, but I was so nervous about starting my own photography business. But he was right that I should follow my dreams and to try something new,
                        something that I love, that was when A. & J. Portraits was born.

                    </p>
                <img className="img-container" src={require('../imgs/hubby&me.jpg')} alt="img of Alexis and Jimmy" />
                
                </div>
            </About>
        </div>
    )
}

export default AboutPage;