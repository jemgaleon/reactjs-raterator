import React, { Component } from 'react';
import '../styles/ButtonPanel.css';

export class ButtonPanel extends Component {
    render() {
        return (
            <div className="buttonPanel">
                <div className="leftButton">
                    {this.props.left}
                </div>
                <div className="rightButton">
                    {this.props.right}
                </div>
            </div>
        );
    }
}