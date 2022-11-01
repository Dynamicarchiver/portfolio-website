import React, { useState } from 'react';
import { FaCentercode } from 'react-icons/fa'
import {  MdCancel, MdDoubleArrow }from 'react-icons/md'
import { ImMenu } from 'react-icons/im'

const Navbar = () => {

  return (
    <div className='navbar'>
        <div className="logo">
        <div className="logo-icon">
           <FaCentercode />
        </div>
        <div className='logo-text'>
           Dynamic
        </div>
        </div>
        <div className='mobile'>
        <div className="mobile-icon">
             <ImMenu className='icon'/>
        </div>
        </div>
        <div className="nav">
          <ul>
            <li>
              <a href="./Home.jsx"> Home</a>
            </li>
            <li>
              <a href="./Servives.jsx">Services</a>
            </li>
            <li>
              <a href="./Blog.jsx">Blog</a>
            </li>
            <li>
              <a href="./Home.jsx"> Pages</a>
            </li>
            <li>
              <a href="./Home.jsx">Contact</a>
            </li>
          </ul>
          </div>
          <div className="hire">
            <button>
             <div> Hire Me</div>
                 <MdDoubleArrow className='icon' />
            </button>
          </div>
    </div>
  )
}

export default Navbar