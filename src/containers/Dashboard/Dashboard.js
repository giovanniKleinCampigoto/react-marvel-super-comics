import React, { Component } from 'react';
import { connect } from 'react-redux';
import { throttle, } from 'lodash';
import { CharactersService, } from '../../services';
import mockCharacters from '../../services/characters/mockCharacters';

import HeroCard from '../../components/DataDisplay/HeroCard/HeroCard';
import Icon from '../../components/DataDisplay/Icon/Icon';

import './dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.onScroll = throttle(this.onScroll, 600);
    }

    state = {
        characters: {
            isLoading: false,
            offset: 0,
            limit: 48,
            // items: [],
            items: mockCharacters,
        }
    }

    componentDidMount() {
        // this.getCharacters();
        window.addEventListener('scroll', this.onScroll, false); // << CREATE HOC FOR THIS
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false); // << CREATE HOC FOR THIS
    }

    onScroll = () => {
        if (
            (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
            this.state.characters.items.length && !this.state.characters.isLoading
        ) {
            // this.getCharacters();
            console.log('getCharacters')
        }
    }

    async getCharacters() {
        this.setState({
            characters: {
                ...this.state.characters,
                isLoading: true,
            }
        });

        const response = await CharactersService.getCharacters({ limit: this.state.characters.limit, offset: this.state.characters.offset, });

        this.setState({
            characters: {
                ...this.state.characters,
                isLoading: false,
                offset: this.state.characters.offset + this.state.characters.limit,
                items: this.state.characters.items.concat(
                    ...response.data.data.results.map(val => ({
                        name: val.name,
                        thumbnail: val.thumbnail,
                        comics: {
                            available: val.comics.available,
                        },
                    }))
                ),
            },
        });
    }

    renderCharacters() {
        return this.state.characters.items.map((val, index) => (
            <HeroCard
                key={index}
                name={val.name}
                imageSrc={`${val.thumbnail.path}/portrait_fantastic.${val.thumbnail.extension}`}
                comics={val.comics}
            />
        ));
    }

    render() {
        return (
            <div className="d-flex flex-column align-items-center">
                <div className="content-wrapper">
                    {this.renderCharacters()}
                </div>
                {this.state.characters.isLoading &&
                    <Icon
                        name="spinner9"
                        margin="1rem 0 3rem 0"
                        spin={true}
                    />}
            </div>
        )
    }
}

export default connect()(Dashboard);
