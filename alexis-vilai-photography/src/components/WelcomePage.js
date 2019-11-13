import React, { useState, useCallback } from "react";
// import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../components/Photo";

import { SocialIcon } from 'react-social-icons';

import { WelcomeHeader, Icons, Contact } from './StyledWidgets';

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
                
      
            <div className= "footer-container">
                <Contact>
                <h1>Contact Me</h1>
                <p>Business: (469) 759-0890</p>
                <p>Email: alexisvilaiphotography@gmail.com</p>
                <p>Location: 5811 Belt Line Rd Dallas, TX 75254</p>
                </Contact>
            </div>
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