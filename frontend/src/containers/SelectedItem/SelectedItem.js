import React, {Component} from 'react';
import './SelectedItem.css';
import EditItem from '../EditItem/EditItem';
// import Item from '../../components/Item/Item';
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
        if (Object.keys(this.state.selectedItem).length !== 0) {
            return (
            <div className={'SelectedItem'}>
                <EditItem task = {this.state.selectedItem}/>
            </div>
        );
        }
        else return null;
    }
}

export default SelectedItem;