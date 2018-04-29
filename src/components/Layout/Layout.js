import React, { Component, } from 'react';
import CustomNavbar from '../Navigation/Navbar/CustomNavbar';

import './layout.css'

class Layout extends Component {
    state = {}

    render() {
        return (
            <div className="custom-layout">
                <CustomNavbar />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;