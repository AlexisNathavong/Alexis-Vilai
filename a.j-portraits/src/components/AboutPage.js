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
                    <p>     Hi my name is Alexis Panyathong and this is my husband, Jimmy Panyathong and we are the face of A. & J. Portraits. I always had 
                        a passion of photography especially for editing because I can use my creativity to its full capacity. People started noticing my work and loved it
                        to the point where they started to encourage me to get into photography classes. But I never really pursued because I was afraid.
                        In April 2017 my fiance at the time surprised me with a gift that changed our lives.
                        He gifted me with a Canon Rebel EOS t2i with two set of lens and told me that I can finally take the big step on starting my own
                        photography business. I was so happy and excited that I was holding my very first professional 
                        camera and lens, but I was so nervous about starting my own photography business. But he was right that I should follow my dreams and to try something new,
                        something that I love. I knew that if I started my business that I would need a partner to help and so I asked Jimmy to be my partner and that was when A. & J. Portraits was born.

                        We are from Milwaukee, WI, but we relocated to Dallas, TX in the beginning of June 2018 to start our new chapter as newlyweds.

                    </p>
                <img className="img-container" src={require('../imgs/hubby&me.jpg')} alt="img of Alexis and Jimmy" />
                
                </div>
            </About>
        </div>
    )
}

export default AboutPage;