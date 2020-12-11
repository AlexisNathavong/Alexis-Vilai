import React from 'react';
import Card from 'react-bootstrap/Card'


import { AboutHeader, IMG } from './StyledWidgets';

const AboutPage = () => {
    return (
        <div className="about-page">
            <AboutHeader>
                <h1>How Alexis Vilai Photography Started</h1>
            </AboutHeader>

            <Card border="secondary" style={{ width: '90%', margin: '0 auto', paddingBottom: '30px', marginBottom: '20px' }}>
                <Card.Body>
                    <Card.Text>
                        Hi I'm Alexis and I have always had a passion for photography. People started noticing my work and loved it and encourage me to get into photography classes, but I was afraid. In April 2017 I was surprised with a gift that changed my life, a Canon Rebel EOS t2i with two set of lens and told me that I can finally take the next steps on starting my own
                        photography business. 
                    </Card.Text>
                    <IMG>
                        <img className="img-container" src={require('..//imgs/IMG_9272-WM-resize.jpg')} alt="img of Alexis." />
                    </IMG>
                </Card.Body>
            </Card>

            

                <div className="middle-content">
                  
                
                </div>
            
        </div>
    )
}

export default AboutPage;