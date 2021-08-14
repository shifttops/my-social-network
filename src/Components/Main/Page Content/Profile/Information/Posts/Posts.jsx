import React from 'react';

import stylesProfile from '../../../../../../Styles/Profile.module.css';
import Post from "./Post/Post";
import AddPost from "./AddPost/Add Post";

const Posts = (props) => {

    return (
        <div className={stylesProfile.informationProfile__posts}>
            <AddPost updateNewPostInformation={props.updateNewPostInformation}
                     createNewPost={props.addPost}
            />
            My posts:
            {
                props.postsData.map((post) => {
                return(
                    <Post avatarUrl={props.avatarUrl} text={post.text} date={post.date}/>
                )
            })
            }
        </div>
    )
}

export default Posts