import React from 'react';

import Logo from '../logo/logo.component';
import SearchBar from '../search-bar/search-bar.component';
import './header.styles.scss';

const Header = () => (
    <div className='header-container'>
        <Logo />
        <SearchBar />
    </div>
)

export default Header;