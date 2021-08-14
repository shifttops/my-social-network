import React from 'react';

import stylesPageContent from '../../../Styles/PageContent.module.css';
import stylesGeneral from '../../../Styles/Page.module.css';

import {Route} from "react-router";
import MessagesContainer from "./Messages/Messages Сontainer";
import SearchContainer from "./Search/SearchContainer";
import ProfileContainer from "./Profile/ProfileContainer.jsx";

class PageContent extends React.Component{
    render() {
        return (
            <section className={`${stylesGeneral.page__content} ${stylesPageContent.contentPage}`}>
                <div className={stylesPageContent.contentPage__body}>
                    <Route path={'/profile'} render={() => <ProfileContainer/>}/>
                    <Route path={'/messages'} render={() => <MessagesContainer/>}/>
                    <Route path={'/search'} render={() => <SearchContainer/>}/>
                </div>
            </section>

        )
    }
}

export default PageContent;