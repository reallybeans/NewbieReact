import React, { Component } from 'react';

export class ClassProps extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}! What are you doing?</h1>
                <p>I'm just doing my {this.props.job}</p>
            </div>
        );
    }
}

export default ClassProps
