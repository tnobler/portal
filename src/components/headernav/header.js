import React, { Component } from 'react';
import Logo from '../logo';

class Header extends Component {
    render () {
        return (
            <div className='header'>
                {/* <Logo/> */}
                <img alt='rebus capital logo plain' src="/assets/rebus-logo-black-background.png"/>
                
            </div>
        );
    }
}

export default Header;