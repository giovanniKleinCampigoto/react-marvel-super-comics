import React from 'react';
import PropTypes from 'prop-types';

import { withRouter, } from 'react-router-dom';

import './catalog-card.css';

const onClickCard = (redirectTo, history) => {
    if (!redirectTo) return;

    history.push(redirectTo);
}

const CatalogCard = props => {
    const { className } = props;
    const fixedSize = props.fixedSize ? 'catalog-card__fixed-size' : '';
    const catalogSystem = props.catalogSystem ? 'catalog-card-wrapper__catalog-width' : '';

    return (
        <div className={`catalog-card-wrapper ${catalogSystem} ${className || ''}`}>
            <div className={`catalog-card ${fixedSize}`} onClick={() => onClickCard(props.redirectTo, props.history)}>
                <div className="catalog-card__image-wrapper">
                    <img
                        src={`${props.imageSrc}/portrait_${props.portrait}.${props.imgExtension}`}
                        className="catalog-card__image"
                        alt="Catalog Item"
                    />
                </div>

                {props.name || props.comics ?
                    (
                        <div className="catalog-card__info">
                            <span className="catalog-card__info--name">{props.name}</span>
                            <span className="catalog-card__info--more">
                                Comics: {props.comics.available}
                            </span>
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
};

CatalogCard.propTypes = {
    name: PropTypes.string,
    imageSrc: PropTypes.string.isRequired,
    portrait: PropTypes.string.isRequired,
    imgExtension: PropTypes.string.isRequired,
    comics: PropTypes.shape({
        available: PropTypes.number.isRequired
    }),
    fixedSize: PropTypes.bool,
    redirectTo: PropTypes.string,
    catalogSystem: PropTypes.bool,
}

export default withRouter(CatalogCard);