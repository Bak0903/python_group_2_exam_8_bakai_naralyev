import React, {Component} from 'react';
import './KanbanMain.css';
import GetList from '../../components/GetList/GetList';
import axios from 'axios';



class KanbanMain extends Component {

    state = {
        newTasks: [],
        inProcessTasks: [],
        doneTasks: [],
    };

    getAll = () => {
        axios.get('tasks').then(response => {
            return response.data
        }).then(allTasks => {
            let newTasks = [];
            let inProcessTasks = [];
            let doneTasks = [];
            Object.values(allTasks).map(task => {
                if (task.status === 'очередь') newTasks.push(task);
                else if (task.status === 'в работе') inProcessTasks.push(task);
                else if (task.status === 'сделано') doneTasks.push(task);
                return 0;
            });
            this.setState({newTasks, inProcessTasks, doneTasks});
        })
    };

    purchaseContinueHandler = (id) => {
        this.props.history.push({
            pathname: 'tasks/' + id
        });
    };

    componentDidMount() {
        this.getAll();
    }

    render() {
        return (
            <div className={'AllMovies'}>
                <GetList
                    list={this.state.newTasks}
                    list2={this.state.inProcessTasks}
                    list3={this.state.doneTasks}
                    click={this.purchaseContinueHandler}
                />
            </div>
        );
    }
}

export default KanbanMain;