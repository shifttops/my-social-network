import React from "react";

import stylesSearch from '../../../../../Styles/Search.module.css';
import avatar from '../../../../../images/avatar.jpg'
import { NavLink } from "react-router-dom";


const User = (props) => {

    const photo = <NavLink to={'/profile/' + props.userInfo.id}><img src={avatar} alt=""/></NavLink>

    return(

        <div className={stylesSearch.user}>
            <div className={stylesSearch.user__body}>

                <div className={stylesSearch.user__avatar}>
                    {
                        props.userInfo.photos.small === null ? photo : props.userInfo.photos.small
                    }
                </div>
                {
                    props.userInfo.isFollowed ?
                        <button type={"button"} onClick={() => {props.unfollow(props.userInfo.id)}} id={props.userInfo.id} className={stylesSearch.user__btn + ' ' + stylesSearch.btn}>Unfollow</button>
                        : <button type={"button"} onClick={() => {props.follow(props.userInfo.id)}} id={props.userInfo.id} className={stylesSearch.user__btn + ' ' + stylesSearch.btn}>Follow</button>
                }
                <div className={ stylesSearch.user__info + ' ' + stylesSearch.infoUser }>
                    <div className={stylesSearch.infoUser__name}>
                        {props.userInfo.name}
                    </div>
                    <div className={stylesSearch.infoUser__age}>
                        {props.userInfo.age} y.o.
                    </div>
                    <div className={stylesSearch.infoUser__city}>
                        {props.userInfo.city}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;