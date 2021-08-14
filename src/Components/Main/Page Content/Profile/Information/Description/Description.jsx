import React from 'react';

import DescriptionField from "./Description Field/Discription Field";
import stylesProfile from '../../../../../../Styles/Profile.module.css';


const Description = (props) =>{

    let jobSeekStatus = props.profile.lookingForAJob ? 'Yes' : 'No';

    return(
        <div className={stylesProfile.informationProfile__description}>
            <DescriptionField text={'About me'} data={props.profile.aboutMe}/>
            <DescriptionField text={'Seeking for job offer'} data={jobSeekStatus}/>
            <DescriptionField text={'Seeking job offer status'} data={props.profile.lookingForAJobDescription}/>

        </div>
    )
}

export default Description;