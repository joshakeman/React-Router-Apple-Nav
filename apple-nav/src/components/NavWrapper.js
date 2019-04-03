import React from 'react'
import Nav from './Nav'
import '../App.css';


const NavWrapper = props => {
    return (
        // <p>Nav Item</p>
     <div className="navbar-div">
        {props.navs.map(navItem => (
         <Nav key={navItem.navTitle} itemData={navItem} />     
        ))}
    </div>
    )
}
    
export default NavWrapper