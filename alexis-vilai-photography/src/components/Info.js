import React from 'react';
import Card from 'react-bootstrap/Card'

const Info = () => {
    return (
        <div>
            {/* <h1>Important Information</h1>
            <h2>Things to know before you book!</h2>
            <p>It is NOT the photographer's responsiblity if the client doesn't read through the contract(Terms & Conditions) given when booking. If a client refuses or complains about something that was mentioned already in the contract, the photographer will refer back to the contract and is not at fault that the client didn't read the contract before signing the contract("clicking Agree"). </p> */}

            <Card border="danger" style={{ width: '80%', margin: '0 auto', marginBottom: '50px', marginTop: '20px', textAlign: 'center'}}>
                    <Card.Header style={{fontSize: '25px'}}>Important Information</Card.Header>
                <Card.Body>
                        <Card.Title>Things to know before you book!</Card.Title>
                    <Card.Text>
                        It is NOT the photographer's responsiblity if the client doesn't read through the contract(Terms & Conditions) given when booking. If a client refuses or complains about something that was mentioned already in the contract, the photographer will refer back to the contract and is not at fault that the client didn't read the contract before signing the contract("clicking Agree").
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* <h2>What to do right booking?</h2>
            <p>There will be an invoice sent you via email, to pay your 50% Retainer to reserve your session.</p> */}

            <Card border="secondary" style={{ width: '90%', margin: '0 auto', paddingBottom: '30px', marginBottom: '20px' }}>
                <Card.Header>Question 1:</Card.Header>
                <Card.Body>
                     <Card.Title>What do I need to do, as a client, right booking?</Card.Title>
                    <Card.Text>
                    There will be an invoice sent you via email, to pay your 50% Retainer to reserve your session.
                    </Card.Text>
                </Card.Body>
            </Card>


            {/* <h2>What is expected after the session?</h2>
            <p>Within a few days of the shoot, I will send out a link to your gallery to view that will be watermarked via email. You will choose your images that you want me to edit. Then within 7-14 days your final images will be sent to you via email.</p> */}

            <Card border="secondary" style={{ width: '90%', margin: '0 auto', paddingBottom: '30px', marginBottom: '20px' }}>
                <Card.Header>Question 2:</Card.Header>
                <Card.Body>
                     <Card.Title>What is expected after the session?</Card.Title>
                    <Card.Text>
                    Within a few days of the shoot, I will send out a link to your gallery to view that will be watermarked via email. You will choose your images that you want me to edit. Then within 7-14 days your final images will be sent to you via email.
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* <h2>How will I download my images?</h2>
            <p>I will send out a link that has the final edited images along with the password and PIN that you will need in order to access your edited images.</p> */}

            <Card border="secondary" style={{ width: '90%', margin: '0 auto', paddingBottom: '30px', marginBottom: '20px' }}>
                <Card.Header>Question 3:</Card.Header>
                <Card.Body>
                     <Card.Title>How will I download my images?</Card.Title>
                    <Card.Text>
                    I will send out a link that has the final edited images along with the password and PIN that you will need in order to access your edited images.
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* <h2>What if I have to reschedule?</h2>
            <p>In the contract(Terms & Conditions) there is a $25 rescheduling fee everytime you need to reschedule.</p> */}

            <Card border="secondary" style={{ width: '90%', margin: '0 auto', paddingBottom: '30px', marginBottom: '20px' }}>
                <Card.Header>Question 4:</Card.Header>
                <Card.Body>
                     <Card.Title>What if I have to reschedule?</Card.Title>
                    <Card.Text>
                    In the contract(Terms & Conditions) there is a $25 rescheduling fee everytime you need to reschedule.
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* <h2>What if I want extra images to be edited?</h2>
            <p>Extra images are $5 per image. There will be an invoice sent to you via email to pay for those extras.</p> */}

            <Card border="secondary" style={{ width: '90%', margin: '0 auto', paddingBottom: '30px', marginBottom: '20px' }}>
                <Card.Header>Question 5:</Card.Header>
                <Card.Body>
                     <Card.Title>What if I want extra images to be edited?</Card.Title>
                    <Card.Text>
                    Extra images are $5 per image. There will be an invoice sent to you via email to pay for those extras.
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* <h2>Can I have all of the undedited images?</h2>
            <p>Absolutely not, as a photographer's point of view, it is like giving away all of your hard work to a company who will have the recognition and profit. You will ONLY be given the edited images that is included in the session and extras if requested. (Please see contract for more details).</p> */}

            <Card border="secondary" style={{ width: '90%', margin: '0 auto', paddingBottom: '30px', marginBottom: '20px' }}>
                <Card.Header>Question 6:</Card.Header>
                <Card.Body>
                     <Card.Title>Can I have all of the undedited images?</Card.Title>
                    <Card.Text>
                    Absolutely not, as a photographer's point of view, it is like giving away all of your hard work to a company who will get the recognition and profit. You will ONLY be given the edited images that is included in the session and extras if requested. (Please see contract for more details).
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Info;