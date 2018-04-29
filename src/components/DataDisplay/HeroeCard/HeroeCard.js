import React, { Component, } from 'react';
import { Col } from 'reactstrap';

import './heroe-card.css';

class HeroeCard extends Component {
    state = {}

    render() {
        return (
            <div className="heroe-card">
                <div className="heroe-card__image-wrapper">
                    <img src={this.props.imageSrc} className="heroe-card__image" />
                </div>
            </div>
        );
    }
}

export default HeroeCard;