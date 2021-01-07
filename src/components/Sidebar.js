import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {SidebarMenu} from './SidebarMenu'
import './Sidebar.css'
import {IconContext} from 'react-icons'
import {Switch, Route} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Toolbar from './Toolbar'

function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const showSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    } 

    const RenderMenuItems = () => {
        const items = SidebarMenu.map((item,index) => {
            return (
                <li key={index} className={item.className}>
                    <Link to={item.path}> 
                        {item.icon} 
                        <span>{item.title}</span>
                    </Link>
                </li>
            )
        })
        return items
    }
    return (
        <>
            <IconContext.Provider value={{color:'#fff'}}>
                {/* tool bar */}
                <Toolbar expandSidebar = {showSidebar} isOpen = {isSidebarOpen}/>
                {/* Toggler logic */}
                <nav className={isSidebarOpen ? "Sidebar-menu active": "Sidebar-menu"}>
                    <ul className="Sidebar-menu-items">
                        {RenderMenuItems()}
                    </ul>
                </nav>
            </IconContext.Provider>
            {/* Route Switcher  */}
            <Switch>
                <Route path="/" exact render={() => <Dashboard isOpen={isSidebarOpen}/>}/>
                <Route path="/contact" exact render={() => <Contact isOpen={isSidebarOpen}/>}/>
                <Route path="/about" exact render={() => <About isOpen={isSidebarOpen}/>}/>
            </Switch>
        </>
    )
}

export default Sidebar
