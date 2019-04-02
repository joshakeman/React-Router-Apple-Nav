import React from 'react'
import { Route, NavLink } from "react-router-dom"
import SubNav from './SubNav'
import '../App.css';


const Nav = props => {
    // console.log(props)
    // console.log(props.itemData)
    // console.log(props.itemData.NavTitle)
    return (
        <div className="nav">

        <NavLink to={`/${props.key}`}><p>{props.itemData.navTitle}</p></NavLink>

        {/* <p>{props.itemData.navTitle}</p> */}
        <Route path="/:category/" render={props => <SubNav data={props.itemData}/>}/>

        {/* <SubNav data={props.itemData}/> */}
        {/* <p>Nav Item</p> */}
        </div>

    )
}

export default Nav