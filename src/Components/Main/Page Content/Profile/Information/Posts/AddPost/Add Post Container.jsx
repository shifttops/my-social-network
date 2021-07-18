import React from 'react';

import {AddPostActionCreator, updateNewPostInformationActionCreator} from "../../../../../../../Redux/profileReducer";
import AddPost from "./Add Post";


const AddPostContainer = (props) => {

    let createNewPost = () => {
        props.dispatch(AddPostActionCreator());
    }

    let updateNewPostInformation = (text) => {
        props.dispatch(updateNewPostInformationActionCreator(text));
    }

    return (
        <AddPost createNewPost={createNewPost} updateNewPostInformation={updateNewPostInformation}/>
    );
}

export default AddPostContainer;