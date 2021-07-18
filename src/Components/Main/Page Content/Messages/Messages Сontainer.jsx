import React from 'react';

import stylesMessages from '../../../../Styles/Messages.module.css';

import DialogsItem from "./DIalogs/Dialogs Item/Dialogs Item";
import Message from "./Message/Message";
import {AddMessageActionCreator, updateNewMessageInformationActionCreator} from "../../../../Redux/messagesReducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {

    let dialogsElements = props.messagesPage.dialogsData.map(dialog => {
        if(dialog.messages[dialog.messages.length - 1].flag === 'outgoing'){
            return(
                <DialogsItem
                    dispatch={props.dispatch}
                    avatarUrl={dialog.photoUrl}
                    userName={`${dialog.surname} ${dialog.name}`}
                    id={dialog.id}
                    message={`You: ${dialog.messages[dialog.messages.length - 1].message}`}/>
            )
        }else{
            return(
                <DialogsItem
                    dispatch={props.dispatch}
                    avatarUrl={dialog.photoUrl}
                    userName={`${dialog.surname} ${dialog.name}`}
                    id={dialog.id}
                    message={dialog.messages[dialog.messages.length - 1].message}/>
            )
        }


    })

    let createMessagesData = (dialogsData) => {
        let messagesData;

        for (const dialog of dialogsData) {
            if (dialog.id === props.messagesPage.newMessage.id) {
                messagesData = dialog.messages.map(message => {
                    if(message.flag === 'incoming'){
                        return(
                            <Message addClass={stylesMessages.incoming}
                                     url={dialog.photoUrl}
                                     userName={`${dialog.surname} ${dialog.name}`}
                                     text={message.message}
                                     date={message.date}
                            />
                        )
                    } else if(message.flag === 'outgoing'){
                        return(
                            <Message addClass={stylesMessages.outgoing}
                                     url={props.profilePage.userInfo.avatarUrl}
                                     userName={props.profilePage.userInfo.userName}
                                     text={message.message}
                                     date={message.date}
                            />
                        )
                    }
                });
            }
        }
        return messagesData;
    };

    let messageData = createMessagesData(props.messagesPage.dialogsData);

    let updateNewMassageInformation = (message) => {
        props.dispatch({
            type: 'UPDATE_NEW_MESSAGE_INFORMATION',
            message: message,
            id: props.messagesPage.newMessage.id
        });
    }

    let addMessage = () => {
        props.dispatch(AddMessageActionCreator())
    }

    return (
        <Messages dialogsElements={dialogsElements}
                  messageData={messageData}
                  updateNewMassageInformation={updateNewMassageInformation}
                  addMessage={addMessage}
        />
    )
}

export default MessagesContainer;