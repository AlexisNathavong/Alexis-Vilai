import React, { useState, useCallback } from "react";
// import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../components/Photo";

import { SocialIcon } from 'react-social-icons';

import { WelcomeHeader, Icons, Container} from './StyledWidgets';

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
                <h1>Welcome to A. & J. Portraits</h1>
            </WelcomeHeader>
            <Gallery photos={photos} onClick={openLightbox} />

            <Container>
                <ModalGateway>
                    {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            views={photos}
                        // currentIndex={currentImage}
                        // views={photos.map(x => ({
                        //     ...x,
                        //     srcset: x.srcSet,
                        //     caption: x.title
                        // }))}
                        />
                    </Modal>
                    ) : null}
                </ModalGateway>
            </Container>
      
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