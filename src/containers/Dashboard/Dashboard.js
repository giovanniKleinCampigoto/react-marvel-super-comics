import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CharactersService, } from '../../services';
import mockCharacters from '../../services/characters/mockCharacters';

import HeroCard from '../../components/DataDisplay/HeroCard/HeroCard';
import Icon from '../../components/DataDisplay/Icon/Icon';
import InfiniteScroll from '../../components/Other/InfiniteScroll/InfiniteScroll';

import { FETCH_CHARACTERS, } from '../../redux/characters/types';

import './dashboard.css';

class Dashboard extends Component {
    state = {}

    componentDidMount() {
        const { history, charactersReducer, } = this.props;

        if (history.action !== 'POP' || !charactersReducer.characters.items.length) {
            this.getCharacters(true);
        }
    }

    getCharacters = async (resetReducer = false) => {
        const { dispatch, } = this.props;

        dispatch({
            type: FETCH_CHARACTERS.REQUEST,
            resetReducer,
        });
    }

    renderCharacters() {
        const { charactersReducer } = this.props;

        return charactersReducer.characters.items.map((val, index) => (
            <HeroCard
                key={index}
                name={val.name}
                imageSrc={`${val.thumbnail.path}/portrait_fantastic.${val.thumbnail.extension}`}
                comics={val.comics}
            />
        ));
    }

    render() {
        const props = this.props;

        return (
            <InfiniteScroll
                isLoading={props.charactersReducer.characters.isLoading}
                dataLength={props.charactersReducer.characters.items.length}
                onFetchData={this.getCharacters}
            >
                {() => (
                    <div className="d-flex flex-column align-items-center">
                        <div className="content-wrapper">
                            {this.renderCharacters()}
                        </div>
                        {props.charactersReducer.characters.isLoading &&
                            <Icon
                                name="spinner9"
                                margin="1rem 0 3rem 0"
                                spin={true}
                            />
                        }
                    </div>
                )}
            </InfiniteScroll>
        )
    }
}

const mapStateToProps = state => ({
    charactersReducer: state.charactersReducer,
});

export default connect(mapStateToProps)(Dashboard);
