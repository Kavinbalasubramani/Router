import React from 'react'
import './Productpage.css';
import {Link, Outlet} from 'react-router-dom'


function Productpage() {
  return (
    <div>
       <nav>
          <ul className='ul'>
            <li><Link to="/Product/1">DRINKS</Link></li>
            <li><Link to="/Product/2">SHIRT</Link></li>
            <li><Link to="/Product/3">T-SHIRT</Link></li>
            
          </ul>
        </nav>
       <Outlet />
    </div>
  )
}

export default Productpage
