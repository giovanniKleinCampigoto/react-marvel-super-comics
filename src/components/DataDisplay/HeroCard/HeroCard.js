import React, { Component, } from 'react';
import { Link } from 'react-router-dom';

import './hero-card.css';

class HeroeCard extends Component {
    state = {}

    render() {
        return (
            <div className="hero-card-wrapper">
                <Link to="/hero/dsfsdf">
                    <div className="hero-card">
                        <img src={this.props.imageSrc} className="hero-card__image" />
                    </div>
                    <div className="hero-card__info">
                        <span className="hero-card__info--name">{this.props.name}</span>
                        <span className="hero-card__info--more">
                            Comics: {this.props.comics.available}
                        </span>
                    </div>
                </Link>
            </div>
        );
    }
}

export default HeroeCard;