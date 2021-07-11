import React from 'react'

import stylesPageNav from "./PageNav.module.css";
import stylesGeneral from '../Page.module.css'

const PageNav = () => {
    return (
        <nav className={`${stylesGeneral.page__navigation} + ${stylesPageNav.navigationPage}`}>
            <div className={stylesPageNav.navigationPage__body}>
                <div className={`${stylesPageNav.navigationPage__profile} + ${stylesPageNav.navigationPage__link}`}>
                    <a href="https://www.google.com/">Profile</a>
                </div>
                <div className={`${stylesPageNav.navigationPage__messages} + ${stylesPageNav.navigationPage__link}`}>
                    <a href="https://www.google.com/">Messages</a>
                </div>
                <div className={`${stylesPageNav.navigationPage__news} + ${stylesPageNav.navigationPage__link}`}>
                    <a href="https://www.google.com/">News</a>
                </div>
                <div className={`${stylesPageNav.navigationPage__music} + ${stylesPageNav.navigationPage__link}`}>
                    <a href="https://www.google.com/">Music</a>
                </div>
                <div className={`${stylesPageNav.navigationPage__settings} + ${stylesPageNav.navigationPage__link}`}>
                    <a href="https://www.google.com/">Settings</a>
                </div>
            </div>
        </nav>

    )
}

export default PageNav;