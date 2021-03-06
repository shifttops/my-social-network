import React from 'react';

import * as axios from "axios";
import Profile from "./Profile";

class ProfileAPI extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setNewUser(response.data)
            })
    }

    render() {
        return (
           <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

export default ProfileAPI;