import React from 'react';
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarMenu = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'Sidebar-text'
    },
    {
        title: 'Contact',
        path: '/Contact',
        icon: <AiIcons.AiFillContacts />,
        className: 'Sidebar-text'
    },
    {
        title: 'About',
        path: '/About',
        icon: <IoIcons.IoMdPeople />,
        className: 'Sidebar-text'
    }
]