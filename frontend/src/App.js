import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import KanbanMain from './containers/KanbanMain/KanbanMain';
import SelectedItem from './containers/SelectedItem/SelectedItem';
import ItemAdd from './containers/ItemAdd/ItemAdd';
import EditItem from './containers/EditItem/EditItem';

class App extends Component {
    render() {
        return (
            <div className={'App'}>
                <BrowserRouter>
                    <Switch>
                        {/*<Route path="/tasks/:id" component={EditItem}/>*/}
                        <Route path="/tasks/add" component={ItemAdd}/>
                        <Route path="/tasks/:id" component={SelectedItem}/>
                        <Route path="/" exact component={KanbanMain}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
