import React from 'react';

import stylesProfile from '../../../../../../../Styles/Profile.module.css';
import stylesAddPost from '../../../../../../../Styles/AddPost.module.css'


const AddPost = () => {
    return (
        <div className={`${stylesProfile.informationProfile__posts__addPost} + ${stylesAddPost.addingPost}`}>
            <textarea className={stylesAddPost.addingPost__input} name="" id=""/>
            <a href="#" className={stylesAddPost.addingPost__button}>Add post</a>
        </div>   
    )
}

export default AddPost;