import React from 'react';
import { Link } from 'react-router-dom';

import './logo.styles.scss';

const Logo = () => (
    <div className='logo-container'>
        <Link to='/'>
            <img className='logo-img' alt='logo' src='http://iconutopia.com/wp-content/uploads/2016/06/space-dog-laika1.png'/>
        </Link>
    </div>
)

export default Logo;