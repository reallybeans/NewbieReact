import React, { Component } from 'react';

export class RegComp extends Component {
    render() {
        console.log("Regular Comp");
        return ( 
            <div>
                Im the the regular Component {this.props.name}
            </div>
        );
    }
}

export default RegComp
