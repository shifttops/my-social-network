import React from 'react';

import stylesProfile from '../../../../Styles/Profile.module.css';
import stylesGeneral from '../../../../Styles/PageContent.module.css';

import Avatar from "./Avatar/Avatar";
import ProfileInfo from "./Information/Profile Information.jsx";
import Preloader from "../../../Сommon/Preloader/Preloader";

const Profile = (props) => {
    if(!props.profile){
        return <Preloader/>
    }

    return(
        <article className={`${stylesGeneral.contentPage__profile} ${stylesProfile.profile}`}>
            <Avatar ava={props.profile.photos.large}/>
            <ProfileInfo profile={props.profile}
                         postsData={props.postsData}
            />
        </article>
    )
}

export default Profile;