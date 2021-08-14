import React from 'react';

import stylesProfile from '../../../../../Styles/Profile.module.css';
import InfProfileName from "./User Name/infPageName";
import Description from "./Description/Description";
import PostsContainer from "./Posts/PostsContainer";
import ContactsContainer from "./Contacts/Contacts Container.jsx";

const ProfileInfo = (props) => {
    return(
        <div className={`${stylesProfile.profile__information} ${stylesProfile.informationProfile}`}>
            <InfProfileName userName={props.profile.fullName}/>
            <Description profile={props.profile}/>
            <PostsContainer/>
            <ContactsContainer contacts={props.profile.contacts}/>
        </div>
    )
}

export default ProfileInfo;