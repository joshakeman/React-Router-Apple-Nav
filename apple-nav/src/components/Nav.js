import React from 'react'
import { Route, NavLink } from "react-router-dom"

const Nav = props => {
    console.log(props)
    console.log(props.itemData)
    console.log(props.itemData.NavTitle)
    return (
        <div>
        <p>{props.itemData.navTitle}</p>
        {/* <p>Nav Item</p> */}
        </div>

    )
}

export default Nav