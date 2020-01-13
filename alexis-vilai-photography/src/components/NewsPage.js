import React from 'react';
import { News } from './StyledWidgets';
import Accordion from 'react-bootstrap/Accordion';
import { Card } from 'react-bootstrap';
import { CardOne, CardOneContext, PastBadge } from './StyledWidgets';
import Badge from 'react-bootstrap/Badge'


const NewsPage = () => {

    return (
        <div>
            <News>
                <h1>Keeping Up with Alexis Vilai Photography</h1>
            </News>

            <PastBadge><Badge variant="secondary">Past Events</Badge></PastBadge>
            <Accordion>
                    <CardOne>
                        <Card bg="secondary" text="white">
                        <Accordion.Toggle as={Card.Header} eventKey="1" >
                        Pumpkin Patch 2019 Sessions                        
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <CardOneContext>
                            <Card.Body>Another year of doing my Mini Pumpkin Patch Sessions and it was another successful event. I got to meet a lot of new wonderful people and captured many candid moments of people and their loved ones. Catch my Mini Pumpkin Patch Sessions next year, 2020!
                            <img src="https://i.imgur.com/irzGCA8.jpg" alt="something"/>
                            </Card.Body>
                        </CardOneContext>
                        </Accordion.Collapse>
                        </Card>
                    </CardOne>
            </Accordion>

            <Accordion>
                    <CardOne>
                        <Card bg="secondary" text="white">
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Trick-or-Trick at The Oaks at Flower Mound 2019!
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <CardOneContext>
                            <Card.Body>This was my first year randomly volunteering at a nursing home to take pictures of their Trick or Treat Event! I decided to reach out to someone who works at a nursing home and asked if I could come in and take pictures for their event because it reminded me of my childhood. Every year when I was a kid,my grandma would take me to her work (nursing home) to go Trick or Treating and I learned how to appreciate all senior citizens. This was my way of giving back to the community and to meet some great people.
                                <img src="https://i.imgur.com/361Locb.jpg" alt="the oaks" />
                            </Card.Body>
                        </CardOneContext>
                        </Accordion.Collapse>
                        </Card>
                    </CardOne>
            </Accordion>

            <Accordion>
                    <CardOne>
                        <Card bg="secondary" text="white">
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Christmas Studio Mini Sessions 2019!
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <CardOneContext>
                            <Card.Body>This was my very first year on doing indoor studio sessions and it was so much fun! I have learned a lot by doing this and I had the opportunity to work with amazing families once again. I just love Christmas because it is the time of the year to be jolly and give to people who you love!
                                <img src="https://i.imgur.com/kgpqYqV.jpg" alt="Emma" />
                            </Card.Body>
                        </CardOneContext>
                        </Accordion.Collapse>
                        </Card>
                    </CardOne>
            </Accordion>

            <Accordion>
                    <CardOne>
                        <Card bg="secondary" text="white">
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Cyber Monday Mini Sessions 2019!
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <CardOneContext>
                            <Card.Body>Cyber Monday deal is here! Buy One Mini Session, Get One Mini Session FREE! Must pay in full! The Free Mini Session must be used at a different time and day. Great deal for doing a Winter session AND a Spring session later or a perfect gift to a friend or family!
                            
                            *Expired 12/11/19
                                <img src="https://i.imgur.com/3NArPJn.jpg" alt="Emma" />
                            </Card.Body>
                        </CardOneContext>
                        </Accordion.Collapse>
                        </Card>
                    </CardOne>
            </Accordion>

            <Accordion>
                    <CardOne>
                        <Card text="black">
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Valentine Studio Special 2020!
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <CardOneContext>
                            <Card.Body>Valentines Day is coming up real fast! What better way to show your friends and families that you love them, by sending them pictures and cards! Book your session with me and let's start capturing some unforgettable candid moments!
                            
                            *Expires 02/09/20
                                <img src="https://i.imgur.com/HlyR70X.jpg" alt="Valentines" />

                                
                            </Card.Body>
                        </CardOneContext>
                        </Accordion.Collapse>
                        </Card>
                    </CardOne>
            </Accordion>
      </div>
    )
}

export default NewsPage;