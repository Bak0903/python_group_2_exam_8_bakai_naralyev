import React, {Component} from 'react';
import './SelectedItem.css';
import GetItem from '../../components/GetItem/GetItem';
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
                <GetItem
                    item = {this.state.selectedItem}
                />
            </div>
        );
    }
}

export default SelectedItem;