import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import '../components/styles/BoxList.css';

class BoxList extends Component {
    state = {
        todo: []
    };

    setNewTodo = newEntry => {
        let newTodo = [...this.state.todo];
        newTodo.push(newEntry);
        this.setState({todo:newTodo});
    }

    render() {
        return(
            <div>
                <h1>BoxList</h1>
                <ul>
                    {this.state.todo.map((todo)=>{return <li>{todo}</li>})}
                </ul>
                <NewBoxForm onSubmit={this.setNewTodo}/>
            </div>
        );
    }
}

export default BoxList;