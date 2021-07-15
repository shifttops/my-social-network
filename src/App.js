//import logo from './logo.svg';
import React from 'react';
import stylesApp from './Styles/Page.module.css';

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Page from "./Components/Main/Page";

import {BrowserRouter} from "react-router-dom";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className={stylesApp.wrapper}>
                <Header/>
                <Page userInfo={props.userInfo}
                      postsData={props.postsData}
                      dialogsData={props.dialogsData}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
