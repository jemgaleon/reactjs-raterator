import React, { Component } from 'react';
import '../styles/ShowReviewsButton.css';

export class ShowReviewsButton extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if (typeof this.props.onClick === 'function')
            this.props.onClick(e);
    }

    render() {
        const button = (
            <button
                onClick={this.handleClick}>
                Show Reviews
            </button>
        );

        return (
            <div className="showReviewsButton">
                {button}
            </div>
        );
    }
}