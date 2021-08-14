import React from 'react';

import stylesApp from './Styles/Page.module.css';

import Header from "./Components/Header/Header";
import Page from "./Components/Main/Page";

class App extends React.Component{

    render() {
        return(
            <div className={stylesApp.wrapper}>
                <Header/>
                <Page/>
            </div>
        )
    }
}

export default App;
