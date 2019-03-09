import React, {Component} from 'react';
import './Item.css';

class Item extends Component {
    render() {
        let data = this.props.date.substring(0,10);
        return (
            <div className={"item"}>
                <span className={"element title"}>{this.props.title}</span>
                <span className={"element text"}>{this.props.description}</span>
                <span className={"element data"}>Дата: {data}</span>
                <span className={"element time"}>Время: {this.props.time}</span>
            </div>
        );
    }
}

export default Item;