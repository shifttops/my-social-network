import React from 'react';

import stylesProfile from '../../../../../../Styles/Profile.module.css';
import stylesPost from '../../../../../../Styles/Post.module.css'


const Post = (props) => {
    return (
        <div className={`${stylesProfile.informationProfile__post} + ${stylesPost.userPost}`}>
            <div className={stylesPost.userPost__date}>
                {props.date}
            </div>
            <div className={stylesPost.userPost__avatar}>
                <img
                    src={props.avatarUrl}
                    alt=""/>
            </div>
            <div className={stylesPost.userPost__content}>
                {props.text}
            </div>
        </div>
    )
}

export default Post;