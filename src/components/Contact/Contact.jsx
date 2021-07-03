import React from 'react';
import Header from '../Header/Header';
import "./Contact.css"
const Contact = props => {
    return (
        <div className="content">
            <Header
                heading='Contact Me!'
            />
            <p className="sub">Feel free to drop an E-mail</p>
            <div className="Form" >
                    <form className="pageclip-form" action="https://send.pageclip.co/snuvftpkeaWmcOyISybpXcTorbBAK9F9/contact-me" method="post">
                    <input
                        type='email'
                        placeholder='Your Email ID'
                        name='email'
                        className='input-box email-input'
                        autoComplete='off'
                    />

                    {/* Email Body */}
                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'
                    ></textarea>

                    {/* Submit button */}
                    <button type='submit' className='contact-btn pageclip-form__submit'>
                        Send Email
                    </button>
                    </form>

            </div>
        
        </div>
    );
};


export default Contact;