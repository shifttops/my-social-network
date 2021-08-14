import React from "react";
import { connect } from "react-redux";
import Posts from "./Posts";
import { addPost , updateNewPostInformation } from "../../../../../../Redux/profileReducer";

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        avatarUrl: state.profilePage.profile.photos.small,
    }
}

let PostsContainer = connect(mapStateToProps, {addPost, updateNewPostInformation})(Posts);

export default PostsContainer;
