import React from 'react';

import stylesMessages from '../../../../Styles/Messages.module.css';
import stylesGeneral from '../../../../Styles/PageContent.module.css';

import DialogsItem from "./DIalogs/Dialogs Item/Dialogs Item";
import Message from "./Message/Message";


const Messages = () => {

    let dialogsData = [
        {
            id: 1,
            name: "Nick",
            surname: "Kupreev",
            photoUrl: 'https://sun9-9.userapi.com/impg/UG8VExZpPRlb6YGYJEKAeyP-rkLkLhx_U6dsdw/zwWIQ9UZ118.jpg?size=960x1280&quality=96&sign=b4742913b9a925638ad8ebaac472a4e5&type=album',
            messages: [
                'I love you',
                'You are the best one'
            ]
        },
        {
            id: 2,
            name: "Denis",
            surname: "Baikhanov",
            photoUrl: 'https://sun9-27.userapi.com/impf/c837134/v837134870/2541e/lZAF8Vr9OhQ.jpg?size=720x599&quality=96&sign=7ef1de645bff24c67f90925a2194828d&type=album',
            messages: [
                'I`m going home, sis',
            ]
        },
        {
            id: 3,
            name: 'Anna',
            surname: 'Baikhanova',
            messages: [
                'How are you, baby?',
            ]
        }
    ]

    let dialogsElements = dialogsData.map(dialog => <DialogsItem
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
                        userName={`${dialogsData[0].surname} ${dialogsData[0].name}`}
                        text={'I love you'}/>
                    <Message
                        url={'https://sun9-9.userapi.com/impg/UG8VExZpPRlb6YGYJEKAeyP-rkLkLhx_U6dsdw/zwWIQ9UZ118.jpg?size=960x1280&quality=96&sign=b4742913b9a925638ad8ebaac472a4e5&type=album'}
                        userName={`${dialogsData[0].surname} ${dialogsData[0].name}`}
                        text={'You are the best one'}/>
                </div>
            </div>
        </article>
    )
}

export default Messages;