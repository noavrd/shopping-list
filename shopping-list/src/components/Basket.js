import React, {useState} from "react";

export default class Basket extends React.Component {

    state = {
        counter: 1
    };

    increase = () => {
        this.setState({counter:this.state.increase + 1})
    }

    render() {
        return (
            
            <ul className="groceries">
            <li>
                {this.state.counter !== 0 ? this.props.name : ""}
                {console.log(this.state)}
            </li>
        </ul>
        )
    }

        
    
}

