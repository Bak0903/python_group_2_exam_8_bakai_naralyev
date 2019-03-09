import React, {Component} from 'react';
import './GetList.css';
import Item from '../Item/Item';

class GetList extends Component {
    render() {
        return (
            <div className={"list"}>
                {
                    Object.values(this.props).map((list, j) => {
                        if (Array.isArray(list)) {
                            return (<div className={"row line" + j} key={j}>
                                {Object.values(list).map((item, i) => {
                                    let shortString = item.description.substring(0,100) + '...';
                                    return (
                                        <div
                                            key={i}
                                            onClick={() => this.props.click(item.id)}
                                            className={'cardInLine'}
                                        >
                                            <Item
                                                title = {item.summary}
                                                description = {shortString}
                                                date = {item.due_date}
                                                time = {item.time_planned}
                                            />
                                        </div>)})}
                                    </div>)
                        }
                        else return null;
                })}
            </div>

        );
    }
}

export default GetList;