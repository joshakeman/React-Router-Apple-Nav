import React from 'react'
import Nav from './Nav'

const NavWrapper = props => {
    const navProps = props.navs
    return (
        // <p>Nav Item</p>
     <div>
        {navProps.map(navItem => (
         <Nav key={navItem.navTitle} itemData={navItem} />     
        ))}
    </div>
    )
}
    
export default NavWrapper