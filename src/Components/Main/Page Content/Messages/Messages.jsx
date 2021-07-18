import React from 'react';

import stylesMessages from '../../../../Styles/Messages.module.css';
import stylesGeneral from '../../../../Styles/PageContent.module.css';

const Messages = (props) => {

    let onMessageChange = (e) => {
        let message = e.target.value;

        props.updateNewMassageInformation(message);
    }

    let sendMessage = () => {
        props.addMessage();
    }

    return (
        <article className={`${stylesGeneral.contentPage__messages} ${stylesMessages.messages}`}>
            <div className={`${stylesMessages.messages__dialogs} ${stylesMessages.dialogsMessages}`}>
                <div className={stylesMessages.dialogsMessages__items}>
                    {props.dialogsElements}
                </div>
            </div>
            <div className={`${stylesMessages.dialogsMessages__dialog} ${stylesMessages.dialog}`}>
                <div className={stylesMessages.dialog__messages}>
                    {props.messageData}
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