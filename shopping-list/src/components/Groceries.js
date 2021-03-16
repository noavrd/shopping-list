import React, {Component} from "react";
import { render } from "react-dom";
import Basket from "./Basket"



export default class Groceries extends  React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <ul className="groceries">
                <li>
                    <button onClick={() => {
                        <Basket/>
                    }}>+</button>
                    {this.props.name}
                </li>
            </ul>
        )
    }
}