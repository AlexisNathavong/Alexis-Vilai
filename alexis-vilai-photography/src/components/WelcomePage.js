import React, { useState, useCallback } from "react";
// import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../components/Photo";

import { SocialIcon } from 'react-social-icons';

import { WelcomeHeader, Icons } from './StyledWidgets';

import Card from 'react-bootstrap/Card'


const WelcomePage = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

    return (
        <div className="welcome-page">
            <WelcomeHeader>
                <h1>Welcome to Alexis Vilai Photography</h1>
            </WelcomeHeader>
            <Gallery photos={photos} onClick={openLightbox} />
               
                    <ModalGateway>
                        {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel 
                                // views={photos}
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                            />
                        </Modal>
                        ) : null}
                    </ModalGateway>
        
            
            <Card bg= 'light' style={{ width: '40%', margin: '0 auto', marginBottom: '50px', marginTop: '20px', textAlign: 'center'}}>
                    <Card.Header style={{fontSize: '25px'}}>Contact Me</Card.Header>
                <Card.Body>
                        {/* <Card.Title>Contact Me</Card.Title> */}
                    <Card.Text>
                    Business: (469) 759-0890 <br/>
                    Email: alexisvilaiphotography@gmail.com <br/>
                    Location: 4250 E Renner Rd Richardson, TX 75082
                    </Card.Text>
                </Card.Body>
            </Card>

            <footer className="social-icons">
                
                
                <Icons>
                    <SocialIcon url="https://twitter.com/AlexisVilai" style={{ height: 40, width: 70 }} target="_blank"/>
                    <SocialIcon url="https://www.facebook.com/alexisvilaiphotography/?view_public_for=113745263368370" style={{ height: 40, width: 70 }} target="_blank"/>
                    <SocialIcon url="https://www.instagram.com/alexisvilaiphotography/" style={{ height: 40, width: 70 }} target="_blank"/>
                    <SocialIcon url="https://www.yelp.com/biz/alexis-vilai-photography-dallas?osq=Alexis+Vilai+Photography" style={{ height: 40, width: 70 }} target="_blank"/>
                    <SocialIcon url="mailto:alexisvilaiphotography@gmail.com?subject=here" style={{ height: 40, width: 70 }} fgColor="#ff5a01" bgColor="#ffffff" target="_blank"/>
                            
                </Icons>
                
            </footer>
        </div>

    )
}

export default WelcomePage;