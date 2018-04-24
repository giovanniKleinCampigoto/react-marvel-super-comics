import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CharactersService, } from '../../services';

import { Button } from 'reactstrap';

class Dashboard extends Component {
    state = {
        characters: [],
    }

    componentDidMount() {
        this.getCharacters();
    }

    async getCharacters() {
        // const response = await CharactersService.getCharacters({limit: 20});
        
        // this.setState({
        //     characters: response.data.data.results.map(val => ({
        //         name: val.name,
        //         thumbnail: val.thumbnail,
        //     })),
        // });
    }

    renderCharacters() {
        return this.state.characters.map((val, index) => (
            <img key={index} src={`${val.thumbnail.path}/portrait_fantastic.${val.thumbnail.extension}`} />
        ));
    }

    render() {
        return (
            <React.Fragment>
                <Button color="primary">Primary</Button>
                <span>HEROES</span>
                {this.renderCharacters()}
            </React.Fragment>
        )
    }
}

export default connect()(Dashboard);
