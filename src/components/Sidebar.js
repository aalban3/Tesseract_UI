import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {SidebarMenu} from './SidebarMenu'
import './Sidebar.css'
import {IconContext} from 'react-icons'

function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const showSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    } 
    return (
        <>
            <IconContext.Provider value={{color:'#fff'}}>
                <div className="Sidebar">
                    <Link to="#" className="Sidebar-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={isSidebarOpen ? "Sidebar-menu active": "Sidebar-menu"}>
                    <ul className="Sidebar-menu-items">
                        {SidebarMenu.map((item,index) => {
                            return (
                                <li key={index} className={item.className}>
                                    <Link to={item.path}> 
                                    
                                        {item.icon} 
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar
