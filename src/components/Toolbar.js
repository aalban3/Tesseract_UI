import React from 'react'
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import './Searchbar.css'
const handleClick = (props) => {
    props.expandSidebar()
}

function Toolbar(props) {
    return (
        <>
            <div className={props.isOpen ? "Toolbar enabled": "Toolbar"}>
                <Link to="#" className="Toolbar-bars">
                    <FaIcons.FaBars id= "Toolbar-toggler" onClick={() => handleClick(props)} />
                </Link>
                <img src ={require("./tesseract_ai_icon.png").default} alt="tesseract logo"/>
        	    <input type="text" placeholder="Search" />
            </div>
        </>
    )
}

export default Toolbar
