import React from 'react';

import DescriptionField from "./Description Field/Discription Field";
import stylesProfile from '../../../../../../Styles/Profile.module.css';


const Description = (props) =>{
    return(
        <div className={stylesProfile.informationProfile__description}>
            {
                props.hasOwnProperty('birthDate') ? <DescriptionField birthDate={props.birthDate}/> : <DescriptionField birthDate={'Нет информации'}/>
            }
            {
                props.hasOwnProperty('city') ? <DescriptionField city={props.city}/> : <DescriptionField city={'Нет информации'}/>
            }
            {
                props.hasOwnProperty('edu') ? <DescriptionField edu={props.edu}/> : <DescriptionField edu={'Нет информации'}/>
            }
        </div>
    )
}

export default Description;