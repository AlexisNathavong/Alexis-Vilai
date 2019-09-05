import React from 'react';
import { SocialIcon } from 'react-social-icons';

import { WelcomeHeader, Family, Icons, Couples } from './StyledWidgets';

const WelcomePage = () => {
    
    return (
        <div className="welcome-page">
            <WelcomeHeader>
                <h1>Welcome to A. & J. Portraits</h1>
            </WelcomeHeader>


            <h2>Family</h2>
            <Family>
                <div className="family-images">
                    <img src={require('../imgs/IMG_0143EE-2.jpg')} alt='' />
                    <img src={require('../imgs/IMG_0266EE-2.jpg')} alt='' />
                    <img src={require('../imgs/IMG_0275EE-2.jpg')} alt='' />
                    <img src={require('../imgs/IMG_0156EE-2.jpg')} alt='' />
                    <img src={require('../imgs/IMG_0160EE-2.jpg')} alt='' />
                    <img src={require('../imgs/PAVINEE-1.jpg')} alt='' />
                </div>
            </Family>

            <h2>Couples</h2>
            <Couples>
                <div className="couples-images">
                    <img src={require('../imgs/JACOB-WM2.jpg')} alt='' />
                    
                </div>
            </Couples>

        
            <footer className="social-icons">
                
                    <Icons>
                        <SocialIcon url="https://twitter.com/Alex_Panyathong" />
                        <SocialIcon url="https://www.facebook.com/ajpportraits/" />
                        <SocialIcon url="https://www.instagram.com/a.j.portraits/" />
                    </Icons>
                
            </footer>
        </div>

    )
}

export default WelcomePage;