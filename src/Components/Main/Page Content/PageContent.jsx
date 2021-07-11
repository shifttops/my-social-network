import React from 'react';

import stylesPageContent from './PageContent.module.css';
import stylesGeneral from '../Page.module.css';
import DescriptionField from "./Discription Field/Discription Field";

const PageContent = () => {
    return (
        <section className={`${stylesGeneral.page__content} + ${stylesPageContent.contentPage}`}>
            <div className={stylesPageContent.contentPage__body}>
                <div className={stylesPageContent.contentPage__user}>
                    <div className={stylesPageContent.contentPage__avatar}><img
                        src="https://sun9-62.userapi.com/impg/c857532/v857532088/1694a8/lNulhqu_wkg.jpg?size=646x1080&quality=96&sign=051246fe03e9100992627a57b09849c1&type=album"
                        alt=""/></div>
                    <div className={`${stylesPageContent.contentPage__information} + ${stylesPageContent.informationPage}`}>
                        <div className={stylesPageContent.informationPage__name}>Kupreeva Daria</div>
                        <div className={stylesPageContent.informationPage__description}>
                            <DescriptionField birthDate={'01 May'}/>
                            <DescriptionField city={'Minsk'}/>
                            <DescriptionField edu={'BSU'}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageContent;