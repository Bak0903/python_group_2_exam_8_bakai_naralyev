import React, {Component} from 'react';
import './Item.css';

class Item extends Component {
    render() {
        return (
            <div className={"item"}>
                <span className={"element"}>{this.props.title}</span>
                <span className={"element text"}>{this.props.description}</span>
                <span className={"element"}>{this.props.date}</span>
                <span className={"element"}>{this.props.time}</span>
            </div>
        );
    }
}

export default Item;