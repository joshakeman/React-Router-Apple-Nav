import React from 'react'
import { Route, NavLink } from "react-router-dom"
import SubNav from './SubNav'
import '../App.css';


const Nav = props => {
    // console.log(props)
    // console.log(props.itemData)
    // console.log(props.itemData.NavTitle)
    const { itemData } = props
    return (
        <div className="nav">

        <NavLink to={`/${props.itemData.navTitle}`}><p>{props.itemData.navTitle}</p></NavLink>
        {/* <Route path="/:category" render={props => <SubNav {...props} data={itemData}/>}/> */}

        </div>

    )
}

export default Nav