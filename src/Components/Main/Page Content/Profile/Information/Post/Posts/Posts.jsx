import React from 'react';

import stylesProfile from '../../../../../../../Styles/Profile.module.css';
import Post from "../Post";
import AddPost from "../AddPost/Add Post.jsx";

const Posts = (props) => {

    let completePosts = props.postsData.map((post) => {
        return(
            <Post avatarUrl={props.avatarUrl} text={post.text} date={post.date}/>
        )
    })

    return (
        <div className={stylesProfile.informationProfile__posts}>
            <AddPost/>
            My posts:
            {completePosts}
        </div>
    )
}

export default Posts