import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TabItem from './TabItem';

import './tabs.css';

class Tabs extends Component {
    state = {
        currentTabKey: this.props.defaultTabKey
    }

    setCurrentTab = (tabKey) => {
        this.setState({
            currentTabKey: tabKey
        });
    }

    renderTabItems(children) {
        const state = this.state;

        return React.Children.map(this.props.children, (child, index) => {
            return (
                <TabItem
                    title={child.props.title}
                    link={child.props.link}
                    onClick={() => this.setCurrentTab(child.props.tabKey)}
                    isActive={child.props.tabKey === state.currentTabKey}
                />
            )
        });
    }

    render() {
        const { children } = this.props;
        const state = this.state;

        const currentContentTab = React.Children.toArray(children)
            .filter((child, index) => child.props.tabKey === state.currentTabKey);

        return (
            <React.Fragment>
                <nav className="tabs-nav">
                    <ul className="tabs-nav__ul">
                        {this.renderTabItems(children)}
                    </ul>
                </nav>
                <div>
                    {currentContentTab}
                </div>
            </React.Fragment>
        );
    }
}

Tabs.propTypes = {
    defaultTabKey: PropTypes.string.isRequired
}

export default Tabs;