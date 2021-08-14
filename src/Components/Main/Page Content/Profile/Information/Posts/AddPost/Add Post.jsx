import React from 'react';

import stylesProfile from '../../../../../../../Styles/Profile.module.css';
import stylesAddPost from '../../../../../../../Styles/AddPost.module.css';

const AddPost = (props) => {

    let newPostRef = React.createRef();

    let addPost = () => {
        props.createNewPost();

        console.log(props.postsData);
        newPostRef.current.value = '';
    }

    let onPostChange = () => {
        props.updateNewPostInformation(newPostRef.current.value);
    }

    return (
        <div className={`${stylesProfile.informationProfile__posts__addPost} + ${stylesAddPost.addingPost}`}>
            <textarea onChange={onPostChange} ref={newPostRef} className={stylesAddPost.addingPost__input}/>
            <button onClick={addPost} type={"button"} className={stylesAddPost.addingPost__button}>Add post</button>
        </div>   
    );
}

export default AddPost;