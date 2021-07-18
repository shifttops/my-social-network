import React from 'react';

import stylesApp from './Styles/Page.module.css';

import Header from "./Components/Header/Header";
import Page from "./Components/Main/Page";


const App = (props) => {

    let messagesPage = props.state.messagesPage;
    let profilePage = props.state.profilePage;

    return (
        <div className={stylesApp.wrapper}>
            <Header/>
            <Page messagesPage={messagesPage}
                  profilePage={profilePage}
                  dispatch={props.dispatch}
            />
        </div>
    );
}

export default App;
