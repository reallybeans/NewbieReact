import React, { Component } from 'react';
import noRing from "./img/noRing.png";
import ring from "./img/ring.png";
export class CompForState extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Try more, no eat to much!",
            promise: "OK!",
            imageURL: noRing
        }
    }
    ButtonChange = () => {
        this.setState({
            message: "OK! Good job",
            promise: "GOOD",
            imageURL: noRing
        });
    };
    imageChange = () => {
        this.setState({
            message: "Try more, no eat to much!",
            promise: "OK!",
            imageURL: ring
        });
    };
    styles = {
        color: "purple", fontStyle: "italic"
    }
    render() {
        return (
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.ButtonChange}>{this.state.promise}</button>
                <p />
                <img style={{ width: "30px", height: "30px" }}
                    src={this.state.imageURL} onClick={this.imageChange} alt="" />
            </div>
        )
    }
}

export default CompForState
