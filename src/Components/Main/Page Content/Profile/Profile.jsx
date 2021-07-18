import React from 'react';

import stylesProfile from '../../../../Styles/Profile.module.css';
import stylesGeneral from '../../../../Styles/PageContent.module.css';

import Avatar from "./Avatar/Avatar";
import ProfileInfo from "./Information/Profile Information.jsx";

const Profile = (props) => {

    return (
        <article className={`${stylesGeneral.contentPage__profile} ${stylesProfile.profile}`}>
            <Avatar avatarUrl={props.profilePage.userInfo.avatarUrl}/>
            <ProfileInfo userName={props.profilePage.userInfo.userName}
                         birthDate={props.profilePage.userInfo.birthDate}
                         city={props.profilePage.userInfo.city}
                         edu={props.profilePage.userInfo.edu}

                         postsData={props.profilePage.postsData}
                         avatarUrl={props.profilePage.userInfo.avatarUrl}

                         dispatch={props.dispatch}
            />
        </article>
    )
}

export default Profile;