import React from 'react'

import stylesPageNav from "../../../Styles/PageNav.module.css";
import stylesGeneral from '../../../Styles/Page.module.css'
import Link from "./Link/Link";

const PageNav = () => {
    return (
        <nav className={`${stylesGeneral.page__navigation} ${stylesPageNav.navigationPage}`}>
            <div className={stylesPageNav.navigationPage__body}>
                <Link nextPage={'Profile'}/>
                <Link nextPage={'Messages'}/>
                <Link nextPage={'News'}/>
                <Link nextPage={'Music'}/>
                <Link nextPage={'Settings'}/>
                <Link nextPage={'Search'}/>
            </div>
        </nav>

    )
}

export default PageNav;