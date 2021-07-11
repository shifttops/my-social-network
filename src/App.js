//import logo from './logo.svg';
import React from 'react';
import stylesApp from './Components/Main/Page.module.css';

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Page from "./Components/Main/Page";

const App = () => {
    return (
        <div className={stylesApp.wrapper}>
            <Header/>
            <Page/>
            <Footer/>
        </div>
    );
}

export default App;
