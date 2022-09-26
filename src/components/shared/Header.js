import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <NavLink to="/" className="header-ecommerce">
                <h1 className='header__log'>e-commerce</h1>
            </NavLink>

            <nav className='header__nav'>
                <ul className='header__list'>
                    <li className='header__item'>
                        <NavLink 
                        className={({isActive}) => isActive ? 'active-link': ""}
                        to="/login"
                        >
                            <i className="fa-regular fa-user"></i>
                        </NavLink>
                    </li>
                    <li className='header__item'>
                        <NavLink
                        className={({isActive}) => isActive ? 'active-link': ""}
                         to="/purchases" 
                        >
                            <i className="fa-solid fa-bag-shopping"></i>
                        </NavLink>
                    </li>
                    <li className='header__item'><h2 className='header__link'><i className="fa-solid fa-cart-plus fa-card"></i></h2></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;