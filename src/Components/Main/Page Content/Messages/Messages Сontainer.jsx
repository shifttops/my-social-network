import React from 'react';

import { addMessage , updateNewMessageInformation } from "../../../../Redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        messagesPage: state.messagesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessage());
        },
        updateNewMassageInformation: (message, id) => {
            dispatch(updateNewMessageInformation(message, id))
        },
        updateMessageID: (id) => {
            dispatch({
                type: 'UPDATE_NEW_MESSAGE_INFORMATION',
                id: id,
            });
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;