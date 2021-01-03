import React from 'react'
import './Dashboard.css'

function Dashboard(props) {
    return (
        <>
            <div className= {props.isOpen ? "dashboard enabled" : "dashboard" }>
                <div>A</div>
                <div>B</div>
                <div>C</div>
                <div>D</div>
            </div>
        </>
    )
}

export default Dashboard
