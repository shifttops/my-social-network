import React from 'react';

import * as axios from "axios";
import Search from "./Search";

class SearchAPI extends React.Component {
    constructor(props) {
        super (props)
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get ( `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentDepth}&count=${this.props.displayingUsersAmount}` )
            .then ( response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data)
            } )

    }

    downloadUsers = () => {
        this.props.changeDepth (this.props.currentDepth + 1)

        this.props.toggleIsFetching(true);
        axios.get ( `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentDepth + 1}&count=${this.props.displayingUsersAmount}` )
            .then ( response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data)
            } )
    }

    render() {
        return <>
            <Search usersData={this.props.usersData}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    isFetching={this.props.isFetching}
                    downloadUsers={this.downloadUsers}
                    depth={this.currentDepth}
            />
        </>
    }
}

export default SearchAPI;