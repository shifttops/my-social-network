import React from 'react';

import stylesMessages from '../../../../Styles/Messages.module.css';
import stylesGeneral from '../../../../Styles/PageContent.module.css';
import DialogsItem from "./DIalogs/Dialogs Item/Dialogs Item";
import Message from "./Message/Message";


const Messages = (props) => {

    let dialogsElements = props.messagesPage.dialogsData.map(dialog => {
        if (dialog.messages[dialog.messages.length - 1].flag === 'outgoing') {
            return (
                <DialogsItem
                    updateMessageID={props.updateMessageID}
                    avatarUrl={dialog.photoUrl}
                    userName={`${dialog.surname} ${dialog.name}`}
                    id={dialog.id}
                    message={`You: ${dialog.messages[dialog.messages.length - 1].message}`}/>
            )
        } else {
            return (
                <DialogsItem
                    updateMessageID={props.updateMessageID}
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

    let onMessageChange = (e) => {
        let message = e.target.value;

        props.updateNewMassageInformation(message, props.messagesPage.newMessage.id);
    }

    let sendMessage = () => {
        props.addMessage();
    }
    return (
        <article className={`${stylesGeneral.contentPage__messages} ${stylesMessages.messages}`}>
            <div className={`${stylesMessages.messages__dialogs} ${stylesMessages.dialogsMessages}`}>
                <div className={stylesMessages.dialogsMessages__items}>
                    {dialogsElements}
                </div>
            </div>
            <div className={`${stylesMessages.dialogsMessages__dialog} ${stylesMessages.dialog}`}>
                <div className={stylesMessages.dialog__messages}>
                    {messageData}
                </div>
                <div className={`${stylesMessages.dialog__actions} ${stylesMessages.actionsDialog}`}>
                    <textarea onChange={onMessageChange} className={stylesMessages.actionsDialog__input} name="" id=""> </textarea>
                    <button onClick={sendMessage} type={"button"} className={stylesMessages.actionsDialog__button}>Send</button>
                </div>
            </div>
        </article>
    )
}

export default Messages;