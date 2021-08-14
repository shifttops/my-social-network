import React from 'react';

import stylesGeneral from '../../../../Styles/PageContent.module.css';
import stylesSearch from '../../../../Styles/Search.module.css';
import User from "./User/User.jsx";
import Preloader from "../../../Сommon/Preloader/Preloader";

class Search extends React.Component{
    render() {
        return(
            <section className={ stylesGeneral.contentPage__search + ' ' + stylesSearch.search }>
                <div className={ stylesSearch.search__body }>
                    <div className={ stylesSearch.search__label }>
                        Users
                    </div>
                    <div className={ stylesSearch.search__users + ' ' + stylesSearch.usersList }>
                        <div className={ stylesSearch.usersList__body }>
                            {
                                this.props.usersData.map ( user => {
                                    return (
                                        <User userInfo={ user }
                                              follow={ this.props.follow }
                                              unfollow={ this.props.unfollow }
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                    {this.props.isFetching ? <Preloader/> : null}
                    <button onClick={this.props.downloadUsers} className={stylesSearch.search__button + ' ' + stylesSearch.btn}>Show More</button>
                </div>
            </section>
        )
    }
}

export default Search;