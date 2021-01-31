import React from "react";

function FunctionProps(props) {
    return (
        <div>
            <h3>This is functional component</h3>,
            <h3>Hello {props.name} Fine! He is doing {props.job} </h3>
        </div>
    );
}
export default FunctionProps;