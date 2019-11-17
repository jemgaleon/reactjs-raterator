import React, { Component } from 'react';
import '../styles/LikeCounter.css';

export class LikeCounter extends Component {
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
                Like
            </button>
        );

        const span = (
            <span>
                {this.props.count}
            </span>
        );

        return (
            <div className="likeCounter">
                {button}
                {span}
            </div>
        );
    }
}