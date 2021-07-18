import messagesReducer from "./messagesReducer";

const CONSTANTS = {
    ADD_POST: 'ADD__POST',
    UPDATE_NEW_POST_INFORMATION: 'UPDATE__NEW__POST__INFORMATION',
}

let initialState = {
    userInfo: {
        userName: 'Kupreeva Daria',
        avatarUrl: 'https://sun9-62.userapi.com/impg/c857532/v857532088/1694a8/lNulhqu_wkg.jpg' +
            '?size=646x1080&quality=96&sign=051246fe03e9100992627a57b09849c1&type=album',
        birthDate: '01 May 2004',
        city: 'Minsk',
        edu: 'BSU',
    },
    postsData: [
        {
            text: 'I love Nick VERYY MUCH',
            date: '13.07.2021'
        },
        {
            text: 'Nick loves me moree',
            date: '13.07.2021'
        },
        {
            text: 'I married Nick today',
            date: '15.07.2021'
        },
        {
            text: 'Nick отлизал мне очень хорошо today)',
            date: '15.07.2021'
        },
    ],
    newPost: {
        text: '',
        date: new Date().toLocaleDateString(),
    },
};

const profileReducer = (state = initialState, action) => {

    switch (action.type){
        case CONSTANTS.ADD_POST: {
            let newPost = {
                text: state.newPost.text,
                date: state.newPost.date,
            }

            if(newPost.text !== ''){
                state.postsData.push(newPost);
            }

            return profileReducer(state, {
                type: CONSTANTS.UPDATE_NEW_POST_INFORMATION,
                postText: '',
            })
        }
        case CONSTANTS.UPDATE_NEW_POST_INFORMATION: {
            let updateNewPostText = (postText) => {
                state.newPost.text = postText;
            }

            updateNewPostText(action.postText);

            break;
        }
        default: return state;
    }

    return state;
}

export const AddPostActionCreator = () => ({type: CONSTANTS.ADD_POST});
export const updateNewPostInformationActionCreator = (text) => ({
    type: CONSTANTS.UPDATE_NEW_POST_INFORMATION,
    postText: text,
});

export default profileReducer;