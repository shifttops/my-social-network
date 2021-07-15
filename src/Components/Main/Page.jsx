import React from 'react'

import stylesGeneral from '../../Styles/Page.module.css'
import PageNav from "./Page Navigation/PageNav";
import PageContent from "./Page Content/PageContent";


const Page = (props) => {

    return(
        <main className={stylesGeneral.page}>
            <div className={`${stylesGeneral.page__container} ${stylesGeneral._container}`}>
                <div className={stylesGeneral.page__body}>
                    <PageNav/>
                    <PageContent userInfo={props.userInfo}
                                 postsData={props.postsData}/>
                </div>
            </div>
        </main>
    )
}

export default Page;