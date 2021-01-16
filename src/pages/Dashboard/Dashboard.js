import React from 'react'
import './Dashboard.css'

function Dashboard(props) {
    return (
        <>
            <div className= {props.isOpen ? "Dashboard enabled" : "Dashboard" }>
                <div className="Dashboard-Overview">A</div>
                <div className="Dashboard-Classifier">B</div>
                <div className="Dashboard-Trends">C</div>
                <div className="Dashboard-News">D</div>
            </div>
        </>
    )
}

export default Dashboard
