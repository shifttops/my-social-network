import React from 'react';

import stylesPageContent from '../../../Styles/PageContent.module.css';
import stylesGeneral from '../../../Styles/Page.module.css';

import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import {Route} from "react-router";
import MessagesContainer from "./Messages/Messages Сontainer";

const PageContent = (props) => {

    return (
        <section className={`${stylesGeneral.page__content} ${stylesPageContent.contentPage}`}>
            <div className={stylesPageContent.contentPage__body}>
                <Route path={'/profile'} render={() => <Profile profilePage={props.profilePage}
                                                                dispatch={props.dispatch}/>}/>
                <Route path={'/messages'} render={() => <MessagesContainer profilePage={props.profilePage}
                                                                  messagesPage={props.messagesPage}
                                                                  dispatch={props.dispatch}
                />}/>
            </div>
        </section>

    )
}

export default PageContent;