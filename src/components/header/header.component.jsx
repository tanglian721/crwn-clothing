import React from 'react';

import { ReactComponent as Logo } from '../../asset/crown.svg'

import { Link } from 'react-router-dom';

import './header.style.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
            SHOP
            </Link> 
            <Link className='option' to='/shop'>
            CONTACT
            </Link> 
        </div>
    </div>
)

export default Header;