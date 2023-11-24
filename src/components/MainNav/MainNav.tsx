import React from "react";
import './MainNav.css'

const MainNav = () => {
    return(
        <div className='main-nav'>
            <div className='main-nav-logo'>
                <div className='main-nav-logo-container'>
                    <img className='main-nav-logo-image' src='Ascension.png' alt='Ascension' />
                </div>
                <div className='main-nav-logo-ascension'>
                    <div className='main-nav-logo-ascension-outline'>
                        <p className='main-nav-logo-ascension-name'>Surgical Scheduling Manager</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainNav;