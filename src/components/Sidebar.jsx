import React, { useState } from 'react'
import { BiHomeAlt } from 'react-icons/bi'
import { FaBars } from 'react-icons/fa'
import { GiSoundWaves } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import '../components/styles/sidebar.css'

const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const menuItems = [
        {
            path:'/',
            name: 'home',
            icon: <BiHomeAlt />
        },

        {
            path:'/audio',
            name: 'Transcribe',
            icon: <GiSoundWaves />
        },

        {
            path:'/audio',
            name: 'Transcribe',
            icon: <GiSoundWaves />
        }

    ]
  return (
    <div className='container'>
        <div style={{width: isOpen ? '200px' : '50px'}} className='sidebar'>
            <div className='top-side'>
                <h1 style={{display: isOpen ? 'block' : 'none'}} className='logo'>Logo</h1>
                <div style={{marginLeft: isOpen ? '50px' : '0px'}}  className='bars'>
                    <FaBars onClick={toggle} />
                </div>
            </div>

            {menuItems.map((item, index) =>(
                <NavLink to={item.path} key={index} className='link'>
                    <div className='icon'>{item.icon}</div>
                    <div style={{display: isOpen ? 'block' : 'none'}} className='link-name'>{item.name}</div>
                </NavLink>
            ))}
        </div>
        <main>{children}</main>
    </div>
  )
}

export default Sidebar