import React from 'react';

import stylesMessages from '../../../../Styles/Messages.module.css';
import stylesGeneral from '../../../../Styles/PageContent.module.css';

import DialogsItem from "./DIalogs/Dialogs Item/Dialogs Item";
import Message from "./Message/Message";


const Messages = (props) => {

    let messageID = 1;

    let dialogsElements = props.messagesPage.dialogsData.map(dialog => <DialogsItem
        avatarUrl={dialog.photoUrl}
        userName={`${dialog.surname} ${dialog.name}`}
        id={dialog.id}
        message={dialog.messages[dialog.messages.length - 1]}/>);


    let createMessagesData = (dialogsData) => {

        let messagesData;

        for (const dialog of dialogsData) {
            if (dialog.id === messageID) {
                messagesData = dialog.messages.map(message => {
                    return(
                        <Message url={dialog.photoUrl}
                                 userName={`${dialog.surname} ${dialog.name}`}
                                 text={message}/>
                    )
                });
            }
        }
        return messagesData;
    }

    let messagesData = createMessagesData(props.messagesPage.dialogsData);



    return (
        <article className={`${stylesGeneral.contentPage__messages} ${stylesMessages.messages}`}>
            <div className={`${stylesMessages.messages__dialogs} ${stylesMessages.dialogsMessages}`}>
                <div className={stylesMessages.dialogsMessages__items}>
                    {dialogsElements}
                </div>
            </div>
            <div className={`${stylesMessages.dialogsMessages__dialog} ${stylesMessages.dialog}`}>
                <div className={stylesMessages.dialog__messages}>
                    {messagesData}
                </div>
            </div>
        </article>
    )
}

export default Messages;