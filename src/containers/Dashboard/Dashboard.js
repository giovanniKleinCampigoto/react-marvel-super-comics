import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CharactersService, } from '../../services';

import { Button } from 'reactstrap';

import HeroeCard from '../../components/DataDisplay/HeroeCard/HeroeCard';
import './dashboard.css';

class Dashboard extends Component {
    state = {
        characters: [
            {
                name: 'Hero 1',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
                    extension: 'jpg'
                }
            },
            {
                name: 'Hero 1',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
                    extension: 'jpg'
                }
            },
            {
                name: 'Hero 1',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec',
                    extension: 'jpg'
                }
            },
            {
                name: 'Hero 1',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
                    extension: 'jpg'
                }
            },
            {
                name: 'Hero 1',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
                    extension: 'jpg'
                }
            },
            {
                name: 'Hero 1',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
                    extension: 'jpg'
                }
            },
            {
                name: 'Hero 1',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec',
                    extension: 'jpg'
                }
            },
            {
                name: 'Hero 1',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
                    extension: 'jpg'
                }
            },
            {
                name: 'Hero 1',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
                    extension: 'jpg'
                }
            },
            {
                name: 'Hero 1',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
                    extension: 'jpg'
                }
            },
            {
                name: 'Hero 1',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec',
                    extension: 'jpg'
                }
            },
            {
                name: 'Hero 1',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
                    extension: 'jpg'
                }
            },
            {
                name: 'Hero 1',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
                    extension: 'jpg'
                }
            },
            {
                name: 'Hero 1',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
                    extension: 'jpg'
                }
            },
            {
                name: 'Hero 1',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec',
                    extension: 'jpg'
                }
            },
            {
                name: 'Hero 1',
                thumbnail: {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
                    extension: 'jpg'
                }
            },
        ],
    }

    componentDidMount() {
        // this.getCharacters();
    }

    async getCharacters() {
        const response = await CharactersService.getCharacters({limit: 40});
        
        this.setState({
            characters: response.data.data.results.map(val => ({
                name: val.name,
                thumbnail: val.thumbnail,
            })),
        });
    }

    renderCharacters() {
        return this.state.characters.map((val, index) => (
            <HeroeCard key={index} imageSrc={`${val.thumbnail.path}/portrait_fantastic.${val.thumbnail.extension}`} />
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
