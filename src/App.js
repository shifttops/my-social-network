//import logo from './logo.svg';
import React from 'react';
import stylesApp from './Styles/Page.module.css';

import Header from "./Components/Header/Header";
import Page from "./Components/Main/Page";

import {BrowserRouter} from "react-router-dom";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className={stylesApp.wrapper}>
                <Header/>
                <Page messagesPage={props.messagesPage}
                      profilePage={props.profilePage}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
