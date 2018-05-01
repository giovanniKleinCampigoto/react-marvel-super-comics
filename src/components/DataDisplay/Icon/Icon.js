import React from 'react';
import PropTypes from 'prop-types';
import symbolDefs from '../../../images/icomoonSprites/symbolDefs.svg';
import './icon.css';

const Icon = ({ name, height, width, margin, spin, }) => {
    const spinning = spin ? ' custom-icon--spin' : '';

    return (
        <svg
            className={`custom-icon${spinning}`}
            height={height || 24}
            width={width || 24}
            style={{ margin }}
        >
            <use xlinkHref={`${symbolDefs}#icon-${name}`}></use>
        </svg>
    )
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    height: PropTypes.string,
    width: PropTypes.string,
    spin: PropTypes.bool,
}

export default Icon;