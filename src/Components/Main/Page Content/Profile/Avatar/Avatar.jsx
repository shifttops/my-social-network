import React from 'react';

import stylesProfile from '../../../../../Styles/Profile.module.css';

const Avatar = (props) => {
    return(
        <div className={stylesProfile.profile__avatar}><img
            src={props.ava}
            alt=""/>
        </div>
    )
}

export default Avatar;