import React, { Component } from 'react';
import { connect } from 'react-redux';

import CatalogCardContainer from '../../components/DataDisplay/CatalogCard/CatalogCardContainer';
import CatalogCard from '../../components/DataDisplay/CatalogCard/CatalogCard';
import Icon from '../../components/DataDisplay/Icon/Icon';
import InfiniteScroll from '../../components/Other/InfiniteScroll/InfiniteScroll';

import { FETCH_CHARACTERS, } from '../../redux/characters/types';

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

        return charactersReducer.characters.items
            .map((val, index) => (
                <CatalogCard
                    key={index}
                    name={val.name}
                    catalogSystem={true}
                    fixedSize={true}
                    imageSrc={val.thumbnail.path}
                    portrait="uncanny"
                    imgExtension={val.thumbnail.extension}
                    comics={val.comics}
                    redirectTo={`/hero/${val.id}`}
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
                        <CatalogCardContainer>
                            {this.renderCharacters()}
                        </CatalogCardContainer>

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
