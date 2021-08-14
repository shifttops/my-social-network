const CONSTANTS = {
    ADD_POST: 'ADD__POST',
    UPDATE_NEW_POST_INFORMATION: 'UPDATE_NEW_POST_INFORMATION',
    SET_NEW_USER: 'SET_NEW_USER',
}

let initialState = {
    profile: null,
    postsData: [
        {
            text: 'I love React',
            date: '13.07.2021'
        },
        {
            text: 'I want to job!',
            date: '13.07.2021'
        },
        {
            text: 'How are you?',
            date: '15.07.2021'
        },
        {
            text: 'Wtf..?',
            date: '15.07.2021'
        },
    ],
    newPost: {
        text: '',
        date: new Date().toLocaleDateString(),
    },
};

const profileReducer = (state = initialState, action) => {

    let stateCopy = Object.assign({}, state);

    switch (action.type){
        case CONSTANTS.ADD_POST: {
            let newPost = {
                text: state.newPost.text,
                date: state.newPost.date,
            }

            stateCopy.postsData = Object.assign([], state.postsData)

            if(newPost.text !== ''){
                stateCopy.postsData.push(newPost);
            }

            return profileReducer(stateCopy, updateNewPostInformation(''))
        }
        case CONSTANTS.UPDATE_NEW_POST_INFORMATION: {
            let updateNewPostText = (postText) => {
                stateCopy.newPost.text = postText;
            }

            updateNewPostText(action.postText);

            return stateCopy;

        }
        case CONSTANTS.SET_NEW_USER: {
            return {
                ...state,
                profile: action.user,
            }
        }
        default: return stateCopy;
    }
}

export const addPost = () => ({type: CONSTANTS.ADD_POST});
export const updateNewPostInformation = (text) => ({
    type: CONSTANTS.UPDATE_NEW_POST_INFORMATION,
    postText: text,
});
export const setNewUser = (user) => ({type: CONSTANTS.SET_NEW_USER, user})

export default profileReducer;