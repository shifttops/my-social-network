import React from 'react';

import stylesProfile from '../../../../../../Styles/Profile.module.css';


const InfPageName = (props) => {
    if (props.hasOwnProperty('userName')) {
        return (
            <div className={stylesProfile.informationProfile__name}>{props.userName}</div>
        )
    } else {
        return (
            <div className={stylesProfile.informationProfile__name}>Не указано</div>
        )
    }
}

export default InfPageName;