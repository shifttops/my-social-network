import React from 'react'
import stylesPageContent from "../PageContent.module.css";

const DescriptionField = (props) => {

    if (props.hasOwnProperty('birthDate')) {
        return (
            <div className={stylesPageContent.informationPage__birth}>Date of Birth: {props.birthDate}</div>
        )
    }else if (props.hasOwnProperty('city')){
        return(
            <div className={stylesPageContent.informationPage__city}>City: {props.city}</div>
        )
    }else if(props.hasOwnProperty('edu')){
        return(
            <div className={stylesPageContent.informationPage__edu}>Education: {props.edu}</div>
        )
    }
}

export default DescriptionField;