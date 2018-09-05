import React from 'react';
import { Link } from 'react-router-dom';

export const NavigationButton = (props) => (
    <Link to={props.destination}>{props.name}</Link>
);