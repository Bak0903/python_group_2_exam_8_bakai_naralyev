import React, {Component} from 'react';
import './GetList.css';

class GetList extends Component {
    render() {
        return (
            <div className={"list"}>

                {
                    Object.values(this.props).map((list, j) => {
                        return <div className={"row line" + j} key={j}>{Object.values(list).map((item, i) => {
                            let shortString = item.description.substring(0,255) + '...';
                            return (
                                <div
                                    key={i}
                                    // onClick={() => this.props.click('SelectedMovie', item.id)}
                                    className={"item"}
                                >
                                    <span className={"element"}>{item.summary}</span>
                                    <span className={"element text"}>{shortString}</span>
                                    <span className={"element"}>{item.due_date}</span>
                                    <span className={"element"}>{item.time_planned}</span>
                                </div>)
                            }
                        )}</div>
                })}
            </div>

        );
    }
}

export default GetList;