import React from 'react';

import stylesProfile from '../../../../Styles/Profile.module.css';
import stylesGeneral from '../../../../Styles/PageContent.module.css';

import Description from "./Information/Description/Description";
import InfProfileName from "./Information/User Name/infPageName";
import Posts from "./Information/Post/Posts/Posts";
import Avatar from "./Avatar/Avatar";
import ProfileInfo from "./Information/Profile Information";

const Profile = (props) => {

    return(
        <article className={`${stylesGeneral.contentPage__profile} ${stylesProfile.profile}`}>
            <Avatar avatarUrl={props.userInfo.avatarUrl}/>
            <ProfileInfo userName={props.userInfo.userName}
                         birthDate={props.userInfo.birthDate}
                         city={props.userInfo.city}
                         edu={props.userInfo.edu}
                         postsData={props.postsData}
                         avatarUrl={props.userInfo.avatarUrl}/>
        </article>
    )
}

export default Profile;