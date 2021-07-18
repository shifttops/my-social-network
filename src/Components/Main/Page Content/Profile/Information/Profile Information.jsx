import React from 'react';

import stylesProfile from '../../../../../Styles/Profile.module.css';
import InfProfileName from "./User Name/infPageName";
import Description from "./Description/Description";
import Posts from "./Posts/Posts";

const ProfileInfo = (props) => {
    return(
        <div className={`${stylesProfile.profile__information} ${stylesProfile.informationProfile}`}>
            <InfProfileName userName={props.userName}/>
            <Description birthDate={props.birthDate}
                         city={props.city}
                         edu={props.edu}/>

            <Posts postsData={props.postsData}
                   avatarUrl={props.avatarUrl}
                   dispatch={props.dispatch}
            />
        </div>
    )
}

export default ProfileInfo;