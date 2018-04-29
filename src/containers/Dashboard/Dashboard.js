import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CharactersService, } from '../../services';

import HeroCard from '../../components/DataDisplay/HeroCard/HeroCard';
import './dashboard.css';

class Dashboard extends Component {
    state = {
        characters: [
            {
                id: '1011334',
                name: '3-D Man',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
                    extension: 'jpg'
                },
                comics: {
                    available: 35
                },
            },
            {
                id: '1017100',
                "name": "A-Bomb (HAS)",
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
                    extension: 'jpg'
                },
                comics: {
                    available: 35
                },
            },
            {
                id: '1009144',
                name: 'A.I.M.',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec',
                    extension: 'jpg'
                },
                comics: {
                    available: 35
                },
            },
            {
                id: '1010699',
                "name": "Aaron Stack",
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
                    extension: 'jpg'
                },
                comics: {
                    available: 35
                },
            },
            {
                id: '1011334',
                name: '3-D Man',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
                    extension: 'jpg'
                },
                comics: {
                    available: 35
                },
            },
            {
                id: '1017100',
                "name": "A-Bomb (HAS)",
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
                    extension: 'jpg'
                },
                comics: {
                    available: 35
                },
            },
            {
                id: '1009144',
                name: 'A.I.M.',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec',
                    extension: 'jpg'
                },
                comics: {
                    available: 35
                },
            },
            {
                id: '1010699',
                "name": "Aaron Stack",
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
                    extension: 'jpg'
                },
                comics: {
                    available: 35
                },
            },{
                id: '1011334',
                name: '3-D Man',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
                    extension: 'jpg'
                },
                comics: {
                    available: 35
                },
            },
            {
                id: '1017100',
                "name": "A-Bomb (HAS)",
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
                    extension: 'jpg'
                },
                comics: {
                    available: 35
                },
            },
            {
                id: '1009144',
                name: 'A.I.M.',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec',
                    extension: 'jpg'
                },
                comics: {
                    available: 35
                },
            },
            {
                id: '1010699',
                "name": "Aaron Stack",
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
                    extension: 'jpg'
                },
                comics: {
                    available: 35
                },
            },
            {
                id: '1011334',
                name: '3-D Man',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
                    extension: 'jpg'
                },
                comics: {
                    available: 35
                },
            },
            {
                id: '1017100',
                "name": "A-Bomb (HAS)",
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
                    extension: 'jpg'
                },
                comics: {
                    available: 35
                },
            },
            {
                id: '1009144',
                name: 'A.I.M.',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec',
                    extension: 'jpg'
                },
                comics: {
                    available: 35
                },
            },
            {
                id: '1010699',
                "name": "Aaron Stack",
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
                    extension: 'jpg'
                },
                comics: {
                    available: 35
                },
            },
        ],
    }

    componentDidMount() {
        // this.getCharacters();
    }

    async getCharacters() {
        const response = await CharactersService.getCharacters({ limit: 40 });

        this.setState({
            characters: response.data.data.results.map(val => ({
                name: val.name,
                thumbnail: val.thumbnail,
                comics: {
                    available: val.comics.available,
                },
            })),
        });
    }

    renderCharacters() {
        return this.state.characters.map((val, index) => (
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
            <div className="content-wrapper">
                {this.renderCharacters()}
            </div>
        )
    }
}

export default connect()(Dashboard);
