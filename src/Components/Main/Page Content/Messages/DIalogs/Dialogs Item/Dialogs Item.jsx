import React from 'react';

import stylesItem from '../../../../../../Styles/DialogsItem.module.css';
import stylesMessages from '../../../../../../Styles/Messages.module.css';
import {NavLink} from "react-router-dom";
import {updateNewMessageInformationActionCreator} from "../../../../../../Redux/store";

const DialogsItem = (props) => {

    let onMessageChange = () => {
        props.dispatch({
            type: 'UPDATE_NEW_MESSAGE_INFORMATION',
            id: props.id,
        });
    }

    return(
        <NavLink onClick={onMessageChange} activeClassName={stylesItem.active} to={`/messages/${props.id}`} className={`${stylesMessages.dialogsMessages__item} ${stylesItem.itemDialogs}`}>
            <div className={stylesItem.itemDialogs__avatar}>
                <img src={props.avatarUrl} alt=""/>
            </div>
            <div className={stylesItem.itemDialogs__userName}>
                {props.userName}
            </div>
            <div className={stylesItem.itemDialogs__message}>
                {props.message}
            </div>
        </NavLink>
    )
}

export default DialogsItem;