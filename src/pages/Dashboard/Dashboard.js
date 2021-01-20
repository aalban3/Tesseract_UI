import React from 'react'
import './Dashboard.css'
import Words from './Classifier/Words'
function Dashboard(props) {
    return (
        <>
            <div className= {props.isOpen ? "Dashboard enabled" : "Dashboard" }>
                <div className="Dashboard-Overview">A</div>
                <div className="Dashboard-Classifier">
                    <Words />
                    <Words />
                    <Words />
                </div>
                <div className="Dashboard-Trends">C</div>
                <div className="Dashboard-News">D</div>
            </div>
        </>
    )
}

export default Dashboard
