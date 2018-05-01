import React, { Component } from 'react';

function withScrollToTopOnMount(Component) {
    return class extends Component {
        componentDidMount() {
            window.scrollTo(0, 0);
        }
        
        render() {
            return <Component {...this.props} />;
        }
    }
}

// class ScrollToTopOnMount extends Component {
    
//     componentDidMount() {
//         window.scrollTo(0, 0);
//     }

//     render() {
//         return null;
//     }
// }

export default withScrollToTopOnMount;