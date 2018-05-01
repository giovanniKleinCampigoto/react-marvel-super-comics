import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { throttle, } from 'lodash';

class InfiniteScroll extends Component {
    constructor(props) {
        super(props);

        this.onScroll = throttle(this.onScroll, 600);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
        if (
            (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
            this.props.dataLength && !this.props.isLoading
        ) {
            this.props.onFetchData();
            console.log('onScroll')
        }
    }

    render() {
        return (
            this.props.children()
        )
    }
}

InfiniteScroll.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    dataLength: PropTypes.number.isRequired,
    onFetchData: PropTypes.func.isRequired,
}

export default InfiniteScroll;