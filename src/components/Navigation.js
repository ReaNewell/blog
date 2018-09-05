import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => (
    <div>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Portfolio</Link>
    </div>
);