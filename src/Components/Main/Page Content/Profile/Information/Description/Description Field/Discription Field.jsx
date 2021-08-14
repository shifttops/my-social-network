import React from 'react'

import stylesProfile from '../../../../../../../Styles/Profile.module.css';


const DescriptionField = (props) => {
    return(
        <div className={stylesProfile.informationProfile__descriptionField}>{props.text}: {props.data}</div>
    )
}

export default DescriptionField;