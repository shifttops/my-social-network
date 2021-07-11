import React from 'react'

import stylesGeneral from './Page.module.css'
import PageNav from "./Page Navigation/PageNav";
import PageContent from "./Page Content/PageContent";


const Page = () => {
    return(
        <main className={stylesGeneral.page}>
            <div className={`${stylesGeneral.page__container} + ${stylesGeneral._container}`}>
                <div className={stylesGeneral.page__body}>
                    <PageNav/>
                    <PageContent/>
                </div>
            </div>
        </main>
    )
}

export default Page;