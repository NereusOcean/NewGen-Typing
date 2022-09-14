import React from 'react'
import settingsImage from "../Assets/img/Settings.png";
import avatar from "../Assets/img/Avatar.png";

const Header = (props) => {
    return (
        <div className='header'>
            <div className='header__info'>
                <img className='header__avatar' src={avatar} alt='NotFound'/>
                <div className='header__text'>{props.text}</div>
            </div>
            <img className='header__settings' onClick={props.func? props.func:''} src={settingsImage} alt='NotFound'/>
        </div>
    )
}

export default Header;