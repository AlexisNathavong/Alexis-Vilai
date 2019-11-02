import React, { useState} from 'react';

import { Form, Context, AddBtn } from './StyledWidgets';


const ContactPage = () => {
    const [newUser, setNewUser] = useState({fname: '', lname: '', email: '', phone_number: '', message: ''});

    // const [state, dispatch] = useReducer(reducer, initialState);

    const handleChanges = event => {
        
        setNewUser({...newUser, [event.target.name]: event.target.value});
    };

    return (
        <div className="contact-page">
            <form action="mailto:alexisvilaiphotography@gmail.com">
                <h1>Contact Me!</h1>
                <label> First Name: </label>
                    <input
                        className="contact-page"
                        type="text"
                        value={newUser.fname} required
                        name="fname"
                        onChange={handleChanges}
                    />

                <label> Last Name: </label>
                    <input
                        className="contact-page"
                            type="text"
                            value={newUser.lname} required
                            name="lname"
                            onChange={handleChanges}
                    />

                <label> Email: </label>
                    <input
                        className="contact-page"
                            type="text"
                            value={newUser.email} required
                            name="email"
                            onChange={handleChanges}
                    />

                <label> Mobile: </label>
                    <input
                        className="contact-page"
                            type="tel"
                            value={newUser.phone_number} required
                            name="phone_number"
                            onChange={handleChanges}
                    />

                <label> Message: </label>
                    <input
                        className="contact-page"
                            type="text"
                            value={newUser.message} required
                            name="message"
                            onChange={handleChanges}
                    />
                <button>Submit</button>
            </form>
        </div>
    )
}


export default ContactPage;