import React from 'react';

import preloadImage from '../../../images/preloader.svg'
import preloaderStyles from '../../../Styles/Preloader.module.css'

class Preloader extends React.Component{
    render() {
        return(
            <div className={preloaderStyles.preloader}>
                <img src={preloadImage} alt=""/>
            </div>
        )
    }
}

export default Preloader;