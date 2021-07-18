import React from 'react';

import stylesMessages from '../../../../../Styles/Messages.module.css';

const Message = (props) => {
        return (
            <div className={stylesMessages.dialog__message + ' ' + stylesMessages.messageDialog + ' ' /* + props.addClass*/}>
                <div className={stylesMessages.messageDialog__avatar}>
                    <img src={props.url} alt=""/>
                </div>
                <div className={stylesMessages.messageDialog__userName}>
                    {props.userName}
                </div>
                <div className={stylesMessages.messageDialog__text}>
                    {props.text}
                </div>
                <div className={stylesMessages.messageDialog__date}>
                    {props.date}
                </div>
            </div>
        )
}


export default Message;