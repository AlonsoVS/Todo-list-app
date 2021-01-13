import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';

class Box extends Component{

    handleDelete = () => {
        this.props.onDeleteTodo(this.props.id);
    }

    render(){
        const toRender = <div>
                            <span>{this.props.todo}</span>
                            <button onClick={this.props.onActiveEdit} type="button">Edit</button>
                            <button onClick={this.handleDelete} type="button">Delete</button>
                        </div>;
        
        const editForm = <NewBoxForm typeForm="Edit ToDo" value="Edit ToDo" boxId={this.props.id} onSubmit={this.props.onEditSubmit} />;
        return(
            this.props.edit ? editForm : toRender
        );
    }
}

export default Box;