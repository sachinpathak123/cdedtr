import React, { useState } from 'react';
import './App.css';
import { FaBars } from 'react-icons/fa';
function Nav() {
    const [menu,setmenu]=useState(false);
  return (
    <div className='navbar'>
        <div className="elements">
      <div className="navleft">
      <FaBars size={27} color="black"/>
      </div>
      <div className="logo">
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210224040124/JSBinCollaborativeJavaScriptDebugging6-300x160.png" alt="gfg logo" className='gfglogo' />
      </div>
      <div className="navright">
        Hello WOrld
      </div>
      </div>
    </div>
  )
}

export default Nav
