import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon/Icon';
import './loading-content.css';

const LoadingContent = props => {
    const { isLoading } = props;

    if (isLoading) {
        return (
            <div className="loading-content">
                <Icon
                    name="spinner9"
                    margin="1rem 0 3rem 0"
                    spin={true}
                />
            </div>
        )
    }

    return props.children;
}

LoadingContent.propTypes = {
    isLoading: PropTypes.bool.isRequired
}

export default LoadingContent;