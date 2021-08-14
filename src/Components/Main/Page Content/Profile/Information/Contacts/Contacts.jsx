import React from 'react';

import stylesProfile from '../../../../../../Styles/Profile.module.css';

const Contacts = (props) => {
    return (
        <div className={stylesProfile.contacts}>
            My contacts:
            <div className={stylesProfile.contacts__body}>
                {props.contacts}
            </div>
        </div>
    )
}

export default Contacts;