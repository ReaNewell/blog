import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
    <header className="header">
        <Link className="header__title" to="/">Rea's Dev Journey</Link>
    </header>
);