import React from 'react'
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'

const handleClick = (props) => {
    props.expandSidebar()
}

function Toolbar(props) {
    return (
        <>
        <div className="Toolbar">
            <div className="Sidebar">
                <Link to="#" className="Sidebar-bars">
                    <FaIcons.FaBars onClick={() => handleClick(props)} />
                </Link>
            </div>
        </div>
        </>
    )
}

export default Toolbar
