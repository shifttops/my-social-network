import React from 'react';

import Contact from "./Contact";
import Contacts from "./Contacts";

import facebookIcon from '../../../../../../images/facebook.png'
import vkIcon from '../../../../../../images/vk.png'
import twitterIcon from '../../../../../../images/twitter.png'
import instagramIcon from '../../../../../../images/instagram.png'
import youtubeIcon from '../../../../../../images/youtube.png'
import githubIcon from '../../../../../../images/github.png'
import emailIcon from '../../../../../../images/email.png'
import webIcon from '../../../../../../images/web.png'

class ContactsContainer extends React.Component {
    constructor(props) {
        super (props);
        this.icons = [facebookIcon, webIcon, vkIcon, twitterIcon, instagramIcon, youtubeIcon, githubIcon, emailIcon]
    }

    createContacts = () => {
        let contactsArray = []
        let counter = 0;

        for (const contact in this.props.contacts) {

            if (this.props.contacts.hasOwnProperty(contact)) {
                console.log ( contact )
                if (this.props.contacts[contact]) {
                    contactsArray.push(<Contact link={this.props.contacts[contact]} image={this.icons[counter]}/>)
                }
            }

            counter++;
        }

        return contactsArray;
    }

    render() {
        return(
            <Contacts contacts={this.createContacts()}/>
        )
    }
}

export default ContactsContainer