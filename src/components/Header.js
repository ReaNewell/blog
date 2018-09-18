import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
    <header className="header">
        <Link className="header__title" to="/">
            <img className="logo" src="/images/rea-logo.png" alt="page logo"/>
            Rea's Dev Journey
        </Link>
    </header>
);