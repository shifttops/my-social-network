import React from 'react'

import stylesProfile from '../../../../../../../Styles/Profile.module.css';


const DescriptionField = (props) => {
    if (props.hasOwnProperty('birthDate')) {
        return (
            <div className={stylesProfile.informationProfile__birth}>Date of Birth: {props.birthDate}</div>
        )
    }else if (props.hasOwnProperty('city')){
        return(
            <div className={stylesProfile.informationProfile__city}>City: {props.city}</div>
        )
    }else if(props.hasOwnProperty('edu')){
        return(
            <div className={stylesProfile.informationProfile__edu}>Education: {props.edu}</div>
        )
    }
}

export default DescriptionField;