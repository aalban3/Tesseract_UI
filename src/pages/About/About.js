import React from 'react'
import './About.css'

function About(props) {
    return (
        <div className={props.isOpen ? "about enabled" : "about" }>
            <h1>About Page</h1>
        </div>
    )
}

export default About
