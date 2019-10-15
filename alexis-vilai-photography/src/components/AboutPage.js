import React from 'react';

import { About, AboutHeader } from './StyledWidgets';

const AboutPage = () => {
    return (
        <div className="about-page">
            <AboutHeader>
                <h1>How Alexis Vilai Photography Started</h1>
            </AboutHeader>

            <About>

                <div className="middle-content">
                    <p>     Hi I'm Alexis Vilai Panyathong. I have always had 
                        a passion for photography. People started noticing my work and loved it
                        and encourage me to get into photography classes, but I was afraid.
                        In April 2017 my fiance at the time surprised me with a gift that changed our lives, a Canon Rebel EOS t2i with two set of lens and told me that I can finally take the next steps on starting my own
                        photography business. 

                    </p>
                <img className="img-container" src={require('../imgs/Alexis.jpg')} alt="img of Alexis." />
                
                </div>
            </About>
        </div>
    )
}

export default AboutPage;