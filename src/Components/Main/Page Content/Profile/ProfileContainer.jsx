import React from 'react';
import { connect } from "react-redux";
import ProfileAPI from "./ProfileAPI";
import { setNewUser } from "../../../../Redux/profileReducer";

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        profile: state.profilePage.profile,
    }
}

let ProfileContainer = connect(mapStateToProps, {setNewUser})(ProfileAPI)

export default ProfileContainer;