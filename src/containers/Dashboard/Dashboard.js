import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CharactersService, } from '../../services';

class Dashboard extends Component {
    componentDidMount() {
        this.getHeroes();
    }

    async getHeroes() {
        // testing api call
        // const response = await CharactersService.getCharacters();
    }

    render() {
        return (
            <div>dash</div>
        )
    }
}

export default connect()(Dashboard);
