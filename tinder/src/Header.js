import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum';

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className="header_icon" fontSize="large" />
            </IconButton>

            <img
                className="header_logo"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthecoco.net%2Fwp-content%2Fuploads%2F2018%2F08%2Ftinder-logo.png&f=1&nofb=1"
                alt="logo"
            />

            <IconButton>
                <ForumIcon className="header_icon" fontSize="large" />
            </IconButton>

        </div>
    )
}

export default Header
