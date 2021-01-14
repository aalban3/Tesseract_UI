import React from 'react'
import './Contact.css'

function Contact(props) {
    return (
        <div className={props.isOpen ? "contact enabled" : "contact" }>
            <h1>Contact me!</h1>
        </div>
    )
}

export default Contact
