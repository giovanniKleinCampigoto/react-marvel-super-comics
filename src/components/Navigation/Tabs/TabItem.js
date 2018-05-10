import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './tabs.css';

class TabItem extends Component { // create as stateless component
    state = {}

    render() {
        const { title, link, onClick, isActive, } = this.props;

        const activeClass = isActive ? 'tabs-nav__item__active' : '';

        return (
            <li className={`tabs-nav__item ${activeClass}`} onClick={onClick}>
                <Link to={'/hero/1017100'}>{title}</Link>
            </li>
        );
    }
}

TabItem.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
}

export default TabItem;