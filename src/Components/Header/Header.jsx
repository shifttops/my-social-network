import React from 'react'

import stylesHeader from '../../Styles/Header.module.css'
import stylesGeneral from '../../Styles/Page.module.css'

const Header = () => {
    return (
        <div className={stylesHeader.header}>
            <div className={`${stylesHeader.header__container} ${stylesGeneral._container}`}>
                <div className={stylesHeader.header__body}>
                    <div className={stylesHeader.header__logo}>
                        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="Site logo"/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;