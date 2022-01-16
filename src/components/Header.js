
import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import switchIcon from '../assets/header/theme-switch.png'

const Header = () => {
    return (
         <div className='header'>
              <div className='logocontainer'>
                 <img src={punkLogo} alt="" className='punkLogo'/>
              </div>
          <div className='searchBar'>
              <div className='searchIcon'>
                   <img src={searchIcon} alt="" />
              </div>
              <input className='searchInput' placeholder="Collection, item or user ..." />
          </div>

          <div className='header-items'>
              <p>Drops</p>
              <p>Market place</p>
              <p>Create</p>
          </div>

          <div className='headerActions'>
               <div className='actionContainer'> 
                    <img src={switchIcon} alt="" />
               </div>
          </div>

          </div>
    )
}

export default Header
