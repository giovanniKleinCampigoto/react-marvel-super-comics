import React, { Component } from 'react';

import { Row, Col, } from 'reactstrap';

import withScrollToTopOnMount from '../../components/Other/ScrollToTopOnMount/withScrollToTopOnMount';
import CatalogCard from '../../components/DataDisplay/CatalogCard/CatalogCard';
import Icon from '../../components/DataDisplay/Icon/Icon';
import LoadingContent from '../../components/DataDisplay/LoadingContent/LoadingContent';
import Tabs from '../../components/Navigation/Tabs/Tabs';
import TabPane from '../../components/Navigation/Tabs/TabPane';


import { CharactersService, } from '../../services';

import { Link } from 'react-router-dom';

import './details.css';

class Details extends Component {
    state = {
        character: {
            isLoading: false,
            data: {},
        }
    }

    componentDidMount() {
        this.getCharacter();
    }

    async getCharacter() {
        const { match: { params } } = this.props;

        try {
            this.setState({
                character: {
                    ...this.state.character,
                    isLoading: true,
                }
            });

            const { data: { data } } = await CharactersService.getCharacter(params.id);

            this.setState({
                character: {
                    ...this.state.character,
                    isLoading: false,
                    data: {
                        name: data.results[0].name,
                        description: data.results[0].description,
                        thumbnail: data.results[0].thumbnail,
                        thumbnail: data.results[0].thumbnail,
                        comics: {
                            available: data.results[0].comics.available,
                        },
                        events: {
                            available: data.results[0].events.available,
                        },
                        series: {
                            available: data.results[0].series.available,
                        },
                        stories: {
                            available: data.results[0].stories.available,
                        },
                    }
                }
            })
        } catch (e) {
            // handle error
        }
    }

    render() {
        const state = this.state;
        const props = this.props;

        return (
            <div className="container">
                <LoadingContent isLoading={state.character.isLoading}>
                    {Object.keys(state.character.data).length &&
                        <div className="hero-details-header">
                            <CatalogCard
                                imageSrc={state.character.data.thumbnail.path}
                                portrait="uncanny"
                                imgExtension={state.character.data.thumbnail.extension}
                                className="hero-details-header__avatar"
                            />

                            <div className="hero-details-header__info">
                                <div className="hero-details-header__name">
                                    <h2>{state.character.data.name}</h2>
                                </div>
                                <div className="hero-details-header__description">
                                    <p>{state.character.data.description || 'No description.'}</p>
                                </div>
                            </div>
                        </div>
                    }
                </LoadingContent>

                <Tabs defaultTabKey="1">
                    <TabPane title="Comics" tabKey="1" link="/testing">
                        Comics Content
                    </TabPane>
                    <TabPane title="Events" tabKey="2" link="/testing">
                        Events Content
                    </TabPane>
                    <TabPane title="Series" tabKey="3" link="/testing">
                        Series Content
                    </TabPane>
                    <TabPane title="Stories" tabKey="4" link="/testing">
                        Stories Content
                    </TabPane>
                </Tabs>

            </div>
        );
    }
}

export default withScrollToTopOnMount(Details);