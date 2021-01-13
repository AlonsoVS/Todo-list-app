import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import '../components/styles/BoxList.css';
import Box from './Box';
import { v4 as uuidv4 } from 'uuid';

class BoxList extends Component {
    state = {
        todo: [],
        edit: false
    };

    setNewTodo = newEntry => {
        let newTodo = [...this.state.todo];
        newTodo.push(newEntry);
        this.setState({todo:newTodo});
    }

    activeEdit = () => {
        this.setState({edit: true});
    }
    
    editTodo = (editedEntry) => {
        let updateTodo = this.state.todo.map(todo => {
            if(todo.id === editedEntry.id) {todo.description = editedEntry.description;}
            return todo;
        });
        this.setState({
            todo:updateTodo,
            edit: false
        });
    };

    deleteTodo = (id) => {
        this.setState((current) => ({
            todo: current.todo.filter(item => item.id != id)
        }));
    };

    render() {
        
        return(
            <div>
                <h1>ToDo List</h1>
                <ul>
                    {this.state.todo.map((todo)=>{
                        return <li id={todo.id}>
                                    <Box edit={this.state.edit} id={todo.id} onActiveEdit={this.activeEdit} onEditSubmit={this.editTodo} onDeleteTodo={this.deleteTodo} todo={todo.description}/>
                                </li>
                        })
                    }
                </ul>
                <NewBoxForm typeForm="New ToDo" value="Add ToDo" boxId={uuidv4()} onSubmit={this.setNewTodo}/>
            </div>
        );
    }
}

export default BoxList;