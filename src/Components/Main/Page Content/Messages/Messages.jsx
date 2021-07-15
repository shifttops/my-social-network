import React from 'react';

import stylesMessages from '../../../../Styles/Messages.module.css';
import stylesGeneral from '../../../../Styles/PageContent.module.css';

import DialogsItem from "./DIalogs/Dialogs Item/Dialogs Item";
import Message from "./Message/Message";


const Messages = (props) => {

    let messageID = 1;

    let dialogsElements = props.dialogsData.map(dialog => <DialogsItem
        avatarUrl={dialog.photoUrl}
        userName={`${dialog.surname} ${dialog.name}`}
        id={dialog.id}
        message={dialog.messages[dialog.messages.length - 1]}/>);

    return (
        <article className={`${stylesGeneral.contentPage__messages} ${stylesMessages.messages}`}>
            <div className={`${stylesMessages.messages__dialogs} ${stylesMessages.dialogsMessages}`}>
                <div className={stylesMessages.dialogsMessages__items}>
                    {dialogsElements}
                </div>
            </div>
            <div className={`${stylesMessages.dialogsMessages__dialog} ${stylesMessages.dialog}`}>
                <div className={stylesMessages.dialog__messages}>
                    <Message
                        url={'https://sun9-9.userapi.com/impg/UG8VExZpPRlb6YGYJEKAeyP-rkLkLhx_U6dsdw/zwWIQ9UZ118.jpg?size=960x1280&quality=96&sign=b4742913b9a925638ad8ebaac472a4e5&type=album'}
                        userName={`${props.dialogsData[messageID - 1].surname} ${props.dialogsData[messageID - 1].name}`}
                        text={props.dialogsData[messageID - 1].messages[0]}/>
                    <Message
                        url={'https://sun9-9.userapi.com/impg/UG8VExZpPRlb6YGYJEKAeyP-rkLkLhx_U6dsdw/zwWIQ9UZ118.jpg?size=960x1280&quality=96&sign=b4742913b9a925638ad8ebaac472a4e5&type=album'}
                        userName={`${props.dialogsData[messageID - 1].surname} ${props.dialogsData[messageID - 1].name}`}
                        text={props.dialogsData[messageID - 1].messages[1]}/>
                </div>
            </div>
        </article>
    )
}

export default Messages;