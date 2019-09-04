import React from 'react';

import { WelcomeHeader, Family } from './StyledWidgets';

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
                </div>
                <div className="family-images">
                    <img src={require('../imgs/IMG_0156EE-2.jpg')} alt='' />
                </div>
            </Family>
        </div>
    )
}

export default WelcomePage;