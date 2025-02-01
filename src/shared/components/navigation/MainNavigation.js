import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import MainHeader from './MainHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import Backdrop from '../uiElements/Backdrop'

export default function MainNavigation(props) {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerHandler = () => {
    if (isDrawerOpen === false) { setIsDrawerOpen(true) };
    if (isDrawerOpen === true) { setIsDrawerOpen(false) };

  }

  return (
    <React.Fragment>
      {/* Backdrop of the Side Drawer of the Application */}

      {isDrawerOpen && <Backdrop onClick={toggleDrawerHandler} />}

      {/* Side Drawer of the Application (Implemented with 'react-transition-group') */}
      <SideDrawer show={isDrawerOpen} onClick={toggleDrawerHandler}>
        <nav>
          <NavLinks />
        </nav>
      </SideDrawer>

      {/* Side Drawer of the Application
      
        {isDrawerOpen ? (<SideDrawer>
            <nav>
              <NavLinks />
            </nav>
          </SideDrawer>)
        : null}
        
        (First used code [Might be helpful soon])
      
      */}

      {/* Main Navigation of the Application */}

      <MainHeader>
        <button className='lg:hidden' onClick={toggleDrawerHandler}>
          <span>
            <FontAwesomeIcon className='text-xl' icon={faBars} />
          </span>
        </button>
        <h1 className='text-2xl font-bold'><Link to={'/'}>GeoSnap</Link></h1>
        <nav className='hidden lg:flex'>
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>

  )
}
