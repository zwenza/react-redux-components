import React, {Component} from "react";
import Create from "./create/Create";

export default class Crudl extends React.Component {
    render() {
        return (
            <div>
                <h1>Crudl</h1>
                {this.props.children}
            </div>
        );
    }
}

Crudl.propTypes = {
    //FIXME: not quite correct if we pass only one children!
    // children: React.PropTypes.arrayOf(
    //     React.PropTypes.oneOfType([
    //         React.PropTypes.instanceOf(Create)
    //     ])
    // )
};