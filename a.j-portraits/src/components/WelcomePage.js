import React from 'react';
import { SocialIcon } from 'react-social-icons';

import { WelcomeHeader, Family, Icons, Couples } from './StyledWidgets';

const WelcomePage = () => {
    
    return (
        <div className="welcome-page">
            <WelcomeHeader>
                <h1>Welcome to A. & J. Portraits</h1>
            </WelcomeHeader>
                {/* <p>Link to some of my portfolios while I finish up rebuilding my website: </p> */}
                {/* <button onClick={('https://ajportraits.pixieset.com/')}>Samples</button> */}

            <h2>Family</h2>
            <Family>
                <div className="family-images">
                    <img src={require('../imgs/IMG_0143EE-resize-1.jpg')} alt='' />
                    <img src={require('../imgs/IMG_0266EE-resize-1.jpg')} alt='' />
                    <img src={require('../imgs/IMG_0275EE-resize-1.jpg')} alt='' />
                    <img src={require('../imgs/IMG_0156EE-resize-1.jpg')} alt='' />
                    <img src={require('../imgs/IMG_0160EE-resize-1.jpg')} alt='' />
                    <img src={require('../imgs/PAVINEE-resize.jpg')} alt='' />
                </div>
            </Family>

            <h2>Couples</h2>
            <Couples>
                <div className="couples-images">
                    <img src={require('../imgs/JACOB-WM-resize-1.jpg')} alt='' />
                    
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