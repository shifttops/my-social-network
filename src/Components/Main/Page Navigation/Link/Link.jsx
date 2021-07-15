import React from 'react'

import {NavLink} from "react-router-dom";
import stylesPageNav from "../../../../Styles/PageNav.module.css";

const Link = (props) => {
    const value = '/' + props.nextPage.toLowerCase()
    return (
        <div className={stylesPageNav.navigationPage__link}>
            <NavLink to={value} activeClassName={stylesPageNav.active}>{props.nextPage}</NavLink>
        </div>
    )
}

export default Link;