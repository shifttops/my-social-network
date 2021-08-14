import React from 'react';

import stylesProfile from '../../../../../../Styles/Profile.module.css';


const Contact = (props) => {
    return (
        <div className={stylesProfile.contacts__contact}>
            <a target={'_blank'} href={props.link}><img src={ props.image } alt=""/></a>
        </div>
    )
}

export default Contact;