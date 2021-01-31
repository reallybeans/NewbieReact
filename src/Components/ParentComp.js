import React, { Component } from 'react';
import PureComp from './PureComp';
import RegComp from "./RegComp";
export class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Bean"
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ name: "Bean" });
        }, 3000);
    }

    render() {
        console.log("Parent component Render");
        return (
            <div> I'm the Parent
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />

            </div>
        );
    }
}

export default ParentComp
