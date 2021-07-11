import React from 'react'

const Page = () => {
    return(
        <main className="page">
            <div className="page__container _container">
                <div className="page__body">
                    <nav className="page__navigation navigation-page">
                        <div className="navigation-page__body">
                            <div className="navigation-page__profile navigation-page__link"><a href="https://www.google.com/">Profile</a></div>
                            <div className="navigation-page__messages navigation-page__link"><a href="https://www.google.com/">Messages</a></div>
                            <div className="navigation-page__news navigation-page__link "><a href="https://www.google.com/">News</a></div>
                            <div className="navigation-page__music navigation-page__link"><a href="https://www.google.com/">Music</a></div>
                            <div className="navigation-page__settings navigation-page__link">
                                <a href="https://www.google.com/">Settings</a>
                            </div>
                        </div>
                    </nav>
                    <section className="page__content content-page">
                        <div className="content-page__body">
                            <div className="content-page__user">
                                <div className="content-page__avatar"><img src="https://sun9-62.userapi.com/impg/c857532/v857532088/1694a8/lNulhqu_wkg.jpg?size=646x1080&quality=96&sign=051246fe03e9100992627a57b09849c1&type=album" alt=""/></div>
                                <div className="content-page__information information-page">
                                    <div className="information-page__name">Kupreeva Daria</div>
                                    <div className="information-page__birth">Date of Birth: 01 May</div>
                                    <div className="information-page__city">City: Minsk</div>
                                    <div className="information-page__edu">Education: BSU</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Page;