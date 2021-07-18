const CONSTANTS = {
    ADD_MESSAGE: 'ADD_MESSAGE',
    UPDATE_NEW_MESSAGE_INFORMATION: 'UPDATE_NEW_MESSAGE_INFORMATION',
}

let initialState = {
    dialogsData: [
        {
            id: 1,
            name: "Nick",
            surname: "Kupreev",
            photoUrl: 'https://sun9-9.userapi.com/impg/UG8VExZpPRlb6YGYJEKAeyP-rkLkLhx_U6dsdw/zwWIQ9UZ118.jpg?size=960x1280&quality=96&sign=b4742913b9a925638ad8ebaac472a4e5&type=album',
            messages: [
                {
                    message: 'I love you',
                    date: '17.07.2021',
                    flag: 'incoming',
                },
                {
                    message: 'You are the best one',
                    date: '',
                    flag: 'incoming',
                },
                {
                    message: 'I love you too',
                    date: '',
                    flag: 'outgoing',
                },
            ],
        },
        {
            id: 2,
            name: "Denis",
            surname: "Baikhanov",
            photoUrl: 'https://sun9-27.userapi.com/impf/c837134/v837134870/2541e/lZAF8Vr9OhQ.jpg?size=720x599&quality=96&sign=7ef1de645bff24c67f90925a2194828d&type=album',
            messages: [
                {
                    message: 'I`m going home, sis',
                    date: '',
                    flag: 'incoming',
                },
            ]
        },
        {
            id: 3,
            name: 'Anna',
            surname: 'Baikhanova',
            messages: [
                {
                    message: 'How are you, baby?',
                    date: '',
                    flag: 'incoming',
                },
            ]
        },
    ],
    newMessage: {
        id: -1,
        message: {
            message: '',
            date: new Date().toLocaleDateString(),
            flag: 'incoming',
        }
    }
};


const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_MESSAGE: {
            let newMessage = {
                id: state.newMessage.id,
                message: {
                    message: state.newMessage.message.message,
                    date: state.newMessage.message.date,
                    flag: 'outgoing',
                }
            }

            state.dialogsData.forEach(dialog => {
                if (dialog.id === newMessage.id && newMessage.message.message !== undefined && newMessage.message.message !== '') {
                    dialog.messages.push(newMessage.message)
                }
            })


            return messagesReducer(state, {
                type: CONSTANTS.UPDATE_NEW_MESSAGE_INFORMATION,
                id: state.newMessage.id,
                message: '',
            });
        }
        case CONSTANTS.UPDATE_NEW_MESSAGE_INFORMATION: {

            let updateNewMessageText = (message) => {
                state.newMessage.message.message = message;
            }

            let updateNewMassageId = (messageID) => {
                state.newMessage.id = messageID;
            }

            updateNewMessageText(action.message);
            updateNewMassageId(action.id);

            break;
        }
        default: return state;
    }

    return state;
}

export const AddMessageActionCreator = () => ({type: CONSTANTS.ADD_MESSAGE});
export const updateNewMessageInformationActionCreator = (message, messageID) => ({
    type: CONSTANTS.UPDATE_NEW_MESSAGE_INFORMATION,
    message: message,
    id: messageID,
});

export default messagesReducer;