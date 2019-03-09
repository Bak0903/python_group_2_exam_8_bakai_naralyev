import React, {Component} from 'react';
import './SelectedItem.css';
import Item from '../../components/Item/Item';
import axios from 'axios';


class SelectedItem extends Component {

    state = {
        selectedItem: {},
    };

    getMovie = (id) => {
        axios.get('tasks/' + id).then(response => {
            return response.data
        }).then(selectedItem => this.setState({selectedItem}))
    };

    componentDidMount() {
        this.getMovie(this.props.match.params.id);
    }

    render() {
        return (
            <div className={'SelectedItem'}>
                <Item
                    title = {this.state.selectedItem.summary}
                    description = {this.state.selectedItem.description}
                    date = {this.state.selectedItem.due_date}
                    time = {this.state.selectedItem.time_planned}
                />
            </div>
        );
    }
}

export default SelectedItem;